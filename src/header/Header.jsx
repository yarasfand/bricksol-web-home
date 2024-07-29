"use client";
import "./header.css";
import { useState } from "react";
import { Dialog, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuClass, setMenuClass] = useState("");
  const [selectedOption, setSelectedOption] = useState("Home");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  }

  const handleToggleMenu = () => {
    if (menuClass == "mobile-menu-enter") {
      handleCloseMenu();
    } else {
      handleOpenMenu();
    }
  };

  const handleOpenMenu = () => {
    setMenuClass("mobile-menu-enter");
    setMobileMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setMenuClass("mobile-menu-exit");
  };

  return (
    <header className="fixed top-0 left-0 right-0 p-3 my-5 ">
      <nav
        aria-label="Global"
        className= "mx-auto max-w-2xl lg:max-w-4xl lg:px-3 items-center justify-between lg:gap-1 grid grid-cols-2 gap-4 lg:flex"
      >

        <div className="flex lg:flex-1 lg:p-0 sm:p-3">
          <a href="#" className="-m2 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src={"./logo.avif"} className="h-4 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <div className="headerMenuButtonDiv">
            <input onClick={handleToggleMenu} type="checkbox" id="headerMenuButton" />
            <label for="headerMenuButton" className="headerMenuButtonLabel"></label>
          </div>
        </div>



        {mobileMenuOpen && (

          <div className={`mobile-menu ${menuClass}   col-span-2`}>

            <div className="mx-4">
              <a
                href="#"
                className={`mobile-menu-options block my-1 ${selectedOption === "Home" ? "selectedOptMobile" : ""
                  }`}
                onClick={() => handleOptionChange("Home")}
              >
                Home
              </a>
              <a
                href="#"
                className={`mobile-menu-options block my-1 ${selectedOption === "Projects" ? "selectedOptMobile" : ""
                  }`}
                onClick={() => handleOptionChange("Projects")}
              >
                Projects
              </a>
              <a
                href="#"
                className={`mobile-menu-options block my-1 ${selectedOption === "About" ? "selectedOptMobile" : ""
                  }`}
                onClick={() => handleOptionChange("About")}
              >
                About
              </a>
              <a
                href="#"
                className={`mobile-menu-options block my-1 ${selectedOption === "Services" ? "selectedOptMobile" : ""
                  }`}
                onClick={() => handleOptionChange("Services")}
              >
                Services
              </a>
              <a
                href="#"
                className={`mobile-menu-options block my-1 ${selectedOption === "Blogs" ? "selectedOptMobile" : ""
                  }`}
                onClick={() => handleOptionChange("Blogs")}
              >
                Blogs
              </a>
            </div>
            <div className="mobile-menu-buttons ">
              <div className="mt-16 mb-5 mx-7 m-auto">
                <div className="flex justify-center">
                <a
                  href="#"
                  className="headerButton py-1.5 px-9  text-white rounded-full"
                >
                  Let's Talk
                </a>
                </div>
              </div>
            </div>
          </div>
        )}


        <PopoverGroup className="hidden lg:flex l g:gap-x-1">
          <a
            href="#"
            onClick={() => handleOptionChange("Home")}
            className={`header-Links text-md font-semibold leading-6 ${selectedOption === "Home" ? "selectedoption" : ""
              }`}
          >
            Home
          </a>
          <a
            href="#"
            onClick={() => handleOptionChange("Projects")}
            className={`header-Links text-md font-semibold leading-6 ${selectedOption === "Projects" ? "selectedoption" : ""
              }`}
          >
            Projects
          </a>
          <a
            href="#"
            onClick={() => handleOptionChange("About")}
            className={`header-Links text-md font-semibold leading-6 ${selectedOption === "About" ? "selectedoption" : ""
              }`}
          >
            About
          </a>
          <a
            href="#"
            onClick={() => handleOptionChange("Services")}
            className={`header-Links text-md font-semibold leading-6 ${selectedOption === "Services" ? "selectedoption" : ""
              }`}
          >
            Services
          </a>
          <a
            href="#"
            onClick={() => handleOptionChange("Blogs")}
            className={`header-Links text-md font-semibold leading-6 ${selectedOption === "Blogs" ? "selectedoption" : ""
              }`}
          >
            Blogs
          </a>
        </PopoverGroup>
        <div className="headerButtonDiv hidden lg:flex lg:justify-end">
          <a
            href="#"
            className="headerButton py-2.5 px-8  text-white rounded-full"
          >
            Let's Talk
          </a>
        </div>

      </nav>
    </header>
  );
}
