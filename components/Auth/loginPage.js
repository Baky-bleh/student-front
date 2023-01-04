import React from "react";
import {getCurrentUser, login} from "../../utils/ApiUtil";
import {useRouter} from "next/router";
import {alertService} from "../Alert.service";
import {Alert} from "../Alert";

export default function LoginPage() {
    return (
        <>
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function LoginForm(){
    const [form, setForm] = React.useState({
        email: "",
        password: ""
    })
    const router = useRouter()
    const handleInputChange = (event) => {
        const target = event.target
        const inputName = target.name
        const inputValue = target.value
        setForm({
            ...form,
            [inputName]: inputValue
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(form.email.toLowerCase(),form.password)
            .then(response => {
                sessionStorage.setItem(process.env.ACCESS_TOKEN, response.access_token);
                getCurrentUser()
                    .then(responseUser => {
                        sessionStorage.setItem("currentUser", JSON.stringify(responseUser))
                        sessionStorage.setItem("authenticated", "true")
                        router.push('/')
                    })
            }).catch(error => {
            if( error.statusCode === 401 ){
                sessionStorage.setItem("currentUser", JSON.stringify({ username: "null" }))
                sessionStorage.setItem("authenticated", "false")
            }
            alertService.error((error && error.message) || 'Oops! Something went wrong. Please try again!', {
                autoClose: true,
                keepAfterRouteChange: false
            })
        });
    }
    return(
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <Alert/>
            <div className="text-slate-400 text-center mb-3 font-bold">
                <small>Нэвтрэх</small>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="relative w-full mb-3">
                    <label className="block uppercase text-slate-600 text-xs font-bold mb-2" htmlFor="grid-password">
                        Нэвтрэх нэр
                    </label>
                    <input
                        type="text" name="email"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={form.email} placeholder="Нэвтрэх нэр" onChange={handleInputChange} required
                    />
                </div>

                <div className="relative w-full mb-3">
                    <label className="block uppercase text-slate-600 text-xs font-bold mb-2" htmlFor="grid-password">
                        Нууц үг
                    </label>
                    <input
                        type="password" name="password"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Нууц үг" value={form.password} onChange={handleInputChange} required/>
                </div>

                <div className="text-center mt-6">
                    <button className="bg-slate-700 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                            type="submit" >
                        Нэвтрэх
                    </button>
                </div>
            </form>
        </div>
    )
}
