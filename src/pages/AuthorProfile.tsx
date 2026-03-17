import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPostsData } from '../data/blogPostsData';

const AuthorProfile: React.FC = () => {
  const { authorSlug } = useParams<{ authorSlug: string }>();
  
  // Get all posts by this author
  const authorPosts = authorSlug 
    ? blogPostsData.filter(post => 
        post.author.toLowerCase().replace(/\s+/g, '-') === authorSlug
      )
    : [];

  // If no posts found, redirect to blog
  if (authorPosts.length === 0) {
    return <Navigate to="/blog" replace />;
  }

  // Get author name from first post
  const authorName = authorPosts[0].author;

  return (
    <div className="min-h-screen bg-white">
      {/* Author Header */}
      <section className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Author Avatar */}
            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-lg">
              <span className="text-purple-600 font-bold text-5xl">
                {authorName.charAt(0).toUpperCase()}
              </span>
            </div>
            
            {/* Author Info */}
            <div className="text-center md:text-left flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                {authorName}
              </h1>
              <p className="text-white/90 text-xl">
                {authorPosts.length} {authorPosts.length === 1 ? 'Post' : 'Posts'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Posts by Author */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            All Posts by {authorName}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authorPosts.map((post) => (
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Date */}
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500">
                      {post.date}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Back to Blog Link */}
          <div className="mt-12 text-center">
            <Link
              to="/blog"
              className="inline-block px-8 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              ← Back to All Posts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthorProfile;