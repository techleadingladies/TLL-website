import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogPostsData } from "../data/blogPostsData";

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get unique categories
  const categories = [
    "all",
    ...new Set(blogPostsData.map((post) => post.category)),
  ];

  // Filter posts by category
  const filteredPosts =
    selectedCategory === "all"
      ? blogPostsData
      : blogPostsData.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white pt-10">
            Posts from our tech leaders
          </h1>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-purple-50 border border-gray-200"
                }`}
              >
                {category === "all" ? "All Posts" : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No posts found in this category.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="p-6">
                    {/* Category Tag */}
                    <span className="inline-block px-3 py-1 text-xs font-medium text-purple-600 bg-purple-50 rounded mb-3">
                      {post.category}
                    </span>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                      <Link
                        to={`/author/${post.author
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 hover:bg-purple-200 transition"
                      >
                        <span className="text-purple-600 font-semibold">
                          {post.author.charAt(0).toUpperCase()}
                        </span>
                      </Link>
                      <div className="flex-1 min-w-0">
                        <Link
                          to={`/author/${post.author
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="text-sm font-medium text-gray-900 truncate hover:text-purple-600 transition block"
                        >
                          {post.author}
                        </Link>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
