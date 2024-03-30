import {
    facebook,
    instagram,
    shieldTick,
    support,
    truckFast,
    twitter
} from "../assets/icons";
import {
    clothes, cosmetics,
    electronic1, electronic2, electronic3, electronic4, electronic5,
    electronics,
    home1,
    home2, home3, home4, home5,
    homeutensils,
    lady1, lady2, lady3, lady4, lady5, men1,
    men2, men3, men4, men5, shoe1, shoe2, shoe3, shoe4,
    shoe5, shoes
} from "../assets/images";

export const NavLinks=[
    {href: "#home", label:"Home"},
    { href: "#contact", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact Us" },
    
];


export const images=[
    
  {url:electronics,
  label:"Latest  Electronics",
  subtext: "Guaranteed Quality"},
  {url:clothes,
    label:"Quality Drips",
  subtext: "Latest and Good Taste"},
  {url:shoes,
    label:"Latest shoes and sneaker",
  subtext: "All brands available"},
  {
    url:homeutensils,
    label:"Home Utensils and decor",
  subtext: "Available"
  },
  {url:cosmetics,
    label:"Best SkinCare Products",
  subtext: "Make Yourself Beautiful"},
  ];
  // shoes section
  export const shoeCards = [
    {
        imgURL: shoe1,
        name: "Unpaired-red Nike Sneaker",
        price: "KSh 4500",
    },
    {
        imgURL: shoe2,
        name: "Casual Sci-Fi Warrior",
        price: "KSh 3000",
    },
    {
        imgURL: shoe3,
        name: "Air Jordan JORDAN 9 SNEAKERS",
        price: "KSh 5500",
    },
    {
        imgURL: shoe4,
        name: "Adidas Shoes Sneakers",
        price: "KSh 2000",
    },
    {
        imgURL: shoe5,
        name: "Nike High Top",
        price: "KSh 4000",
    },
    
];
export const menCards = [
    {
        imgURL: men1,
        name: "Cargo Pants",
        price: "KSh 1800",
    },
    {
        imgURL: men2,
        name: "3 In 1 Men T-shirts",
        price: "KSh 3000",
    },
    {
        imgURL: men3,
        name: "Men's Business Shirts",
        price: "KSh 1500",
    },
    {
        imgURL: men4,
        name: "6-Pack Men's Cotton Underwear Boxers",
        price: "KSh 1000",
    },
    {
        imgURL: men5,
        name: "2 In 1 Tracksuits Mens Suits",
        price: "KSh 1800",
    },
    
];
export const ladyCards = [
    {
        imgURL: lady1,
        name: "Dubai Abaya Chiffon",
        price: "KSh 7000",
    },
    {
        imgURL: lady2,
        name: "Cross-Border Women's Wear Robe Stitching  Abaya",
        price: "KSh 6000",
    },
    {
        imgURL: lady3,
        name: "Abaya/Jilbab Muslim Maxi Dress Casual",
        price: "KSh 5500",
    },
    {
        imgURL: lady4,
        name: "Arabic Style Dubai Chiffon Abaya",
        price: "KSh 5000",
    },
    {
        imgURL: lady5,
        name: "Fashion Ramadan Turkey Hijab Dress",
        price: "KSh 5800",
    },
    
];
export const electronicCards = [
    {
        imgURL: electronic1,
        name: "Vision Plus VP8850KV - 50″ 4K Frameless V+ OS Smart TV",
        price: "KSh 40,000",
    },
    {
        imgURL: electronic2,
        name: "Nunix NU-A22 3.1 Woofer",
        price: "KSh 6,000",
    },
    {
        imgURL: electronic3,
        name: "Air Pods",
        price: "KSh 1,900",
    },
    {
        imgURL: electronic4,
        name: "Xiaomi Redmi 12",
        price: "KSh 30,000",
    },
    {
        imgURL: electronic5,
        name: "Acer Chromebook C720",
        price: "KSh 18,000",
    },
    
];
export const homeCards = [
    {
        imgURL: home1,
        name: "Finest Fries/ Chips Cutter",
        price: "KSh 1,200",
    },
    {
        imgURL: home2,
        name: "Classy 5 Fruit Rack",
        price: "KSh 7,000",
    },
    {
        imgURL: home3,
        name: "10kg Cooking Weighing Scale",
        price: "KSh 500",
    },
    {
        imgURL: home4,
        name: "Manual Hand Squeezer Juice",
        price: "KSh 1,900",
    },
    {
        imgURL: home5,
        name: "Nunix 6l Electronic Chips Deep Frier",
        price: "KSh 4,800",
    },
    
];
export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const footerLinks = [
    
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "mohaz@gmail.com", link: "mailto:customer@gmail.com" },
            { name: "+254723155106", link: "tel:+254723155106" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

