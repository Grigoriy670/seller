export const specialOffers = [
  {
    id: "b71c3ef47a9dbb12c55e98aa14ed39fd7812c4f1",
    category: "lighting",
    model: "Люстра VODA",
    prices: ["45 000 руб.", "67 000 руб."],
    photo: [
     "images/voda.jpeg",
    
    ],
    info: "Основание из полированной нержавеющей стали, привносит оригинальный парящий эффект."
  },
  {
    id: "f92e0adb71c99ef47a81d3cb55af1782be11c9d0",
    category: "sofa",
    model: "Диван RONALD",
    prices: ["156 000 руб.", "198 000 руб."],
    photo: [
      "images/ronald.jpeg",
    ],
    info: "Модель отличается простотой линий и форм, отсутствием броского декора."
  },
  {
    id: "e18ab77d9cc21f34b08e55da2c39f014a8ee91b3",
    category: "dresser",
    model: "Комод VENT",
    prices: ["34 000 руб.", "45 000 руб."],
    photo: [
     "images/vent.jpeg",
    ],
    info: "Европейский дуб — отличается особой прочностью и стабильностью."
  }
];


export const catalog = [
  {
    id: "a74dbb1299ef45c31be90ad8aa1d77c4ef02b9f0",
    category: "bed",
    model: "Кровать TATRAN",
    prices: ["120 000 руб."],
    photo: [
      "images/tatran.jpeg"
    ],
    info: "Основание из полированной нержавеющей стали, придаёт оригинальный парящий эффект."
  },
  {
    id: "bb19fe34d0ac55e14c8f99a7e12f7aa94d37810b",
    category: "chair",
    model: "Кресло VILORA",
    prices: ["21 000 руб."],
    photo: [
     'images/product1.jpg'
    ],
    info: "Мягкое и уютное, аккуратное и стильное. Упругие подушки сидения и приятная на ощупь ткань."
  },
  {
    id: "c10db47a921e8fa5d7aa3c411ef055b82c9810de",
    category: "table",
    model: "Стол MENU",
    prices: ["34 000 руб."],
    photo: [
    "images/menu__catalog.jpeg",
    ],
    info: "Для того чтобы трапезничать было приятно, необходим правильно обеденный стол."
  },
  {
    id: "d77bc4102e9a33af81d09ef41b52da77c14a9ef0",
    category: "chair",
    model: "Кресло ASKESTA",
    prices: ["68 000 руб."],
    photo: [
        "images/askesta.jpeg"
    ],
    info: "Высококачественная долговечная ткань, передаёт оригинальный парящий эффект."
  },
  {
    id: "ef01c9d7ab3410be23fa55dd74a1c19e2bcd8fc1",
    category: "table",
    model: "Стол NORMAN",
    prices: ["40 000 руб."],
    photo: [
        "images/norman.jpeg"
    ],
    info: "Комфорт передают скруглённые линии, плавность и любовь создателя."
  },
  {
    id: "f9ac10de33b4bd8ef77219a4e551ab19d00cffab",
    category: "sofa",
    model: "Диван NASTAN",
    prices: ["80 000 руб."],
    photo: [
      "images/nastan__catalog.jpeg"
    ],
    info: "Модель отличается простотой линий и форм, отсутствием броского декора."
  }
];

export const furnitureCategories = [
  {
    id: "c91faebd72c499ef45bbd80a11cfe93ba72d9e21",
    title: "ОТДЫХА",
    photo: "images/rest.jpeg",
    slug: "rest"
  },
  {
    id: "a41d9efb77cc12ba954dd8c1e99ef11ab38fd0c4",
    title: "РАБОТЫ",
    photo: "images/job.jpeg",
    slug: "work"
  },
  {
    id: "bb72a19cd44ef09ac8dd51e2b39a1fe479cd50ab",
    title: "КУХНИ",
    photo: "images/kitchen.jpeg",
    slug: "kitchen"
  },
  {
    id: "de119afbc4729efb0d88ac41ff33ac9bd120ef77",
    title: "ДЕТСКОЙ",
    photo: "images/child.jpeg",
    slug: "kids"
  },
  {
    id: "f81bd92ac401ee55a9c3fe10d77ac49b82f110dd",
    title: "ВАННОЙ",
    photo: "images/bathroom.jpeg",
    slug: "bathroom"
  }
];


export const footerData = [
  {
    id: "c91faebd72c499ef45bbd80a11cfe93ba72d9e21",
    section: "navigation",
    items: ["Меню", "Каталог", "Контакты"]
  },
  {
    id: "a41d9efb77cc12ba954dd8c1e99ef11ab38fd0c4", 
    section: "contacts", 
    items: ["+7 908 800 80 80", "help@interier.com"]
  },
  {
    id: "bb72a19cd44ef09ac8dd51e2b39a1fe479cd50ab",
    section: "newsletter",
    items: ["Получите наши новости и акции", "Ваш email", "подписаться"]
  }
];

const allData = { specialOffers, catalog, furnitureCategories, footerData };
export default allData;
