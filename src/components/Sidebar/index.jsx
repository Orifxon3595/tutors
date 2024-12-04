import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import sidebar from "../../utils/sidebar";
import kspiLogo from "../../assets/icons/logo_kspi.png";
import {
    Arrow,
    ChildWrapper,
    Menu,
    MenuItem,
    ExitIcon,
    LogOut,
} from "./styled.js";
import "./style.css"

const Sidebar = () => {
    const [open, setOpen] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const onClickParent = ({ id, children, path }, e) => {
        if (open?.includes(id)) {
            let data = open.filter((val) => val !== id);
            localStorage.setItem("open", JSON.stringify(data));
            setOpen(data);
        } else {
            localStorage.setItem("open", JSON.stringify([...open, id]));
            setOpen([...open, id]);
        }
        if (!children) {
            e.preventDefault();
            navigate(path);
        }
    };

    const onLogOut = () => {
        navigate("/login");
    };

    useEffect(() => {
        const path = JSON.parse(localStorage.getItem("open"));
        setOpen(path || []);
    }, []);

    useEffect(() => {}, [location]);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1280px)");
        const handleResize = (e) => setIsActive(e.matches);
        handleResize(mediaQuery);
        mediaQuery.addEventListener("change", handleResize);
        return () => mediaQuery.removeEventListener("change", handleResize);
    }, []);
    const toggleSidebar = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="">
            {/* Sidebar */}
            <aside
                className={`fixed inset-y-1 flex-wrap items-center justify-between w-64 p-0 antialiased transition-transform duration-300 bg-white shadow-xl dark:bg-slate-850 z-50 rounded-2xl overflow-cotom ${
                    isActive ? "translate-x-3" : "-translate-x-full"
                }`}
            >
                <div className="absolute w-full bg-blue-500 dark:hidden min-h-75"></div>

                {/* Logo Section */}
                <div className="sticky top-0 left-0 h-19 px-8 py-6 bg-white z-30 border-b border-black">
                    <Link
                        className="flex items-center text-sm text-slate-700 dark:text-white"
                        to="/analitka"
                    >
                        <img
                            src={kspiLogo}
                            className="inline max-h-8"
                            alt="logo"
                        />
                        <div className="font-semibold ml-2 mt-1">
                            KSPI TUTORS
                        </div>
                    </Link>
                </div>

                <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:via-white" />
                <div className="flex flex-col justify-between h-full">
                    <Menu>
                        {sidebar.map((parent) => {
                            const active = open.includes(parent.id);
                            const { icon: Icon } = parent;
                            const activePath = location.pathname?.includes(
                                parent.path
                            );

                            return !parent.hidden ? (
                                <React.Fragment key={parent.id}>
                                    <MenuItem
                                        onClick={(e) =>
                                            onClickParent(parent, e)
                                        }
                                        active={activePath.toString()}
                                    >
                                        <MenuItem.Title
                                            active={activePath.toString()}
                                        >
                                            <Icon className="icon" />{" "}
                                            {parent.title}
                                        </MenuItem.Title>
                                        {parent?.children?.length && (
                                            <Arrow active={active.toString()} />
                                        )}
                                    </MenuItem>
                                    <ChildWrapper active={active.toString()}>
                                        {parent?.children?.map((child) => {
                                            return (
                                                <MenuItem
                                                    key={child?.id}
                                                    to={child.path}
                                                    active={(
                                                        location.pathname ===
                                                        child.path
                                                    ).toString()}
                                                >
                                                    <MenuItem.Title>
                                                        {child?.title}
                                                    </MenuItem.Title>
                                                </MenuItem>
                                            );
                                        })}
                                    </ChildWrapper>
                                </React.Fragment>
                            ) : null;
                        })}
                    </Menu>
                    <LogOut onClick={onLogOut}>
                        <ExitIcon /> Chiqish
                    </LogOut>
                </div>
            </aside>

            {/* Main Content */}
            <main
                className={`transition-all duration-300 relative h-full max-h-screen xl:ml-64 rounded-xl p-4 xl:pl-8`}
            >
                {/* Mobile Menu Button */}
                <div className="flex items-center justify-between">
                    <div className="breadcrumbs text-sm">
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>Dashboard</li>
                        </ul>
                    </div>
                    <button onClick={toggleSidebar} className="p-2 xl:hidden">
                        {isActive ? <FaBarsStaggered /> : <FaBars />}
                    </button>
                </div>
                <Outlet />
            </main>
        </div>
    );
};

export default Sidebar;
