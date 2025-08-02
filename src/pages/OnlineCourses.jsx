// src/pages/OnlineCourses.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const sampleCourses = [
  {
    id: 1,
    title: "UI/UX Design for Beginners",
    category: "Design",
    duration: "1h 30m",
    level: "Beginner",
    price: "Free",
    tags: ["UI", "UX", "Fundamentals"],
    link: "https://www.mygreatlearning.com/academy/learn-for-free/courses/ui-ux"
  },
  {
    id: 2,
    title: "React JS Basics Tutorial",
    category: "Development",
    duration: "2h 15m",
    level: "Beginner",
    price: "Free",
    tags: ["React", "JSX", "Hooks"],
    link: "https://www.mygreatlearning.com/academy/learn-for-free/courses/react-js-tutorial"
  },
  {
    id: 3,
    title: "Advanced React for Developers",
    category: "Development",
    duration: "8h 10m",
    level: "Advanced",
    price: "$49",
    tags: ["React", "Hooks", "Performance", "State"],
    link: "https://www.udemy.com/course/advanced-react-and-redux/"
  },
  {
    id: 4,
    title: "Illustration & Character Design",
    category: "Art",
    duration: "4h 20m",
    level: "Intermediate",
    price: "$29",
    tags: ["Illustrator", "Drawing", "Cartoon", "Sketching"],
    link: "https://www.skillshare.com/en/classes/character-illustration-from-sketch-to-finished-design/1422828322"
  },
  {
    id: 5,
    title: "No-Code Website Building",
    category: "Web Tools",
    duration: "3h 45m",
    level: "Beginner",
    price: "Free",
    tags: ["No-code", "Webflow", "Wix", "Drag & Drop"],
    link: "https://www.udemy.com/course/build-a-no-code-website-with-webflow/"
  },
  {
    id: 6,
    title: "Motion Graphics with After Effects",
    category: "Design",
    duration: "5h 15m",
    level: "Intermediate",
    price: "$39",
    tags: ["After Effects", "Animation", "Motion", "Editing"],
    link: "https://www.skillshare.com/en/classes/learn-motion-graphics-in-after-effects/1542134010"
  },
  {
    id: 7,
    title: "Full Stack JavaScript Bootcamp",
    category: "Development",
    duration: "12h 00m",
    level: "Advanced",
    price: "$79",
    tags: ["JavaScript", "Node.js", "MongoDB", "Express"],
    link: "https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/"
  },
  {
    id: 8,
    title: "Digital Painting with Procreate",
    category: "Art",
    duration: "6h 00m",
    level: "Intermediate",
    price: "$35",
    tags: ["Procreate", "iPad", "Painting", "Brushwork"],
    link: "https://www.skillshare.com/en/classes/procreate-for-beginners-digital-drawing-101/1653035325"
  },
  {
    id: 9,
    title: "Mastering Canva for Creators",
    category: "Web Tools",
    duration: "2h 30m",
    level: "Beginner",
    price: "Free",
    tags: ["Canva", "Social Media", "Branding", "Design"],
    link: "https://www.udemy.com/course/canva-masterclass/"
  },
  {
    id: 10,
    title: "Design Systems in Figma",
    category: "Design",
    duration: "4h 10m",
    level: "Advanced",
    price: "$49",
    tags: ["Design Systems", "Figma", "Components", "Workflow"],
    link: "https://www.skillshare.com/en/classes/design-systems-in-figma/931024164"
  },
  {
    id: 11,
    title: "Python for Web Development",
    category: "Development",
    duration: "7h 20m",
    level: "Beginner",
    price: "$45",
    tags: ["Python", "Flask", "Django", "Back-End"],
    link: "https://www.udemy.com/course/python-and-django-full-stack-web-developer-bootcamp/"
  },
  {
    id: 12,
    title: "Creative Poster Design in Photoshop",
    category: "Art",
    duration: "3h 40m",
    level: "Beginner",
    price: "$19",
    tags: ["Photoshop", "Poster", "Visual", "Print"],
    link: "https://www.skillshare.com/en/classes/poster-design-for-beginners/567327276"
  },
  {
    id: 13,
    title: "Notion for Productivity & Teams",
    category: "Web Tools",
    duration: "2h 00m",
    level: "Beginner",
    price: "Free",
    tags: ["Notion", "Task Management", "Teams", "Docs"],
    link: "https://www.udemy.com/course/mastering-notion/"
  }
];

const categories = ["All", "Design", "Development", "Art", "Web Tools"];

const OnlineCourses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = sampleCourses.filter((course) => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Explore Online Courses
        </motion.h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Level up your skills in design, development, art, and tools with our expert-led courses.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full border ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-white border-gray-300 dark:border-gray-600"
              } transition`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full max-w-lg px-4 py-2 rounded-lg border dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {course.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {course.category} • {course.level}
              </p>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <Clock className="w-4 h-4 mr-1" /> {course.duration}
                </span>
                <span className="px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-white rounded">
                  {course.price}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {course.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-auto bg-blue-600 hover:bg-blue-700 text-center text-white font-semibold py-2 px-4 rounded transition"
              >
                Enroll Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineCourses;
