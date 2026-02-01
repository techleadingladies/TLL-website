import React, { useState } from "react";

const SpeakerForm: React.FC = () => {
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
          <h1 className="text-5xl md:text-6xl font-bold mt-10 mb-6 text-cyan-500">
            Speaker Details Form
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We're excited to have you present at Tech Leading Ladies. Please fill in your details and our
            community manager will be in touch!
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Guidelines for talk submissions</h2>
            
            <p className="text-gray-700">
              Each month, Tech Leading Ladies hosts a Meetup covering one of the following tracks:
            </p>

            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
              <li>Managing your career</li>
              <li>Building people leadership skills</li>
              <li>Managing technical organisations</li>
            </ol>

            <p className="text-gray-700">
              Our talks are aimed at building technical leadership skills. Frame your talk by considering what a
              technical leader needs to know about your subject to help them build strategy and make good
              decisions. The audience will mostly be senior developers, product managers and tech leads: feel
              free to get deeply technical. You can see our{' '}
              <a href="https://www.meetup.com/tech-leading-ladies/events/past/" className="text-purple-600 hover:text-purple-700 font-semibold">
                past topics here
              </a>
              .
            </p>
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
              value="New Speaker Submission - Tech Leading Ladies"
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
                  ✓ Thank you! Your speaker submission has been received. We'll be in touch soon!
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
              <p className="text-sm text-gray-600 mt-1">This will be used in the event details.</p>
            </div>

            {/* Name Pronunciation */}
            <div>
              <label htmlFor="pronunciation" className="block text-gray-900 font-semibold mb-2">
                Name pronunciation guide (optional)
              </label>
              <input
                type="text"
                id="pronunciation"
                name="pronunciation"
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition disabled:bg-gray-100"
              />
              <p className="text-sm text-gray-600 mt-1">For example - "Lorene" is pronounced "La-ren"</p>
            </div>

            {/* Pronouns */}
            <div>
              <label htmlFor="pronouns" className="block text-gray-900 font-semibold mb-2">
                Pronouns <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="pronouns"
                name="pronouns"
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition disabled:bg-gray-100"
              />
              <p className="text-sm text-gray-600 mt-1">
                <a href="#" className="text-purple-600 hover:text-purple-700">
                  Why do pronouns matter?
                </a>
              </p>
            </div>

            {/* Title or short description */}
            <div>
              <label htmlFor="title" className="block text-gray-900 font-semibold mb-2">
                Title or short description
              </label>
              <input
                type="text"
                id="title"
                name="title"
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition disabled:bg-gray-100"
              />
              <p className="text-sm text-gray-600 mt-1">
                This goes beneath your name on slides and the meetup pic if applicable - e.g. "Chief Unicorn at
                Awesome Co" or "Fabulous coder | Lover of things | Amazing human"
              </p>
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
              <p className="text-sm text-gray-600 mt-1">We will send calendar invites to this email address.</p>
            </div>

            {/* Presentation Title */}
            <div>
              <label htmlFor="presentation_title" className="block text-gray-900 font-semibold mb-2">
                Presentation title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="presentation_title"
                name="presentation_title"
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition disabled:bg-gray-100"
              />
              <p className="text-sm text-gray-600 mt-1">
                Or, type e.g. "Panel, May 2022" if you're participating in a panel.
              </p>
            </div>

            {/* Presentation Summary */}
            <div>
              <label htmlFor="presentation_summary" className="block text-gray-900 font-semibold mb-2">
                Presentation summary <span className="text-red-500">*</span>
              </label>
              <textarea
                id="presentation_summary"
                name="presentation_summary"
                required
                disabled={isSubmitting}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none disabled:bg-gray-100"
              />
              <p className="text-sm text-gray-600 mt-1">
                Or, type "Panel" if you're participating in a panel.
              </p>
            </div>

            {/* Lightning Talk */}
            <div>
              <label className="block text-gray-900 font-semibold mb-3">
                Is this a lightning talk? <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="lightning_talk"
                    value="yes"
                    required
                    disabled={isSubmitting}
                    className="mr-2"
                  />
                  <span className="text-gray-700">Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="lightning_talk"
                    value="no"
                    required
                    disabled={isSubmitting}
                    className="mr-2"
                  />
                  <span className="text-gray-700">No</span>
                </label>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Lightning talks are run before the main presentation and run for 5-15 minutes.
              </p>
            </div>

            {/* Recording Permission */}
            <div>
              <label className="block text-gray-900 font-semibold mb-3">
                Would you be okay if we recorded the presentation? <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                <label className="flex items-start">
                  <input
                    type="radio"
                    name="recording_permission"
                    value="organisers_only"
                    required
                    disabled={isSubmitting}
                    className="mr-2 mt-1"
                  />
                  <span className="text-gray-700">Yes, I'm fine with it being recorded for organisers viewing only</span>
                </label>
                <label className="flex items-start">
                  <input
                    type="radio"
                    name="recording_permission"
                    value="slack_community"
                    required
                    disabled={isSubmitting}
                    className="mr-2 mt-1"
                  />
                  <span className="text-gray-700">Yes, I'm fine with the recording being shared in the Slack community</span>
                </label>
                <label className="flex items-start">
                  <input
                    type="radio"
                    name="recording_permission"
                    value="no_recording"
                    required
                    disabled={isSubmitting}
                    className="mr-2 mt-1"
                  />
                  <span className="text-gray-700">No, I prefer to not to be recorded at all</span>
                </label>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                The recording will be used to help organisers write a "Key Takeaways" blog post, after the event.
              </p>
            </div>

            {/* LinkedIn URL */}
            <div>
              <label htmlFor="linkedin" className="block text-gray-900 font-semibold mb-2">
                LinkedIn URL
              </label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition disabled:bg-gray-100"
              />
            </div>

            {/* Twitter URL */}
            <div>
              <label htmlFor="twitter" className="block text-gray-900 font-semibold mb-2">
                Twitter URL
              </label>
              <input
                type="url"
                id="twitter"
                name="twitter"
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition disabled:bg-gray-100"
              />
            </div>

            {/* Photo Preference */}
            <div>
              <label className="block text-gray-900 font-semibold mb-3">Photo preference</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="photo_preference"
                    value="no_photo"
                    disabled={isSubmitting}
                    className="mr-2"
                  />
                  <span className="text-gray-700">I would prefer not to use a photo</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="photo_preference"
                    value="linkedin_photo"
                    disabled={isSubmitting}
                    className="mr-2"
                  />
                  <span className="text-gray-700">Please use my photo from LinkedIn</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="photo_preference"
                    value="upload_photo"
                    disabled={isSubmitting}
                    className="mr-2"
                  />
                  <span className="text-gray-700">I'll upload a photo</span>
                </label>
              </div>
            </div>

            {/* Short Bio */}
            <div>
              <label htmlFor="bio" className="block text-gray-900 font-semibold mb-2">
                Short bio <span className="text-red-500">*</span>
              </label>
              <textarea
                id="bio"
                name="bio"
                required
                disabled={isSubmitting}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none disabled:bg-gray-100"
              />
              <p className="text-sm text-gray-600 mt-1">
                Tell the audience a bit about you. Or, write "Please use my LinkedIn bio".
              </p>
            </div>

            {/* Access Requirements */}
            <div>
              <label htmlFor="access_requirements" className="block text-gray-900 font-semibold mb-2">
                Do you have any access requirements you would like us to be aware of?
              </label>
              <input
                type="text"
                id="access_requirements"
                name="access_requirements"
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition disabled:bg-gray-100"
              />
            </div>

            {/* Speaker Support */}
            <div>
              <label className="block text-gray-900 font-semibold mb-3">
                Would it help to have a 30 minute speaker support session with us?
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="speaker_support"
                    value="yes"
                    disabled={isSubmitting}
                    className="mr-2"
                  />
                  <span className="text-gray-700">Yes, please, I'd like some support for this presentation!</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="speaker_support"
                    value="no"
                    disabled={isSubmitting}
                    className="mr-2"
                  />
                  <span className="text-gray-700">No, I'm all good thanks!</span>
                </label>
              </div>
              <p className="text-sm text-gray-600 mt-2">If yes, we'll contact you to arrange a time.</p>
            </div>

            {/* Questions or Notes */}
            <div>
              <label htmlFor="notes" className="block text-gray-900 font-semibold mb-2">
                Any questions or notes for the organisers?
              </label>
              <textarea
                id="notes"
                name="notes"
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

export default SpeakerForm;