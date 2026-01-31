import React from "react";
import bannerImage from "../assets/images/background/banner.jpg";

const CodeOfConduct: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <img
                src={bannerImage}
                alt="Team collaboration"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
                Code of Conduct
              </h1>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Tech Leading Ladies is dedicated to providing a
                  harassment-free experience for everyone, regardless of gender,
                  gender identity and expression, sexual orientation,
                  disability, physical appearance, body size, age, race, or
                  religion. We do not tolerate harassment of participants in any
                  form.
                </p>

                <p>
                  This code of conduct applies to all Tech Leading Ladies
                  spaces, both online and off. Anyone who violates this code of
                  conduct may be sanctioned or expelled from these spaces at the
                  discretion of the organising team.
                </p>

                <p>
                  Some Tech Leading Ladies spaces may have additional rules in
                  place, which will be made clearly available to participants.
                  Participants are responsible for knowing and abiding by these
                  rules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting and Consequences Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Reporting */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Reporting
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  If you are being harassed by a member of Tech Leading Ladies,
                  notice that someone else is being harassed, or have any other
                  concerns, please contact the organising team at{" "}
                  <a
                    href="mailto:techleadingladies@gmail.com"
                    className="text-purple-600 hover:text-purple-700 font-semibold"
                  >
                    techleadingladies@gmail.com
                  </a>{" "}
                  or via Slack. If the person who is harassing you is on the
                  team, they will recuse themselves from handling your incident.
                  We will respond as promptly as we can.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-block px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Consequences */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Consequences
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Participants asked to stop any harassing behavior are expected
                  to comply immediately.
                </p>
                <p>
                  If a participant engages in harassing behavior, the organising
                  team may take any action they deem appropriate, up to and
                  including expulsion from all Tech Leading Ladies spaces and
                  identification of the participant as a harasser to other Tech
                  Leading Ladies members or the general public.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attribution Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-600 text-center">
            This anti-harassment policy is based on the{" "}
            <a
              href="https://geekfeminism.wikia.org/wiki/Community_anti-harassment/Policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 font-semibold"
            >
              example policy from the Geek Feminism wiki
            </a>
            , created by the Geek Feminism community.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CodeOfConduct;
