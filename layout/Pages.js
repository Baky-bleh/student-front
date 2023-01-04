import React from "react";
import {Alert} from "../components/Alert";
import IndexNavbar from "../components/IndexNavbar";
import FooterSmall from "../components/FooterSmall";

export default function Pages({ children }) {
    return (
        <>
          <div className="relative">
            <IndexNavbar fixed />
              <Alert/>
            <div className="px-4 md:px-10 mt-32 mx-auto w-full">
                {children}
            </div>
            <FooterSmall />
          </div>
        </>
    );
}
