import { Container,CustomNavLinkList } from "./Design";
import { IoSearchOutline } from "react-icons/io5";
import {menulists} from "../../assets/data";
import { useRef, useState,useEffect } from "react";
import {useLocation} from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Header = () => {
    const [isOpen,setIsOpen]=useState(false);
    const [isScrolled,setIsScrolled]=useState(false);
    const location=useLocation();

    const menuRef=useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenuOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsOpen(false);
        }
    };

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
      };

    useEffect(() => {
        document.addEventListener("mousedown", closeMenuOutside);
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          document.removeEventListener("mousedown", closeMenuOutside);
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

      const isHomePage = location.pathname === "/";

      const role = "buyer";
    return (
        <>
            <header className={isHomePage ? `header py-1 bg-primary ${isScrolled ? "scrolled" : ""}` : `header bg-white shadow-s1 ${isScrolled ? "scrolled" : ""}`}>
            <Container>
                <nav className="p-4 flex justify-between items-center relative">
                    <div className="flex items-center gap-14">
                        <div>
                        {isHomePage && !isScrolled ? (
                            <img src="../images/common/header-logo.png" alt="LogoImg" className="h-11" />
                            ) : (
                            <img src="../images/common/header-logo2.png" alt="LogoImg" className="h-11" />
                            )}
                        </div>
                        <div className="hidden lg:flex items-center justify-between gap-8">
                            {menulists.map((list,index) =>(
                                <li key={index} className="capitalize list-none text-white">
                                    <CustomNavLinkList href={list.path} isActive={location.pathname === list.path} className={`${isScrolled || !isHomePage ? "text-black" : "text-white"}`}>{list.link}</CustomNavLinkList>
                                </li>
                            )
                            )}
                        </div>
                    </div>

                    <div className="flex items-center gap-8 icons">
                        <div className="hidden lg:flex lg:items-center lg:gap-8 text-white">
                            <IoSearchOutline size={23}/>
                            <CustomNavLinkList href="/login" className={`${isScrolled || !isHomePage ? "text-black" : "text-white"}`}>Login</CustomNavLinkList>
                            <CustomNavLinkList href="/register" className={`${!isHomePage || isScrolled ? "bg-primary text-white" : "bg-white text-primary"}  px-8 py-2 rounded-full shadow-md`}>Sign up </CustomNavLinkList>
                        </div>
                    

                    <div className={`icon flex items-center justify-center gap-6 ${isScrolled || !isHomePage ? "text-primary" : "text-white"}`}>
                <button onClick={toggleMenu} className="lg:hidden w-10 h-10 flex justify-center items-center bg-black text-white focus:outline-none">
                  {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                </button>
                </div>
              </div>

              <div ref={menuRef}className={`lg:flex lg:items-center lg:w-auto w-full p-5 absolute right-0 top-full menu-container ${isOpen ? "open" : "closed"}`}>
                            {menulists.map((list,index) =>(
                                <li key={index} className="uppercase list-none">
                                    <CustomNavLinkList href={list.path} className="text-white">{list.link}</CustomNavLinkList>
                                </li>
                            )
                            )}
                    </div>

                </nav>
            </Container>
        </header>
        </>
    );
};
