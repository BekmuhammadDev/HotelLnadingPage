import React, { useState, useEffect } from 'react';
import Header from './components/header';
import hotelimg from "./assets/images/hotel.jpg"
import { ChevronLeft, ChevronRight, BedDouble, Wifi, Car, Phone, AtSign, MapPinned, ShowerHead, CarFront, Shirt, Check, SquareUser, HandPlatter, Clock, CircleUser, } from "lucide-react";
import bedroom from "./assets/images/bedroom.png"
import goodplace from "./assets/images/goodplace.png"
import resturant from "./assets/images/resturant.png"
import parkovka from "./assets/images/parkovka.png"
import { useTranslation } from 'react-i18next'; // Importing translation hook
import { Link } from 'react-scroll';
import "./i18"
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

  useEffect(() => {
    AOS.init({ once: true });
  }, []);


  const features = [
    { id: 1, title: t('title_comfort_room'), img: bedroom, description: t("wifi_tv_service") },
    { id: 2, title: t('title_best_place'), img: goodplace, description: t('best_location') },
    { id: 3, title: t('title_restaurants'), img: resturant, description: t(`restaurant_food`) },
    { id: 4, title: t('title_parking'), img: parkovka, description: t('parking_info') },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [visibleCount, setVisibleCount] = useState(3);
  const [startIndex, setStartIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  // Ekran o‘lchamiga qarab visibleCount ni aniqlash
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(1);
      } else if (width < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // Next va Prev
  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const next = () => {
    if (startIndex < cards.length - visibleCount) {
      setStartIndex(startIndex + 1);
    }
  };

  // Indicatorga o'tish
  const goTo = (index) => {
    if (index <= cards.length - visibleCount) {
      setStartIndex(index);
    }
  };
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

  // ////////////////////////////////////////////////////////////////
  const images = [
    "https://picsum.photos/1600/500?random=1",
    "https://picsum.photos/1600/500?random=2",
    "https://picsum.photos/1600/500?random=3",
    "https://picsum.photos/1600/500?random=4",
    "https://picsum.photos/1600/500?random=5",
  ];

  const extendedImages = [...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images,...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images,...images];
  const middleIndex = images.length;
  const [currentIndex, setCurrentIndex] = useState(middleIndex);

  const cardWidth = 1200 + 32;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex >= extendedImages.length - images.length) {
      setTimeout(() => {
        setCurrentIndex(middleIndex);
      }, 700);
    }
  }, [currentIndex, extendedImages.length, images.length]);

  // ///////////////////////////////////////////////////////////////////////

  return (
    <>
      <Header />
      <main>

        <section className="w-full h-[50vh] lg:h-[80vh] top-28 overflow-hidden relative flex justify-center items-cente">
          <div
            className="flex gap-8 transition-transform duration-700 ease-in-out h-full items-center"
            style={{
              transform: `translateX(-${currentIndex * cardWidth}px)`,
              width: `${cardWidth * extendedImages.length}px`,
            }}
          >
            {extendedImages.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[1200px] h-[500px] xl:h-[80%] rounded-xl overflow-hidden bg-cover bg-center shadow-xl"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="w-full h-full bg-black/40 flex flex-col items-center justify-center text-white p-4 sm:p-6 md:p-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg text-center">
                   Hostelga Xush Kelibsiz
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg mb-6 text-center">
                  Mehmonxona shahar markaziga yaqin, Ko'plab do'kon va restoranlarga yaqin joyda joylashgan. Masjidga juda yaqin.
                  </p>
                  <button className="bg-white text-black font-semibold text-sm sm:text-base px-4 sm:px-6 py-2 rounded hover:bg-gray-300 transition">
                    KO‘RISH
                  </button>
                </div>

              </div>
            ))}
          </div>
        </section>

        <section id='bizhaqimizda' className="px-6 md:px-10">
          <div className="mt-40 overflow-hidden flex flex-col md:flex-row items-center gap-10">

            {/* Image */}
            <div
              className="w-full md:w-1/2"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <img
                src={hotelimg}
                alt="Hotel Interior"
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            {/* Text Content */}
            <div
              className="w-full md:w-1/2 text-center md:text-left"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
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
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                {t("preOrder")}
              </button>
            </div>

          </div>

          {/* Modal tashqarida */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div
                className="bg-white rounded-2xl w-[90%] max-w-md p-6 relative shadow-lg"
              >
                {/* Close Button */}
                <button
                  className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-red-500"
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
        </section>

        <section className="mt-40">
          <div id='rasimlar' className="w-full flex flex-col items-center gap-6">

            <div
              ref={sliderRef}
              className="relative w-full h-[400px] max-w-6xl overflow-hidden"

            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${(100 / cards.length) * startIndex}%)`,
                  width: `${(100 / visibleCount) * cards.length}%`,
                }}
              >
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className="flex justify-center items-center px-2"
                    style={{ width: `${100 / cards.length}%` }} // har bir karta kengligi proporsional
                  >
                    <div className="shadow-xl rounded-2xl p-6 h-96 flex flex-col items-center justify-center bg-white w-full max-w-sm">
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

        <section id='afzalliklar' className="mt-40 bg-[#F7F5F1] py-20 px-4  overflow-hidden">
          {/* AFZALLIKLAR */}
          <div className="text-center" data-aos="fade-up" data-aos-duration="800">
            <h1 className="text-3xl md:text-5xl font-bold mb-10">{t("benefits")}</h1>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20 max-w-7xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="relative h-[320px] overflow-hidden rounded-lg shadow-lg bg-white cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-xl"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
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
            <h1
              className="text-4xl font-bold text-center mb-12"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {t("specialFeatures")}
            </h1>

            <div className="flex  justify-center ">

              <div className='gap-40 flex-col flex md:flex-row'>
                <div
                  className="flex-1 space-y-4"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <div className="flex items-center gap-2">
                    <BedDouble className="text-[#CC9973]" />
                    <h2 className="text-xl font-semibold">{t("cozyRooms")}</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="text-[#CC9973]" />
                    <h2 className="text-xl font-semibold">{t("kitchen")}</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <HandPlatter className="text-[#CC9973]" />
                    <h2 className="text-xl font-semibold">{t("roomService")}</h2>
                  </div>
                </div>

                <div
                  className="flex-1 space-y-4"
                  data-aos="fade-left"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <div className="flex items-center gap-2">
                    <Clock className="text-[#CC9973]" />
                    <h2 className="text-xl font-semibold">{t("twentyFourSeven")}</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="text-[#CC9973]" />
                    <h2 className="text-xl leading-[1.1] font-semibold">{t("freeParking")}</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShowerHead className="text-[#CC9973]" />
                    <h2 className="text-xl font-semibold">{t("bathroom")}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='mt-40  overflow-hidden'>
          <div className='px-10'>
            <div className="py-10 px-4">
              <div
                className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-40"
                data-aos="fade-up"
                data-aos-duration="800"
              >

                {/* First Section */}
                <div
                  className="flex flex-col items-center text-center"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <div className="rounded-full p-4 mb-4">
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
                <div
                  className="flex flex-col mb-28 items-center text-center"
                  data-aos="fade-left"
                  data-aos-duration="800"
                  data-aos-delay="400"
                >
                  <div className="rounded-full p-4 mb-4">
                    <CarFront className="text-black" size={100} />
                  </div>
                  <h1 className="text-3xl font-bold mb-10">{t("metroDistance")}</h1>

                  <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
                    <div>
                      <h1 className="text-2xl font-bold" dangerouslySetInnerHTML={{ __html: t("nearestMetro") }}>
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


        <section id='bronqilish' className='bg-[#F7F5F1]  overflow-hidden'>
          <div className="flex flex-col md:flex-row gap-8 p-6 md:p-12 ">

            {/* Chap tarafdagi karta */}
            <div
              className="w-full md:w-1/2 bg-white rounded-2xl shadow-lg flex items-center justify-center"
              data-aos="fade-right"
              data-aos-duration="800"
            >
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
            <div
              className="w-full md:w-1/2 p-8"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="300"
            >
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

                <button
                  type="submit"
                  className="w-full bg-[#017A87] text-white py-3 rounded-lg transition"
                >
                  {t("sendRequest")}
                </button>
              </form>
            </div>
          </div>
        </section>

      </main >
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