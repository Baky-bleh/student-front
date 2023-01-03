import React from 'react';
import Link from 'next/link'
import { signup } from '../../utils/ApiUtil';
import { useRouter } from 'next/router'
import { SocialLogin} from "./Auth-form";

export default function SignupPage() {
    return (
        <>
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
                            <SocialLogin />
                            <SignupForm />
                        </div>
                        <div className="flex flex-wrap mt-6 relative justify-center">
                            <small className="text-slate-200">Have already an account? </small>
                            <small className="text-slate-500"><Link href="/auth/login">Login here</Link></small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export function SignupForm(){
    const [form, setForm] = React.useState({
        name: "",
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
        signup(form)
            .then(response => {
                alert("You're successfully registered.");
                router.push('/auth/login')
            }).catch(error => {
            alert((error && error.message) || 'Oops! Something went wrong. Please try again!');
        });
    }
    return(
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div className="text-slate-400 text-center mb-3 font-bold">
                <small>Or sign up with credentials</small>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="relative w-full mb-3">
                    <label className="block uppercase text-slate-600 text-xs font-bold mb-2" htmlFor="grid-password">
                        Name
                    </label>
                    <input
                        type="text" name="name"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={form.name} placeholder="Name" onChange={handleInputChange} required
                    />
                </div>
                <div className="relative w-full mb-3">
                    <label className="block uppercase text-slate-600 text-xs font-bold mb-2" htmlFor="grid-password">
                        Email
                    </label>
                    <input
                        type="email" name="email"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={form.email} placeholder="Email" onChange={handleInputChange} required
                    />
                </div>

                <div className="relative w-full mb-3">
                    <label className="block uppercase text-slate-600 text-xs font-bold mb-2" htmlFor="grid-password">
                        Password
                    </label>
                    <input
                        type="password" name="password"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Password" value={form.password} onChange={handleInputChange} required/>
                </div>

                <div className="text-center mt-6">
                    <button className="bg-slate-700 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                            type="submit" >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    )
}