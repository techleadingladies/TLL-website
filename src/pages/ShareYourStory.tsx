import React, { useState } from "react";

const ShareYourStory: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const form = e.currentTarget;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        console.error("Form submission failed:", data);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mt-10 mb-6 text-gray-900">
            Share your story
          </h1>
        </div>
      </section>

      {/* Form Section */}
      <section>
        <div className="max-w-2xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Web3Forms Access Key */}
            <input
              type="hidden"
              name="access_key"
              value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY}
            />

            {/* Custom subject line */}
            <input
              type="hidden"
              name="subject"
              value="New Story Submission - Tech Leading Ladies"
            />

            {/* Honeypot spam protection */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />

            {/* Success Message */}
            {submitStatus === "success" && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">
                  ✓ Thank you for sharing your story! We'll review it and be in touch soon.
                </p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === "error" && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-medium">
                  ✗ Oops! Something went wrong. Please try again or email us directly at
                  techleadingladies@gmail.com
                </p>
              </div>
            )}

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-gray-900 font-semibold mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition disabled:bg-gray-100"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-900 font-semibold mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition disabled:bg-gray-100"
              />
            </div>

            {/* Role */}
            <div>
              <label htmlFor="role" className="block text-gray-900 font-semibold mb-2">
                Role
              </label>
              <input
                type="text"
                id="role"
                name="role"
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition disabled:bg-gray-100"
              />
            </div>

            {/* Place of Work */}
            <div>
              <label htmlFor="workplace" className="block text-gray-900 font-semibold mb-2">
                Place of work
              </label>
              <input
                type="text"
                id="workplace"
                name="workplace"
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition disabled:bg-gray-100"
              />
            </div>

            {/* Workplace Website */}
            <div>
              <label htmlFor="workplace_website" className="block text-gray-900 font-semibold mb-2">
                Workplace website
              </label>
              <input
                type="url"
                id="workplace_website"
                name="workplace_website"
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition disabled:bg-gray-100"
              />
            </div>

            {/* Your Experience */}
            <div>
              <label htmlFor="experience" className="block text-gray-900 font-semibold mb-2">
                Your experience with Tech Leading Ladies <span className="text-red-500">*</span>
              </label>
              <textarea
                id="experience"
                name="experience"
                required
                disabled={isSubmitting}
                rows={8}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none disabled:bg-gray-100"
              />
            </div>

            {/* Talk More */}
            <div>
              <label className="block text-gray-900 font-semibold mb-3">
                Do you wish to talk more about your experience?
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="talk_more"
                    value="yes"
                    disabled={isSubmitting}
                    className="mr-2"
                  />
                  <span className="text-gray-700">Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="talk_more"
                    value="no"
                    disabled={isSubmitting}
                    className="mr-2"
                  />
                  <span className="text-gray-700">No</span>
                </label>
              </div>
            </div>

            {/* Authorization */}
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Authorisation</h3>
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="authorization"
                  value="authorized"
                  disabled={isSubmitting}
                  className="mr-3 mt-1"
                />
                <span className="text-gray-700">
                  I authorise you to use this testimonial information on the Tech Leading Ladies
                  website, in marketing materials and on social media
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ShareYourStory;