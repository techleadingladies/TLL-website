import React from 'react';

const SlackCommunity: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mt-10 mb-6 text-gray-900">
            Slack Community
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">About</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The Tech Leading Ladies (TLL) Slack community is an invite-only community of women and
            non-binary members. The focus of our community is to build a network through
            discussions, coaching, mentoring and sharing of resources and ideas.
          </p>
        </div>
      </section>

      {/* For Members Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">For members</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Slack etiquette guidelines
              </h3>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Code of Conduct</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our{" "}
                <a
                  href="/code-of-conduct"
                  className="text-purple-600 hover:text-purple-700 font-semibold"
                >
                  Code of Conduct
                </a>{" "}
                applies to our Slack community as well as our Meetups and any other events hosted by
                TLL. In short, please be respectful to each other, and please report any incidents
                where someone may have acted against the code of conduct to an organiser (their
                Slack name will include "organiser" title), or email{" "}
                <a
                  href="mailto:organisers@techleadingladies.com"
                  className="text-purple-600 hover:text-purple-700 font-semibold"
                >
                  organisers@techleadingladies.com
                </a>
                .
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Threads</h3>
              <p className="text-gray-700 leading-relaxed">
                Please do try to keep conversations in threads as much as possible to limit too many
                notifications to other members.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Sensitive topics</h3>
              <p className="text-gray-700 leading-relaxed">
                If the contents of a message or thread contains potentially sensitive content, please
                add a content warning (CW) or trigger warning (TW) where possible. For example, "CW
                sexism". If you're not sure, please reach out to an organiser.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Channels Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Channels</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Here is our list of channels, and what they are used for:
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="font-semibold mr-2 min-w-[200px]">announcements</span>
              <span>— for all Tech Leading Ladies (TLL) related announcements</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2 min-w-[200px]">coaching-questions</span>
              <span>
                — for work/career coaching, or "micro-mentoring", also try #help-me
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2 min-w-[200px]">donut-chat</span>
              <span>
                — join this channel if you'd like to meet other members via a casual 1:1 chat every
                two weeks
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2 min-w-[200px]">events</span>
              <span>— sharing events that are not TLL events</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2 min-w-[200px]">feedback</span>
              <span>
                — any feedback about all aspects of TLL membership: Slack, Meetup, Mentoring,
                Training, etc.
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2 min-w-[200px]">help-me</span>
              <span>
                — got a question? just ask! for anything that doesn't belong in #coaching-questions
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2 min-w-[200px]">introductions</span>
              <span>
                — new to the group, or returning after a long break? Introduce yourself!
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2 min-w-[200px]">jobs</span>
              <span>— please read the job posting guidelines before posting</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2 min-w-[200px]">knowledge-sharing</span>
              <span>— books, articles, any resources please share them here</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2 min-w-[200px]">lunch-brisbane</span>
              <span>— for organising in-person Brisbane lunches</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2 min-w-[200px]">lunch-melbourne</span>
              <span>— for organising in-person Melbourne lunches</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2 min-w-[200px]">lunch-online</span>
              <span>— for organising remote lunches</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2 min-w-[200px]">meetup-discussion</span>
              <span>
                — chat and resource sharing during and after{" "}
                <a
                  href="/meetup"
                  className="text-purple-600 hover:text-purple-700 font-semibold"
                >
                  TLL monthly meetups
                </a>
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2 min-w-[200px]">membership-guidelines</span>
              <span>— questions and FAQs about TLL membership</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2 min-w-[200px]">program-leadership-training</span>
              <span>
                — information on our Tech Leadership Training courses (lead: Elle Meredith)
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2 min-w-[200px]">program-mentoring</span>
              <span>— information on our Mentoring Program (lead: Tracy Powell)</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2 min-w-[200px]">random</span>
              <span>— water-cooler, chat about anything!</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2 min-w-[200px]">rant</span>
              <span>— sometimes we all need to vent, rant away in a safe space</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2 min-w-[200px]">win</span>
              <span>
                — celebrate anything! Work-related or not, we'd love to celebrate with you
              </span>
            </li>
          </ul>

          <p className="text-gray-700 leading-relaxed mt-8">
            Any feedback or questions, please let us know by reaching out to an organiser (their
            Slack name will include "organiser" title), posting in the #feedback channel, or
            emailing{" "}
            <a
              href="mailto:organisers@techleadingladies.com"
              className="text-purple-600 hover:text-purple-700 font-semibold"
            >
              organisers@techleadingladies.com
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
};

export default SlackCommunity;