import React, { useState } from "react";

const LeadershipTraining: React.FC = () => {
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
            Leadership training – waiting list
          </h1>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Since 2017, Tech Leading Ladies has strived to give Women and people of
              underrepresented genders the skills, mentors and network you need to thrive in tech
              careers.
            </p>

            <p>
              Since 2022, we have been running Scholarship Programs to give our community access to
              training for leadership skills that you need to be successful in your career. For more
              info on the training courses, please see{" "}
              <a
                href="https://blackmill.co/coaching-training"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 font-semibold"
              >
                https://blackmill.co/coaching-training
              </a>
            </p>

            <p>
              Thanks to our{" "}
              <a
                href="/sponsors"
                className="text-purple-600 hover:text-purple-700 font-semibold"
              >
                generous sponsors
              </a>
              , we have plenty of spaces. Please do not hold back in joining our waitlist. Yes! You
              do deserve this as much as anyone else.
            </p>

            <p className="font-semibold">We are looking forward to seeing you in training!</p>
          </div>
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
              value="New Leadership Training Waitlist Submission - Tech Leading Ladies"
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
                  ✓ Thank you! You've been added to the waiting list. We'll be in touch soon!
                </p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === "error" && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-medium">
                  ✗ Oops! Something went wrong. Please try again or email us directly at
                  organisers@techleadingladies.com
                </p>
              </div>
            )}

            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="first_name" className="block text-gray-900 font-semibold mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition disabled:bg-gray-100"
                />
              </div>
              <div>
                <label htmlFor="last_name" className="block text-gray-900 font-semibold mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition disabled:bg-gray-100"
                />
              </div>
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

            {/* Pronouns */}
            <div>
              <label htmlFor="pronouns" className="block text-gray-900 font-semibold mb-2">
                What are your pronouns?
              </label>
              <input
                type="text"
                id="pronouns"
                name="pronouns"
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition disabled:bg-gray-100"
              />
            </div>

            {/* Role */}
            <div>
              <label htmlFor="role" className="block text-gray-900 font-semibold mb-2">
                What is your role?
              </label>
              <input
                type="text"
                id="role"
                name="role"
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition disabled:bg-gray-100"
              />
            </div>

            {/* Where do you work */}
            <div>
              <label htmlFor="workplace" className="block text-gray-900 font-semibold mb-2">
                Where do you work?
              </label>
              <input
                type="text"
                id="workplace"
                name="workplace"
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition disabled:bg-gray-100"
              />
            </div>

            {/* Program Interest */}
            <div>
              <label className="block text-gray-900 font-semibold mb-3">
                Which program are you interested in? <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="program_leading_engineering"
                    value="yes"
                    disabled={isSubmitting}
                    className="mr-2"
                  />
                  <span className="text-gray-700">Leading engineering teams workshop</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="program_empowering_individuals"
                    value="yes"
                    disabled={isSubmitting}
                    className="mr-2"
                  />
                  <span className="text-gray-700">
                    Empowering individuals for team success workshop
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="program_next_level"
                    value="yes"
                    disabled={isSubmitting}
                    className="mr-2"
                  />
                  <span className="text-gray-700">Next level leadership workshop</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="program_community"
                    value="yes"
                    disabled={isSubmitting}
                    className="mr-2"
                  />
                  <span className="text-gray-700">Community of Practice</span>
                </label>
              </div>
            </div>

            {/* What sparked your interest */}
            <div>
              <label htmlFor="interest_reason" className="block text-gray-900 font-semibold mb-2">
                What sparked your interest in the program(s)? <span className="text-red-500">*</span>
              </label>
              <textarea
                id="interest_reason"
                name="interest_reason"
                required
                disabled={isSubmitting}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none disabled:bg-gray-100"
              />
            </div>

            {/* Feedback */}
            <div>
              <label htmlFor="feedback" className="block text-gray-900 font-semibold mb-2">
                Any other feedback or comments?
              </label>
              <textarea
                id="feedback"
                name="feedback"
                disabled={isSubmitting}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none disabled:bg-gray-100"
              />
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

export default LeadershipTraining;