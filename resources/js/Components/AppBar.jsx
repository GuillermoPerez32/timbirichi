import { Link } from "@inertiajs/react";
import { IconShoppingCart } from "@tabler/icons-react";
import React from "react";

const AppBar = () => {
    return (
        <div className="p-4 w-full rounded-b-lg bg-white flex items-center">
            <Link href={route("home")}>
                <img src="/logo.png" alt="logo timbirichi" />
            </Link>

            <Link href={route("home")} className="ml-auto">
                <IconShoppingCart />
            </Link>
        </div>
    );
};

export default AppBar;
