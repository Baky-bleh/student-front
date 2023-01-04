import React, {useEffect, useRef} from "react";
import { createPopper } from "@popperjs/core";
import AuthenticatedUser from "./AuthenticatedUser";
import NotAuthenticatedUser from "./NotAuthenticatedUser";
import Image from "next/image";

function UserDropdown(){
    const [ user, setUser ] = React.useState({
        name: "Username",
        imageUrl: "/avatardefault.webp",
        authenticated: false
    });
  // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const dropdown = useRef(null);
    const openDropdownPopover = () => {
        setDropdownPopoverShow(true);
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
          placement: "bottom-start",
        });
    };

    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };

    useEffect(() => {
        if( sessionStorage["currentUser"] ) {
            const userInfo = JSON.parse(sessionStorage["currentUser"])
            if (userInfo.username !== "null") {
                setUser({
                    ...user,
                    name: userInfo.username,
                    authenticated: true
                });
            }
            else{
                setUser({
                    ...user,
                    authenticated: false
                });
            }
        }
        function handleClick(event) {
            if (dropdown.current && !dropdown.current.contains(event.target)) {
                setDropdownPopoverShow(false);
            }
        }
        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div ref={dropdown}>
          <a
            className="text-slate-500 block"
            ref={btnDropdownRef}
            onClick={(e) => {
              e.preventDefault();
              dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
            }}
          >
            <div className="items-center flex" >
              <span className="w-12 h-12 text-sm text-white bg-slate-200 inline-flex items-center justify-center rounded-full">
                <Image
                  alt="..."
                  id="userDropDownButton"
                  className="w-full rounded-full align-middle border-none shadow-lg"
                  src={user.imageUrl}
                  width={48}
                  height={48}
                />
              </span>
            </div>
          </a>
          <div
            ref={popoverDropdownRef}
            className={
              (dropdownPopoverShow ? "block " : "hidden ") +
              "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
            }
          >
              {user.authenticated ? <AuthenticatedUser/> : <NotAuthenticatedUser/>}
          </div>
        </div>
    );
};

export default UserDropdown;
