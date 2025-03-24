import React, { useState } from "react";
import BlogCard from "./blogCard";

const blogPosts = [
  {
    image: "/oversabinurse/nurseblog.png",
    category: "Health",
    readTime: "5 mins",
    title: "10 Tips for a Healthy Lifestyle",
    link: "/article",
  },
  {
    image: "/oversabinurse/nurseblog.png",
    category: "Wellness",
    readTime: "7 mins",
    title: "How to Stay Motivated for Workouts",
    link: "/article",
  },
  {
    image: "/oversabinurse/nurseblog.png",
    category: "Nutrition",
    readTime: "4 mins",
    title: "Best Foods to Boost Your Energy",
    link: "/article",
  },
  {
    image: "/oversabinurse/nurseblog.png",
    category: "Fitness",
    readTime: "6 mins",
    title: "The Ultimate Guide to Home Workouts",
    link: "/article",
  },
  {
    image: "/oversabinurse/nurseblog.png",
    category: "Self-Care",
    readTime: "8 mins",
    title: "Mindfulness and Its Benefits",
    link: "/article",
  },
  {
    image: "/oversabinurse/nurseblog.png",
    category: "Lifestyle",
    readTime: "5 mins",
    title: "Balancing Work and Personal Life",
    link: "/article",
  },
];

const BlogList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  return (
    <div className="max-w-[90%] mx-auto p-6">
      <h2 className="mb-4 text-xl font-semibold">Latest</h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <button
          className={`px-3 py-1 ${currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-800"}`}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          ← Previous
        </button>

        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`w-10 h-10 border border-gray-300 rounded-lg transition duration-200 ${
                currentPage === i + 1 ? "bg-pink-500 text-white" : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          className={`px-3 py-1 ${currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-gray-800"}`}
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default BlogList;
