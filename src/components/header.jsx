import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from 'react-scroll';
import "../i18"
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import animhostel from "../assets/icon/anim.svg"


const Header = () => {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };
    // /////////////////////////// Email js //////////////////////////////////////////
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_zarp7qs',   // masalan: service_ab123cd
                'template_n9y64se',  // masalan: template_ef456gh
                form.current,
                '7STayiENTcu0WLfMR'    // masalan: public_xxYyZz
            )
            .then(
                (result) => {
                    console.log('Email sent!', result.text);
                    alert('Xabar yuborildi!');
                },
                (error) => {
                    console.log('Error:', error.text);
                    alert('Xatolik yuz berdi!');
                }
            );
    };


    return (
        <header className="w-full ">

            {/* Main nav */}
            <div className="bg-gradient-to-r z-50 fixed bg-[#017A87] w-full px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2 w-40 h-16">
                    <img src={animhostel} alt="Logo" className="w-40 h-28 object-contain" />
                </div>

                {/* Desktop menu */}
                <nav className="hidden lg:flex gap-6 text-white font-semibold tracking-wide">
                    <Link
                        to="bizhaqimizda"
                        smooth={true}
                        duration={500}
                        offset={-100}
                        className="cursor-pointer text-xs md:text-sm lg:text-base 2xl:text-lg"
                    >
                        {t("aboutUs")}
                    </Link>
                    <Link
                        to="rasimlar"
                        smooth={true}
                        duration={500}
                        offset={-150}
                        className="cursor-pointer text-xs md:text-sm lg:text-base 2xl:text-lg"
                    >
                        {t("images")}
                    </Link>
                    <Link
                        to="afzalliklar"
                        smooth={true}
                        duration={500}
                        offset={-100}
                        className="cursor-pointer text-xs md:text-sm lg:text-base 2xl:text-lg"
                    >
                        {t("advantages")}
                    </Link>
                    <Link
                        to="bronqilish"
                        smooth={true}
                        duration={500}
                        offset={-100}
                        className="cursor-pointer text-xs md:text-sm lg:text-base 2xl:text-lg"
                    >
                        {t("booking")}
                    </Link>
                    <Link
                        to="kontaktlar"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer text-xs md:text-sm lg:text-base 2xl:text-lg"
                    >
                        {t("contacts")}
                    </Link>
                </nav>

                {/* Order Button */}
                <div className='flex items-center gap-10'>
                    <div className="flex items-center gap-2 text-xl">
                        <span
                            className="cursor-pointer text-white"
                            onClick={() => toggleLanguage('uz')}
                        >
                            🇺🇿
                        </span>
                        <span className='text-white'>/</span>
                        <span
                            className="cursor-pointer text-white"
                            onClick={() => toggleLanguage('ru')}
                        >
                            🇷🇺
                        </span>
                    </div>
                    <button
                        className="hidden md:block bg-[#c39c75] text-white font-semibold px-10 py-2 rounded"
                        onClick={() => setIsModalOpen(true)}
                    >
                        {t("orderButton")}
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

                                <h2 className="text-xl font-semibold text-center mb-4">{t("orderTitle")}</h2>

                                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
                                    <input
                                        type="text"
                                        placeholder={t("namePlaceholder")}
                                        className="border rounded px-4 py-2"
                                        required
                                    />
                                    <input
                                        type="tel"
                                        placeholder={t("phonePlaceholder")}
                                        className="border rounded px-4 py-2"
                                        required
                                    />
                                    <input
                                        type="email"
                                        placeholder={t("emailPlaceholder")}
                                        className="border rounded px-4 py-2"

                                    />

                                    <button
                                        type="submit"
                                        className="bg-[#017A87] text-white font-semibold py-2 rounded hover:bg-[#015f67]"
                                    >
                                        {t("submitButton")}
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

            {isMenuOpen && (
                <div className="md:hidden fixed top-20 flex flex-col gap-2 px-5 z-40 w-full bg-[#1e3a5f] text-white  py-4 space-y-4 text-sm font-semibold">

                    {/* Regular menu links */}
                    <Link to="bizhaqimizda" smooth={true} duration={500} offset={-100} className="cursor-pointer">{t("aboutUs")}</Link>
                    <Link to="rasimlar" smooth={true} duration={500} offset={-150} className="cursor-pointer">{t("images")}</Link>
                    <Link to="afzalliklar" smooth={true} duration={500} offset={-100} className="cursor-pointer">{t("advantages")}</Link>
                    <Link to="bronqilish" smooth={true} duration={500} offset={-100} className="cursor-pointer">{t("booking")}</Link>
                    <Link to="kontaktlar" smooth={true} duration={500} className="cursor-pointer">{t("contacts")}</Link>

                    {/* Order Button */}
                    <button className="w-full bg-[#c39c75] text-white px-4 py-2 mt-4 rounded">
                        BUYURTMA
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
