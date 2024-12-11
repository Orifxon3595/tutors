import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
// import { BsPerson } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import test4x4 from "../../assets/icons/test4x4.png";

const Breadcrumb = () => {
    const data = JSON.parse(localStorage.getItem("data"));
    const [toglerMenu, setToglerMenu] = useState(false);
    const [settingMenu, setSettingMenu] = useState(false);
    // const [image, setImage] = useState("");
    const location = useLocation();
    const path = location.pathname.split("/").filter(Boolean).pop();
    const formattedPath = path
        ? path.charAt(0).toUpperCase() + path.slice(1)
        : "";

    const menuRef = useRef(null); // Menu elementiga murojaat qilish uchun
    const buttonRef = useRef(null); // Tugma elementini kuzatish uchun

    const toggleMenu = (e) => {
        e.stopPropagation(); // Hodisa tarqalishini to'xtatamiz
        setToglerMenu((prev) => !prev); // Menyuni ochish/yopish
        setSettingMenu(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Agar klik Menu yoki Button ichida bo'lmasa, Menu ni yopamiz
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setToglerMenu(false);
                setSettingMenu(false);
            }
        };

        // Hodisani qo'shish
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            // Hodisani olib tashlash
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="w-full flex justify-between items-center relative select-none">
            {/* Location */}
            <div className="font-medium">{formattedPath}</div>
            {/* Account */}
            <div
                ref={buttonRef}
                className="flex items-center gap-2 hover:bg-gray-300 cursor-pointer rounded-md px-2"
                onClick={toggleMenu}
            >
                <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full overflow-hidden">
                    {data?.image ? (
                        <img src={data.image} alt="icon" />
                    ) : (
                        <img src={test4x4} alt="icon" />

                        // <BsPerson className="w-full h-full" />
                    )}
                </div>
                <div>
                    {data.surname} {data.name.slice(0, 1)}
                </div>
            </div>
            {/* Togler Menu */}
            <div
                ref={menuRef}
                className={`w-[220px] absolute top-[46px] right-0 z-30 p-2 rounded-md shadow-lg border border-gray-300 bg-white ${
                    !toglerMenu && "hidden"
                }`}
            >
                <div className="">
                    <div className="flex justify-end">
                        <IoMdSettings
                            className="cursor-pointer"
                            onClick={() => setSettingMenu(!settingMenu)}
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full overflow-hidden">
                            {data?.image ? (
                                <img src={data?.image} alt="icon" />
                            ) : (
                                <img src={test4x4} alt="icon" />
                                // <BsPerson className="w-full h-full" />
                            )}
                        </div>
                        <div className="leading-4">
                            <div className="line-clamp-1">{data.surname}</div>
                            <div className="line-clamp-1">{data.name}</div>
                        </div>
                    </div>
                    <div
                        className={`flex flex-col gap-2 overflow-hidden transition-[height] ease-linear duration-[0.3s] ${
                            settingMenu ? "h-[160px]" : "h-0"
                        }`}
                    >
                        <hr className="mt-2" />
                        <h1 className="font-medium">Rasimni tahrirlash:</h1>
                        <div>
                            <input
                                type="file"
                                className={`block w-full text-sm text-slate-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700
                                hover:file:bg-violet-100
                                cursor-pointer
                                `}
                            />
                            <div className="text-[12px] text-[red] ms-2">
                                Rasim 4x4 bo'lsihi kerk!
                            </div>
                        </div>
                        <button
                            type="button"
                            className="py-2 px-5 bg-blue-400 text-white font-semibold rounded-full shadow-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-75"
                        >
                            Jo'natish
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
