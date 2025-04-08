import { IoGrid } from "react-icons/io5";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill, RiReactjsLine } from "react-icons/ri";

const cartdata = [
  // Courses
  {
    id: 1,
    name: "HTML Basics",
    image: "../images/html.jpg",
    price: "300",
    type: "frontend",
    book_category: "course-book",
    icon: <FaHtml5 />,
  },
  {
    id: 2,
    name: "CSS Basics",
    image: "../images/css.jpg",
    price: "300",
    type: "frontend",
    book_category: "course-book",
    icon: <FaCss3Alt />,
  },
  {
    id: 3,
    name: "JavaScript Essentials",
    image: "../images/js.jpg",
    price: "500",
    type: "frontend",
    book_category: "course-book",
    icon: <RiJavascriptFill />,
  },
  {
    id: 4,
    name: "Tailwind",
    image: "../images/tailwind.jpg",
    price: "500",
    type: "frontend",
    book_category: "course-book",
    icon: <RiTailwindCssFill />,
  },
  {
    id: 5,
    name: "React JS Mastery",
    image: "../images/reactjs.jpg",
    price: "700",
    type: "frontend",
    book_category: "course-book",
    icon: <RiReactjsLine />,
  },
  {
    id: 6,
    name: "Express.js Fundamentals",
    image: "../images/express.jpg",
    price: "600",
    type: "backend",
    book_category: "course-book",
    icon: <IoGrid />,
  },
  {
    id: 7,
    name: "MongoDB for Beginners",
    image: "../images/mongodb.jpg",
    price: "400",
    type: "backend",
    book_category: "course-book",
  },
  {
    id: 8,
    name: "Full Stack Project",
    image: "../images/gallery1.jpg",
    price: "1000",
    type: "fullstack",
    book_category: "course-book",
  },

  // Story Books
  {
    id: 9,
    name: "Story Book 1",
    image: "../images/story1.jpg",
    price: "250",
    type: "story",
    book_category: "story-book",
  },
  {
    id: 10,
    name: "Story Book 2",
    image: "../images/story2.jpg",
    price: "200",
    type: "poetry",
    book_category: "story-book",
  },
  {
    id: 11,
    name: "Story Book 3",
    image: "../images/story3.jpg",
    price: "250",
    type: "story",
    book_category: "story-book",
  },
  {
    id: 12,
    name: "Story Book 4",
    image: "../images/story4.jpg",
    price: "200",
    type: "poetry",
    book_category: "story-book",
  },
  {
    id: 13,
    name: "Story Book 5",
    image: "../images/story5.jpg",
    price: "200",
    type: "poetry",
    book_category: "story-book",
  },

  // Poetry Books
  {
    id: 14,
    name: "Poetry Book 1",
    image: "../images/poetry1.jpg",
    price: "350",
    type: "poetry",
    book_category: "poetry-book",
  },
  {
    id: 15,
    name: "Poetry Book 2",
    image: "../images/poetry2.jpg",
    price: "350",
    type: "poetry",
    book_category: "poetry-book",
  },
  {
    id: 16,
    name: "Poetry Book 3",
    image: "../images/poetry3.jpg",
    price: "350",
    type: "poetry",
    book_category: "poetry-book",
  },
  {
    id: 17,
    name: "Poetry Book 4",
    image: "../images/poetry4.jpg",
    price: "350",
    type: "poetry",
    book_category: "poetry-book",
  },
  {
    id: 18,
    name: "Poetry Book 5",
    image: "../images/poetry5.jpg",
    price: "350",
    type: "poetry",
    book_category: "poetry-book",
  }
];

export default cartdata;
