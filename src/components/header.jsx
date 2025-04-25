import React, { useState } from 'react';
import { IoCall } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from 'react-scroll';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <header className="w-full ">

            {/* Main nav */}
            <div className="bg-gradient-to-r z-50 fixed w-full from-[#1e3a5f] to-[#3a4d5f] px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="Logo" className="w-12 h-12 object-contain" />
                </div>

                {/* Desktop menu */}
                <nav className="hidden  md:flex gap-8 text-white font-semibold tracking-wide text-sm">
                    <Link to="bizhaqimizda" smooth={true} duration={500} offset={-100} className="cursor-pointer">BIZ HAQIMIZDA</Link>
                    <Link to="rasimlar" smooth={true} duration={500} offset={-150} className="cursor-pointer">RASIMLAR</Link>
                    <Link to="afzalliklar" smooth={true} duration={500} offset={-100} className="cursor-pointer">AFZALLIKLAR</Link>
                    <Link to="bronqilish" smooth={true} duration={500} offset={-100} className="cursor-pointer">BRON QILISH</Link>
                    <Link to="kontaktlar" smooth={true} duration={500} className="cursor-pointer">KONTAKTLAR</Link>
                </nav>



                {/* Order Button */}
                <div className='flex items-center gap-10'>
                    <div className="flex items-center gap-2 text-xl">
                        <span className='text-white'>🇺🇿 /</span>
                        <span className='text-white'>🇷🇺</span>
                    </div>
                    <button
                        className="hidden md:block bg-[#c39c75] text-white font-semibold px-6 py-2 rounded"
                        onClick={() => setIsModalOpen(true)}
                    >
                        BUYURTMA
                    </button>
                    {/* Buyurtma */}
                    {isModalOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white rounded-2xl w-full max-w-md p-6 relative shadow-lg">
                                {/* Close Button */}
                                <button
                                    className="absolute top-2 right-2 text-xl text-gray-600 hover:text-red-500"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    &times;
                                </button>

                                <h2 className="text-xl font-semibold text-center mb-4">Buyurtma berish</h2>

                                <form className="flex flex-col gap-4">
                                    <input
                                        type="text"
                                        placeholder="Ismingiz"
                                        className="border rounded px-4 py-2"
                                        required
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Telefon raqamingiz"
                                        className="border rounded px-4 py-2"
                                        required
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email manzilingiz"
                                        className="border rounded px-4 py-2"
                                    />

                                    <button
                                        type="submit"
                                        className="bg-[#017A87] text-white font-semibold py-2 rounded hover:bg-[#015f67]"
                                    >
                                        Yuborish
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}

                </div>



                {/* Mobile menu toggle */}
                <div className="md:hidden text-white text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <FiX /> : <FiMenu />}
                </div>
            </div>

            {/* Mobile dropdown menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-[#1e3a5f] text-white px-6 py-4 space-y-4 text-sm font-semibold">
                    <a href="#" className="block">XONALAR</a>
                    <a href="#" className="block">AFZALLIKLAR</a>
                    <a href="#" className="block">TAQQOSLASH</a>
                    <a href="#" className="block">KONTAKLAR</a>
                    <a href="#" className="block">RASMLAR</a>
                    <button className="w-full bg-[#c39c75] text-white px-4 py-2 mt-2 rounded">
                        BUYURTMA
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
