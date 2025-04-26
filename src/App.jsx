import React, { useState } from 'react';
import Header from './components/header';
import hotelimg from "./assets/images/hotel.jpg"
import { ChevronLeft, ChevronRight, BedDouble, Wifi, Car, Phone, AtSign, MapPinned, CarFront, Shirt, Check, SquareUser, HandPlatter, Clock, CircleUser, } from "lucide-react";
import bedroom from "./assets/images/bedroom.png"
import goodplace from "./assets/images/goodplace.png"
import resturant from "./assets/images/resturant.png"
import parkovka from "./assets/images/parkovka.png"
import { useTranslation } from 'react-i18next'; // Importing translation hook
import { Link } from 'react-scroll';
import "./i18"
import emailjs from 'emailjs-com';
import { useRef } from 'react';


const cards = [
  { id: 1, title: "Card 1", content: "This is the first card This is the first card This is the first card This is the first card" },
  { id: 2, title: "Card 2", content: "This is the first card This is the first card This is the first card This is the first card" },
  { id: 3, title: "Card 3", content: "This is the first card This is the first card This is the first card This is the first card" },
  { id: 4, title: "Card 4", content: "This is the first card This is the first card This is the first card This is the first card" },
  { id: 5, title: "Card 5", content: "This is the first card This is the first card This is the first card This is the first card" },
  { id: 6, title: "Card 4", content: "This is the first card This is the first card This is the first card This is the first card" },
  { id: 7, title: "Card 5", content: "This is the first card This is the first card This is the first card This is the first card" },

];



const App = () => {
  const { t } = useTranslation();

  const features = [
    { id: 1, title: t('title_comfort_room'), img: bedroom, description: t("wifi_tv_service") },
    { id: 2, title: t('title_best_place'), img: goodplace, description: t('best_location') },
    { id: 3, title: t('title_restaurants'), img: resturant, description: t(`restaurant_food`) },
    { id: 4, title: t('title_parking'), img: parkovka, description: t('parking_info') },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const visibleCount = 4;
  const [startIndex, setStartIndex] = useState(0);

  const getVisibleCards = () => {
    return cards.slice(startIndex, startIndex + visibleCount);
  };

  const next = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prev = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const goTo = (index) => {
    setStartIndex(index);
  };

  const visibleCards = getVisibleCards();

  // ///////////////////////// Email js /////////////////////////////
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
    <>
      <Header />
      <main>

        <section
          className="w-full h-[100vh] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://picsum.photos/1600/500?random=1')" }}
        >
          <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold">Welcome to Our Section</h2>
          </div>

        </section>

        <section id='bizhaqimizda' className="px-6 md:px-10">
          <div className="mt-40  flex flex-col md:flex-row items-center gap-10">

            {/* Image */}
            <div className="w-full md:w-1/2">
              <img src={hotelimg} alt="Hotel Interior" className="rounded-lg shadow-lg w-full" />
            </div>

            {/* Text content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <p className="text-[#017A87] text-sm font-semibold mb-2">{t("aboutUs")}</p>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                {t("hotelDescription")}
              </h1>
              <p className="text-gray-700 text-sm md:text-base mb-6">
                {t("hotelLocation")}
              </p>
              <button
                className="bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 px-6 rounded"
                onClick={() => setIsModalOpen(true)}
              >
                {t("preOrder")}
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
          </div>
        </section>

        <section className="mt-40">
          <div id='rasimlar' className="w-full flex flex-col items-center gap-6">
            <div className="relative w-full h-[400px] max-w-6xl overflow-hidden">
              <div
                className="flex gap-5 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${startIndex * (100 / visibleCount)}%)`,
                }}
              >
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-2"
                  >
                    <div className="shadow-xl rounded-2xl p-6 h-96 flex flex-col items-center justify-center bg-white">
                      <img
                        src="https://picsum.photos/1600/500?random=1"
                        alt=""
                        className="h-[200px] w-full rounded-xl object-cover"
                      />
                      <div className="relative -top-5">
                        <button className="p-3 px-5 rounded-md bg-[#017A87] text-white font-bold">
                          {t("price")}
                        </button>
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-semibold">{card.title}</h3>
                        <p className="text-xs mt-3 text-gray-600">{card.content}</p>
                      </div>
                      <div className="flex gap-5 mt-5 text-[#017A87]">
                        <BedDouble />
                        <Wifi />
                        <Car />
                      </div>
                    </div>
                  </div>
                ))}

              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={next}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
              >
                <ChevronRight />
              </button>
            </div>

            {/* Indicators */}
            <div className="flex gap-2 mt-4">
              {cards.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${idx === startIndex
                    ? "bg-[#017A87] scale-125"
                    : "bg-gray-300 hover:bg-[#017A87]"
                    }`}
                />
              ))}
            </div>
          </div>
        </section>

        <section id='afzalliklar' className="mt-40 bg-[#F7F5F1] py-20 px-4">
          {/* AFZALLIKLAR */}
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-10">{t("benefits")}</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 mb-20 max-w-7xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="relative h-[320px] overflow-hidden rounded-lg shadow-lg bg-white cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-xl"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <img className="w-20 hover:opacity-100 transition duration-300" src={feature.img} alt="" />
                    <img className="w-40 opacity-20 hover:opacity-100 transition duration-300" src={feature.img} alt="" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 mt-2">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <hr className="border-gray-300" />

          {/* MAXSUS XUSUSIYATLAR */}
          <div className="mt-16 max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12">{t("specialFeatures")}</h1>
            <div className="flex flex-col md:flex-row justify-center gap-40">

              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-2">
                  <BedDouble className="text-[#CC9973]" />
                  <h2 className="text-xl font-semibold">{t("cozyRooms")}</h2>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-[#CC9973]" />
                  <h2 className="text-xl font-semibold">{t("kitchen")}</h2>
                </div>
                <div className="flex items-center gap-2">
                  <Shirt className="text-[#CC9973]" />
                  <h2 className="text-xl font-semibold">{t("daily_cleaning")}</h2>
                </div>
                <div className="flex items-center gap-2">
                  <HandPlatter className="text-[#CC9973]" />
                  <h2 className="text-xl font-semibold">{t("roomService")}</h2>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-2">
                  <SquareUser className="text-[#CC9973]" />
                  <h2 className="text-xl font-semibold">{t("conferenceRoom")}</h2>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="text-[#CC9973]" />
                  <h2 className="text-xl font-semibold">{t("twentyFourSeven")}</h2>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="text-[#CC9973]" />
                  <h2 className="text-xl font-semibold">{t("freeParking")}</h2>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className='mt-40'>
          <div className='px-10'>
            <div className=" py-10 px-4">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-40">

                {/* First Section */}
                <div className="flex flex-col items-center text-center">
                  <div className=" rounded-full p-4 mb-4">
                    <CircleUser className="text-black" size={100} />
                  </div>
                  <h1 className="text-3xl font-bold mb-10">{t("facilities")}</h1>

                  <div className="flex justify-center gap-10 mb-10">
                    <div>
                      <h1 className="text-2xl font-bold text-[#BE9874]">600</h1>
                      <h1 className="text-3xl font-bold">{t("guests")}</h1>
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold text-[#BE9874]">200</h1>
                      <h1 className="text-3xl font-bold">{t("rooms")}</h1>
                    </div>
                  </div>

                  <h1 className="text-2xl font-bold max-w-md">{t("separateSections")}</h1>
                </div>

                {/* Second Section */}
                <div className="flex flex-col items-center text-center">
                  <div className=" rounded-full p-4 mb-4">
                    <CarFront className="text-black" size={100} />
                  </div>
                  <h1 className="text-3xl font-bold mb-10">{t("metroDistance")}</h1>

                  <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
                    <div>
                      <h1 className="text-2xl font-bold">
                        {t("nearestMetro")}
                      </h1>
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold text-[#BE9874]">700 M</h1>
                      <h1 className="text-3xl font-bold">{t("nearestMosque")}</h1>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        <section id='bronqilish' className='bg-[#F7F5F1]'>
          <div className="flex flex-col md:flex-row gap-8 p-6 md:p-12 ">
            {/* Chap tarafdagi karta */}
            <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-lg flex items-center justify-center ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6090.994748927668!2d72.3307203!3d40.8011046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb85f1c4d10b11%3A0xb8bdf7a53d26a0c3!2sPasport%20Stol%20%E2%84%962!5e0!3m2!1sru!2s!4v1714036123456!5m2!1sru!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>


            {/* O'ng tarafdagi forma */}
            <div className="w-full md:w-1/2 p-8">
              <h2 className="text-5xl font-bold mb-6">{t("contactUs")}</h2>

              {/* Ism va Telefon yonma-yon */}
              <form ref={form} onSubmit={sendEmail} action="">
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <div className="w-full md:w-1/2">

                    <input
                      type="text"
                      placeholder={t("namePlaceholder")}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="w-full md:w-1/2">

                    <input
                      type="text"
                      placeholder="+998 90 123 45 67"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">{t("yourMessage")}</label>
                  <textarea
                    placeholder={t("writeYourMessage")}
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button type='submit' className="w-full bg-[#017A87] text-white py-3 rounded-lg transition">
                  {t("sendRequest")}
                </button>
              </form>


            </div>
          </div>
        </section>

      </main>
      <footer id='kontaktlar' className='mt-40 bg-[#017A87] text-white'>
        <div className='max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

          {/* Contact Info */}
          <div>
            <div className='flex items-start gap-5 mb-4'>
              <Phone className="mt-1" />
              <div>
                <h1>+998 95 602 20 20</h1>
                <h1>+998 95 602 20 20</h1>
              </div>
            </div>

            <div className='flex items-start gap-5 mb-4'>
              <AtSign className="mt-1" />
              <h1>poyitaht@gmail.com</h1>
            </div>

            <div className='flex items-start gap-5'>
              <MapPinned className="mt-1" />
              <h1>{t("tashkent")}</h1>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h1 className='mb-4 font-semibold text-lg'>{t("ourLinks")}</h1>
            <div className='flex flex-col gap-2'>
              <Link to="bizhaqimizda" smooth={true} duration={500} offset={-100} className="cursor-pointer hover:underline">{t("aboutUs")}</Link>
              <Link to="rasimlar" smooth={true} duration={500} offset={-150} className="cursor-pointer hover:underline">{t("images")}</Link>
              <Link to="afzalliklar" smooth={true} duration={500} offset={-100} className="cursor-pointer hover:underline">{t("advantages")}</Link>
              <Link to="bronqilish" smooth={true} duration={500} offset={-100} className="cursor-pointer hover:underline">{t("booking")}</Link>
              <Link to="kontaktlar" smooth={true} duration={500} className="cursor-pointer hover:underline">{t("contacts")}</Link>
            </div>
          </div>

          {/* Manager Info */}
          <div>
            <h1 className='mb-4 font-semibold text-lg'>{t("manager")}</h1>
            <p className='mb-2'>+998 97 964 70 00</p>
            <button className='text-white bg-[#c39c75] px-4 py-2 rounded-md font-semibold hover:bg-[#a8835c] transition'>
              {t("orderButton")}
            </button>
          </div>

        </div>
      </footer>


    </>
  );
};

export default App;