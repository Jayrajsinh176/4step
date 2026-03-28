import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from 'react-router-dom';


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-300 bg-white">
            <div className="w-full mx-auto px-3 sm:px-6">

                <div className="hidden md:flex justify-end gap-2 text-sm text-gray-700 py-2 font-medium">
                    <a href="#" className="hover:text-blue-600">Track Order</a>
                    <span>|</span>
                    <a href="#" className="hover:text-blue-600">Help Centre</a>
                </div>

                <div className="flex items-center justify-between h-14 sm:h-16">
                    <img
                        src="./images/4steplogo.png"
                        alt="4step"
                        className="h-12 sm:h-15 w-auto"
                    />

                    {/* Mobile menu button */}
                    <button 
                        className="md:hidden text-2xl text-gray-700"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <HiX /> : <HiMenu />}
                    </button>

                    <div className="hidden md:block text-xs sm:text-sm font-medium text-gray-700 mr-2">
                        <p>Welcome</p> 
                        <Link to="/" className=" hover:text-blue-600">Sign In </Link>
                        <span>/</span>
                        <Link to="/signup"  className=" hover:text-blue-600 ml-1">Register</Link>
                    </div>


                    <nav className="hidden md:flex gap-4 lg:gap-8 text-xs sm:text-sm font-medium text-gray-700">
                        <Link   to="/home" className="hover:text-blue-600">Home</Link> 
                        <a href="#" className="hover:text-blue-600">About</a>
                        <a href="#" className="hover:text-blue-600">Opportunity</a>
                        <Link to="/allproduct" className="hover:text-blue-600">All Products</Link>
                        <Link  to="/product" href="#" className="hover:text-blue-600">Products</Link>
                        <Link  to="/helpform" className="hover:text-blue-600">Contact</Link> 
                    </nav>

                    <div className="hidden md:flex items-center border border-gray-300  bg-gray-100  rounded-lg px-2 sm:px-3 py-1 gap-2">
                        <button
                            className="text-sm font-semibold hover:text-blue-600"
                        >
                            <FaSearch />
                        </button>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="outline-none text-xs sm:text-sm px-1 sm:px-2 py-1 bg-transparent w-32 sm:w-auto"
                        />
                    </div>


                    <div className="hidden md:flex gap-2">
                        <Link  to="/checkout" 
                            className="bg-gray-100 p-2 rounded-lg text-lg sm:text-xl text-gray-700 hover:text-blue-600">
                           
                            <RiShoppingBagLine />
                        </Link>
                        <a
                            href="#"
                            className="bg-gray-100 p-2 rounded-lg text-lg sm:text-xl text-gray-700 hover:text-blue-600"
                        >
                            <CgProfile />
                        </a>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-300 py-4 px-3">
                        <div className="flex flex-col space-y-3 text-sm font-medium text-gray-700">
                            <Link to="/" className="hover:text-blue-600 py-2">Sign In</Link>
                            <Link to="/signup" className="hover:text-blue-600 py-2">Register</Link>
                            <hr />
                            <Link to="/home" className="hover:text-blue-600 py-2">Home</Link>
                            <a href="#" className="hover:text-blue-600 py-2">About</a>
                            <a href="#" className="hover:text-blue-600 py-2">Opportunity</a>
                            <Link to="/allproduct" className="hover:text-blue-600 py-2">All Products</Link>
                            <Link to="/product" className="hover:text-blue-600 py-2">Products</Link>
                            <Link to="/helpform" className="hover:text-blue-600 py-2">Contact</Link>
                            <hr />
                            <Link to="/checkout" className="hover:text-blue-600 py-2 flex items-center gap-2">
                                <RiShoppingBagLine /> Cart
                            </Link>
                        </div>
                    </div>
                )}
                
            </div>
        </header>
    );
}

export default Header;
