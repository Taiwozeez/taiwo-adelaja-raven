import React from "react";

const BlogPostBanner: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/oversabinurse/sabinurseimg1.jpeg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl font-bold">Blog Post</h1>
        <p className="text-lg">Here's our blog post drafts</p>
      </div>
    </div>
  );
};

export default BlogPostBanner;
