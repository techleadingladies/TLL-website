import React from "react";

import kaleidaLogo from "../assets/logo/Kaleida-colouful-kaleidoscope-logo.png";
import cultureAmpLogo from "../assets/logo/CultureAmp.png";
import rebootLogo from "../assets/logo/RebootCo_MainLogo_Blue.png";
import iterateLogo from "../assets/logo/iterate.png";
import donutLogo from "../assets/logo/donut.png";

const Sponsors: React.FC = () => {
  const silverSponsors = [
    {
      name: "Kaleida",
      logo: kaleidaLogo,
      url: "https://kaleida.team",
    },
    {
      name: "Culture Amp",
      logo: cultureAmpLogo,
      url: "https://www.cultureamp.com/",
    },
  ];

  const communitySponsors = [
    {
      name: "ReBoot Co",
      logo: rebootLogo,
      url: "https://www.rebootco.com.au/",
    },
    {
      name: "iterate",
      logo: iterateLogo,
      url: "https://www.iteraterecruitment.com/",
    },
    {
      name: "Donut",
      logo: donutLogo,
      url: "https://www.donut.com/",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mt-10 mb-8 text-gray-900">
            Sponsors
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl font-light">
            Thank you to all of our sponsors for supporting the Tech Leading
            Ladies community, and helping us move closer to achieving our
            mission of bridging the gender gap in tech leadership.
          </p>
        </div>
      </section>

      {/* Silver Sponsors */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-16 text-gray-900">
            Silver Sponsors
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center justify-items-center">
            {silverSponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-w-[250px] h-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Community Sponsors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-16 text-gray-900">
            Community Sponsors
          </h2>

          <div className="grid md:grid-cols-3 gap-12 items-center justify-items-center">
            {communitySponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-w-[180px] h-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/180x100?text=${sponsor.name}`;
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg text-gray-700 mb-8 font-light">
            If you would like to sponsor our community please{" "}
            <a
              href="#contact"
              className="text-purple-600 hover:text-purple-700 font-semibold underline"
            >
              contact us
            </a>{" "}
            for more details.
          </p>

          <p className="text-lg text-gray-700 font-light">
            We partner with companies who are dedicated to building diverse and
            inclusive workplaces.
          </p>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-12 text-gray-900">
            Guidelines for job postings
          </h2>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light">
            <p>
              Many of our community members find their next role on the TLL
              Slack #jobs channel. It is important to us that the companies we
              endorse are inclusive, supportive and have growth opportunities
              for women in tech.
            </p>

            <p>
              Our sponsorship packages provide our partners with the opportunity
              to post job ads on our internal forum.
            </p>

            <p className="font-normal">
              To help women to move toward equality, all job postings need to
              adhere to our guidelines:
            </p>

            <ul className="space-y-4 ml-6">
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0"></span>
                <span>
                  The salary range is transparently listed, to help fix the{" "}
                  <a
                    href="#"
                    className="text-purple-600 hover:text-purple-700 underline"
                  >
                    gender pay gap in tech
                  </a>
                  .
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0"></span>
                <span>
                  You agree to interview any candidate who comes through TLL,
                  and provide actionable feedback for their growth if they are
                  unsuccessful. By interview, we mean the technical interview,
                  not the HR phone screen.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0"></span>
                <span>
                  Your company's culture is inclusive for women-identifying and
                  non-binary people, and you have a proactive plan and
                  commitment for levelling the gender imbalance and getting
                  women into tech leadership roles. If you need support building
                  an action plan, please engage{" "}
                  <a
                    href="https://techdiversitylab.com/"
                    className="text-purple-600 hover:text-purple-700 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tech Diversity Lab
                  </a>{" "}
                  consulting services.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0"></span>
                <span>
                  Any successful TLL candidates will be paid the same as their
                  male peers, regardless of what they ask for or how they
                  negotiate.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
