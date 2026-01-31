import React, { useState } from "react";

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const form = e.currentTarget; // Store the form reference

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      console.log("Response status:", response.status);
      console.log("Response data:", data);

      // If response is 200 OK, it's successful
      if (response.ok) {
        setSubmitStatus("success");
        form.reset(); // Use the stored form reference
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
      {/* Hero Section with Animation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mt-10 mb-6 text-gray-900 animate-fade-in-up">
            Get in touch
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed font-light animate-fade-in-up animation-delay-200">
            Request to join Tech Leading Ladies, or ask about sponsorship, or
            both! Ask us anything.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 animate-fade-in-up animation-delay-400"
          >
            {/* Web3Forms Access Key */}
            <input
              type="hidden"
              name="access_key"
              value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string}
            />

            {/* Custom subject line */}
            <input
              type="hidden"
              name="subject"
              value="New Contact Form Submission - Tech Leading Ladies"
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
                  ✓ Thank you! Your message has been sent successfully. We'll
                  get back to you soon!
                </p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === "error" && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-medium">
                  ✗ Oops! Something went wrong. Please try again or email us
                  directly at susan@techdiversitylab.com
                </p>
              </div>
            )}

            <div>
              <label
                htmlFor="name"
                className="block text-gray-900 font-semibold mb-2"
              >
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

            <div>
              <label
                htmlFor="email"
                className="block text-gray-900 font-semibold mb-2"
              >
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

            <div>
              <label
                htmlFor="message"
                className="block text-gray-900 font-semibold mb-2"
              >
                Comment or Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                disabled={isSubmitting}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none disabled:bg-gray-100"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
