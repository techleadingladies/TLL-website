import React from "react";
import { Linkedin } from "lucide-react";

import susanBranderImage from "../assets/images/organisers/SusanBrander.jpg";
import lindaLaiImage from "../assets/images/organisers/LindaLai.jpg";
import michaelPlayfairImage from "../assets/images/organisers/MichelePlayfair.jpg";
import shannonRoweImage from "../assets/images/organisers/ShannonRowe.jpg";
import tracyMariePowellImage from "../assets/images/organisers/TracyMariePowell.jpg";
import elleMeredithImage from "../assets/images/organisers/ElleMeredith.jpg";
import michelleGleesonImage from "../assets/images/organisers/MichelleGleeson.jpg";

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Michelle Gleeson",
      role: "Founder and Organiser",
      image: michelleGleesonImage,
      linkedin: "https://www.linkedin.com/in/michellegleeson/",
    },
    {
      name: "Susan Brander",
      role: "Co-Organiser",
      image: susanBranderImage,
      linkedin: "https://www.linkedin.com/in/susan-brander/",
    },
    {
      name: "Linda Lai",
      role: "Co-Organiser",
      image: lindaLaiImage,
      linkedin: "https://www.linkedin.com/in/lindalai/",
    },
    {
      name: "Tracy Marie Powell",
      role: "Program Lead, Mentoring",
      image: tracyMariePowellImage,
      linkedin: "https://www.linkedin.com/in/tracymariepowell/",
    },
    {
      name: "Elle Meredith",
      role: "Program Lead, Leadership Training",
      image: elleMeredithImage,
      linkedin: "https://www.linkedin.com/in/ellemeredith/",
    },
    {
      name: "Shannon Rowe",
      role: "Program Lead, Next Gig",
      image: shannonRoweImage,
      linkedin: "https://www.linkedin.com/in/shannonrowe/",
    },
    {
      name: "Michele Playfair",
      role: "Program Lead, Speaker Support",
      image: michaelPlayfairImage,
      linkedin: "https://www.linkedin.com/in/micheleplayfair/",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mt-10 mb-8 text-gray-900 animate-fade-in-up">
            About Tech Leading Ladies
          </h1>

          <div className="space-y-6 text-gray-700 leading-relaxed font-light">
            <p className="animate-fade-in-up animation-delay-200">
              Our founding team, software developers by trade, have spent many
              years working hard to change the gender imbalance in tech:
              promoting tech as a desirable career to girls and young women, and
              teaching girls and women to code to bring them into the industry.
            </p>

            <p className="animate-fade-in-up animation-delay-400">
              After several years, they noticed that the women they had worked
              so hard to bring in were not being promoted at the same speed or
              frequency as their male peers, and did not feel they belonged.
              This was causing them to leave the industry again soon after.
            </p>

            <p className="animate-fade-in-up animation-delay-600">
              Tech Leading Ladies was started in 2017 as a small coaching group
              designed to break down the barriers to promotion for women in
              technology, giving its participants the tools and knowledge to
              overcome self-limiting behaviours and systemic bias in their jobs.
              We quickly moved to an online monthly Meetup format to help a
              wider audience.
            </p>

            <p className="animate-fade-in-up animation-delay-800">
              Since then we have grown into a community drawing members from
              across Australia and New Zealand.
            </p>

            <p className="animate-fade-in-up animation-delay-800">
              Our Slack group provides the networking, coaching and mentoring
              women often miss out on in their organisations. It gives
              visibility of role-models, successful female leaders in tech,
              paving the way for other women and showing them what they too can
              accomplish.
            </p>

            <p className="animate-fade-in-up animation-delay-800">
              Our Meetups bring content, resources and skills needed to succeed
              as a technical leader. Most of our speakers come from the TLL
              community.
            </p>
          </div>
        </div>
      </section>

      {/* Organising Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-gray-900 animate-fade-in-up">
            Organising Team
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="mb-6 overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-70 aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        member.name
                      )}&size=400&background=a855f7&color=fff`;
                    }}
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>

                <p className="text-gray-600 mb-4 font-light">{member.role}</p>

                <div className="flex items-center space-x-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 transition"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
