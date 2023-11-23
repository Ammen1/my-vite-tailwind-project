import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";
import { caticon1, caticon2, caticon3, caticon4, caticon5, caticon6, caticon7, caticon8} from "../assets/images";

export const navLinks = [
    { href: "#Home", label: "Home", content: ["JobSeeker", "JobConsultancy", "Human Resource"] },
    { href: "#Page", label: "Page", content: ["About Us", "Services", "Services Detail", "Carrer", "Login", "Register", "Error-404", "Error-405", "Contact Us 01", "Contact us 02"] },
    { href: "#Jobs", label: "Jobs" , content: ["JobSeeker", "JobConsultancy", "Human Resource"]},
    { href: "#Employes", label: "Employes" , content: ["JobSeeker", "JobConsultancy", "Human Resource"] },
    { href: "#Candidates", label: "Candidates" , content: ["JobSeeker", "JobConsultancy", "Human Resource"] },
    { href: "#Blogs", label: "Blogs" , content: ["JobSeeker", "JobConsultancy", "Human Resource"] },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];



export const products = [
    {
        imgURL: caticon1,
        name: "Finance ",
        price: "Apply Jobs!",
        namecompany: "Financial Branch ",
        job: "100 jobs"
    },
    {
        imgURL: caticon2,
        name: "Technology",
        price: "Apply Jobs!",
        namecompany: "Software, Hardware, SEO ",
        job: "101 jobs"
    },
    {
        imgURL: caticon3,
        name: "Agriculture",
        price: "Apply Jobs!",
        namecompany: "Agricultural Food Scient",
        job: "101 jobs"
    },
    {
        imgURL: caticon4,
        name: "Construction",
        price: "Apply Jobs!",
        namecompany: "Marketing Coordinator",
        job: "120 Jobs"


    },
    {
        imgURL: caticon5,
        name: "Construction",
        price: "Apply Jobs!",
        namecompany: "Marketing Coordinator",
        job: "120 Jobs"
    },
      {
        imgURL: caticon6,
        name: "Construction",
        price: "Apply Jobs!",
        namecompany: "Marketing Coordinator",
        job: "120 Jobs"
    },
    {
        imgURL: caticon7,
        name: "Construction",
        price: "Apply Jobs!",
        namecompany: "Marketing Coordinator",
        job: "120 Jobs"
    },
    {
        imgURL: caticon8,
        name: "Construction",
        price: "Apply Jobs!",
        namecompany: "Marketing Coordinator",
        job: "120 Jobs"
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

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
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
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
