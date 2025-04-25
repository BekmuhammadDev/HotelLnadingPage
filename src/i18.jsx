// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Til konfiguratsiyasi
i18n.use(initReactI18next).init({
  resources: {
    uz: {
      translation: {
        "language": "🇺🇿 /",
        "orderButton": "BUYURTMA",
        "orderTitle": "Buyurtma berish",
        "namePlaceholder": "Ismingiz",
        "phonePlaceholder": "Telefon raqamingiz",
        "emailPlaceholder": "Email manzilingiz",
        "submitButton": "Yuborish",
        "closeButton": "Yopish",
        "aboutUs": "BIZ HAQIMIZDA",
        "images": "RASIMLAR",
        "advantages": "AFZALLIKLAR",
        "booking": "BRON QILISH",
        "contacts": "KONTAKTLAR",
        "hotelDescription": "Payitaxt Hotel Andijondagi eng zamonaviy va hashamatli mehmonxona hisoblanadi.",
        "hotelLocation": "Mehmonxona shahar markaziga yaqin, Ko'plab do'kon va restoranlarga yaqin joyda joylashgan. Masjidga juda yaqin. Ushbu zamonaviy mehmonxona sizga misli ko'rilmagan hashamatni taqdim etadi. Bizning xodimlarimiz sizga sifatli xizmat ko'rsatish va unutilmas dam olishni ta'minlash uchun kechayu kunduz ishlaydi. Va barcha ehtiyojlaringizni qondirishga intiladi. Sizni kutib olishni intiqlik bilan kutamiz!",
        "preOrder": "AVVALDAN BUYURTMA BERISH",
        "price": "500000 so'm",
        "benefits": "AFZALLIKLAR",
        "specialFeatures": "SAYTDAGI MAXSUS XUSUSIYATLAR",
        "cozyRooms": "Shinam xonalar",
        "kitchen": "Oshxona",
        "roomService": "Xona xizmati",
        "conferenceRoom": "Konferentsiya xonasi",
        "twentyFourSeven": "24/7 ish faoliyati",
        "freeParking": "Bepul avto turargoh",
        "facilities": "IMKONIYAT",
        "guests": "MEXMONLAR",
        "rooms": "XONALAR",
        "separateSections": "Ayollar va erkaklar uchun alohida bo'lim mavjud",
        "metroDistance": "METRO VA MASJIDGACHA BO'LGAN MASOFA",
        "nearestMetro": "Eng yaqin metro Mirzo Ulug'bek va Novza",
        "nearestMosque": "Masjiddan",
        "contactUs": "Biz bilan bog‘lanish",
        "yourMessage": "Xabaringiz",
        "writeYourMessage": "Xabaringizni bu yerga yozing",
        "sendRequest": "Arizangizni yuboring",
        "tashkent": "Toshkent, Qtortol",
        "ourLinks": "BIZNING HAVOLALARIMIZ",
        "manager": "MENEJER",
        "wifi_tv_service": "Bepul Wi-Fi internet, televizor, har kuni xizmat ko'rsatish.",
        "best_location": "Biz eng yaxshi joydamiz. Shahar markaziga va masjidga yaqin.",
        "restaurant_food": "Restoranimizda turli xil mazali taomlardan bahramand bo'lishingiz mumkin.",
        "parking_info": "Bizning avtoturargohimiz ham keng va qulay, eng muhimi xavfsiz!",
        "title_best_place": "Eng yaxshi joy",
        "title_restaurants": "Restoranlar",
        "title_parking": "Avtoturargoh",
        "title_comfort_room":"Konfor xonasi",
         "daily_cleaning": "Kundalik tozalash"
      }
    },
    ru: {
      translation: {
        "language": "🇺🇿 /",
        "orderButton": "ЗАКАЗ",
        "orderTitle": "Оформить заказ",
        "namePlaceholder": "Ваше имя",
        "phonePlaceholder": "Ваш номер телефона",
        "emailPlaceholder": "Ваш email",
        "submitButton": "Отправить",
        "closeButton": "Закрыть",
        "aboutUs": "О НАС",
        "images": "ФОТОГРАФИИ",
        "advantages": "ПРЕИМУЩЕСТВА",
        "booking": "БРОНЬ",
        "contacts": "КОНТАКТЫ",
        "hotelDescription": "Отель Payitaxt является самым современным и роскошным отелем в Андижане.",
        "hotelLocation": "Отель расположен в центре города, рядом с многочисленными магазинами и ресторанами. Очень близко к мечети. Этот современный отель предлагает вам несравненную роскошь. Наши сотрудники работают круглосуточно, чтобы предоставить вам качественное обслуживание и обеспечить незабываемый отдых. Они стремятся удовлетворить все ваши потребности. Мы с нетерпением ждем встречи с вами!",
        "preOrder": "ЗАРАНЕЕ ЗАКАЗАТЬ",
        "price": "500000 сум",
        "benefits": "ПРЕИМУЩЕСТВА",
        "specialFeatures": "СПЕЦИАЛЬНЫЕ ХАРАКТЕРИСТИКИ САЙТА",
        "cozyRooms": "Уютные комнаты",
        "kitchen": "Кухня",
        "roomService": "Обслуживание номеров",
        "conferenceRoom": "Конференц-зал",
        "twentyFourSeven": "Работаем 24/7",
        "freeParking": "Бесплатная парковка",
        "facilities": "УДОБСТВА",
        "guests": "ГОСТИ",
        "rooms": "НОМЕРА",
        "separateSections": "Отдельные зоны для женщин и мужчин",
        "metroDistance": "РАССТОЯНИЕ ДО МЕТРО И МЕЧЕТИ",
        "nearestMetro": "Ближайшие станции метро - Мирзо-Улугбек и Новза",
        "nearestMosque": "От мечети",
        "contactUs": "Связаться с нами",
        "yourMessage": "Ваше сообщение",
        "writeYourMessage": "Напишите ваше сообщение здесь",
        "sendRequest": "Отправить запрос",
        "tashkent": "Ташкент, Квартал",
        "ourLinks": "НАШИ ССЫЛКИ",
        "manager": "МЕНЕДЖЕР",
        "wifi_tv_service": "Бесплатный Wi-Fi, телевизор, ежедневное обслуживание.",
        "best_location": "Мы находимся в лучшем месте. Близко к центру города и мечети.",
        "restaurant_food": "В нашем ресторане вы можете насладиться разнообразными вкусными блюдами.",
        "parking_info": "У нас просторная и удобная парковка, а главное — безопасная!",
        "title_best_place": "Лучшее место",
        "title_restaurants": "Рестораны",
        "title_parking": "Парковка",
        "title_comfort_room":"Номер Комфорт",
        "daily_cleaning": "Ежедневная уборка"

      }
    }
  },
  lng: "uz", // default language
  fallbackLng: "uz", // default fallback language
  interpolation: {
    escapeValue: false, // React already safes from xss
  },
});

export default i18n;
