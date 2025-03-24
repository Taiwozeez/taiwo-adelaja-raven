import React from "react";

interface BlogCardProps {
  image: string;
  category: string;
  readTime: string;
  title: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, category, readTime, title, link }) => {
  return (
    <div className="w-full overflow-hidden bg-white rounded-lg shadow-md">
      {/* Clickable image with hover effect */}
      <a href={link} className="block">
        <img
          src={image}
          alt="Blog Post"
          className="object-cover w-full transition duration-300 ease-in-out cursor-pointer h-74 hover:opacity-80"
        />
      </a>
      <div className="p-4">
        <p className="text-xs font-bold text-red-500">
          {category} — <span className="text-gray-400">{readTime} read</span>
        </p>
        <p className="mt-2 text-gray-700">{title}</p>
      </div>
    </div>
  );
};

export default BlogCard;
