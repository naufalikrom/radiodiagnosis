"use client"

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-white pt-4 pb-4 pl-10 pr-10 fixed z-50 top-0 left-0 w-full shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link href='/'>
                    <h1 className="text-2xl font-bold ml-3">RadioDiagnosis</h1>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    <li><a href="/landingPage" className="hover:text-gray-400">Home</a></li>
                    <li><a href="/detection" className="hover:text-gray-400 mr-3">Detection</a></li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden bg-gray-800 p-4 mt-2 space-y-4 text-center align-middle">
                    <li><a href="/landingPage" className="hover:text-gray-400">Home</a></li>
                    <li><a href="#" className="hover:text-gray-400 mr-3">Detection</a></li>
                </ul>
            )}
        </nav>
    );
}
