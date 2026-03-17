import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getPostBySlug, getAdjacentPosts, getRelatedPosts } from '../data/blogPostsData';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Get the post data
  const post = slug ? getPostBySlug(slug) : undefined;

  // If post not found, redirect to blog listing
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Get adjacent posts for prev/next navigation
  const { prev, next } = getAdjacentPosts(post.slug);

  // Get related posts
  const relatedPosts = getRelatedPosts(post.slug, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Category Badges */}
          <div className="mb-6 flex flex-wrap gap-2">
            {(post.categories || [post.category]).map((cat) => (
              <span key={cat} className="inline-block px-4 py-2 text-sm font-medium text-purple-600 bg-purple-50 rounded border border-purple-200">
                {cat}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center space-x-4 mb-8 pb-8 border-b border-gray-200">
            <div className="text-gray-600">
              By <span className="font-semibold text-gray-900">{post.author}</span>
            </div>
            <span className="text-gray-400">•</span>
            <div className="text-gray-600">{post.date}</div>
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Bio */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-purple-600 font-bold text-2xl">
                  {post.author.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <Link
                  to={`/author/${post.author.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-lg font-bold text-gray-900 hover:text-purple-600 transition"
                >
                  {post.author}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Previous/Next Navigation */}
      {(prev || next) && (
        <section className="bg-gray-900 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              {prev ? (
                <div className="text-left">
                  <p className="text-gray-400 text-sm mb-2">Previous Post</p>
                  <Link
                    to={`/blog/${prev.slug}`}
                    className="text-white hover:text-purple-400 transition text-lg font-medium"
                  >
                    {prev.title}
                  </Link>
                </div>
              ) : (
                <div></div>
              )}

              {next ? (
                <div className="text-right">
                  <p className="text-gray-400 text-sm mb-2">Next Post</p>
                  <Link
                    to={`/blog/${next.slug}`}
                    className="text-white hover:text-purple-400 transition text-lg font-medium"
                  >
                    {next.title}
                  </Link>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Recommended Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Recommended For You</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition group"
                >
                  <span className="text-xs font-medium text-purple-600 mb-3 block">
                    {relatedPost.category}
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition">
                    {relatedPost.title}
                  </h4>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-purple-600 font-semibold text-sm">
                        {relatedPost.author.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{relatedPost.author}</p>
                      <p className="text-xs text-gray-500">{relatedPost.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;