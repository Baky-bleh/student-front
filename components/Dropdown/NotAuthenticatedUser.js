import Link from "next/link";
import React from "react";

export default function NotAuthenticatedUser(){
    return(
        <>
            <Link className=
                      "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                href="/auth/login"
            >
                Нэвтрэх
            </Link>
            <div className="h-0 my-2 border border-solid border-blueGray-100" />
            <Link className=
                      "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                href="/auth/register"
            >
                Бүртгүүлэх
            </Link>
        </>
    )
}