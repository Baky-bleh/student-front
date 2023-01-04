import {alertService} from "../Alert.service";
import {useRouter} from "next/router";

export default function AuthenticatedUser(){
    const router = useRouter()
    const handleLogout = () => {
        sessionStorage.setItem("authenticated","false");
        sessionStorage.setItem("currentUser",JSON.stringify({ username: "null"}));
        sessionStorage.removeItem(process.env.ACCESS_TOKEN);
        router.push('/auth/login');
        alertService.success("Баяртай", {
            autoClose: true,
            keepAfterRouteChange: true
        })
    }
    return(
        <>
            <a
                href=""
                className=
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                onClick={handleLogout}
            >
                Гарах
            </a>
        </>
    )
}