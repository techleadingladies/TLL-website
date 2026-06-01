import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Settings, Users, Calendar, Briefcase } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

import kaleidaLogo from "../assets/logo/Kaleida-colouful-kaleidoscope-logo.png";
import cultureAmpLogo from "../assets/logo/CultureAmp.png";
import rebootLogo from "../assets/logo/RebootCo_MainLogo_Blue.png";
import rome2rioLogo from "../assets/logo/On-white-background.png";
import iterateLogo from "../assets/logo/iterate.png";
import donutLogo from "../assets/logo/donut.png";
import bannerImage from "../assets/images/background/banner.jpg";
import michelleGleesonImage from "../assets/images/organisers/MichelleGleeson.jpg";
import susanBranderImage from "../assets/images/organisers/SusanBrander.jpg";
import alexandraStokesImage from "../assets/images/organisers/AlexandraStokes.jpg";
import nicolaNyeImage from "../assets/images/organisers/NicolaNye.jpg";

const TechLeadingLadies: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  useScrollAnimation();

  const testimonials = [
    {
      text: "TLL is an essential community to belong to for any aspiring tech individual. Incredibly inclusive, supportive and practical help to get your career started or boosted. I so wish something like this was around when I started my career in tech. I just love connecting new people with TLL and seeing them engage with the community.",
      author: "Alexandra Stokes",
      role: "Founder ReBoot Co.",
      image: alexandraStokesImage,
    },
    {
      text: "The support of this community contributed to me changing the way that I think about role changes and my career. These amazing people also helped me to value myself as a leader. I value the excellent advice provided to anyone who requests it, and I am confident this is a safe space for me to both ask for and to offer help.",
      author: "Rachel",
      role: "Program Manager, Vic",
    },
    {
      text: "When I discovered Tech Leading Ladies I found a community of strong technical women, who were forging their leadership path alongside me. I quickly gained the skills and confidence to accelerate my own career growth, and the impact that I was having in my organisations.",
      author: "Susan Brander",
      role: "Technical Lead Mondo",
      image: susanBranderImage,
    },
    {
      text: "I want to thank all the incredible women in this community who have given me the skills, confidence and support to take on new challenges and build a career I love.",
      author: "Michelle Gleeson",
      role: "Co-founder Tech Diversity Lab",
      image: michelleGleesonImage,
    },
    {
      text: "It's often said that you cannot be what you cannot see. TLL is a wonderful place for non-binary folk and women to be part of a community who looks like them. Super supportive, mindfully inclusive and generous in spirit, the leadership team have built a space for current and aspiring leaders to grow, connect and share.",
      author: "Nicola Nye",
      role: "Chief of Staff, Fastmail",
      image: nicolaNyeImage,
    },
  ];

  const sponsors = {
    silver: [
      { name: "Kaleida", logo: kaleidaLogo, url: "https://kaleida.team" },
      {
        name: "Culture Amp",
        logo: cultureAmpLogo,
        url: "https://www.cultureamp.com/",
      },
    ],
    community: [
      {
        name: "ReBoot Co",
        logo: rebootLogo,
        url: "https://www.rebootco.com.au/",
      },
      {
        name: "Rome2Rio",
        logo: rome2rioLogo,
        url: "https://www.rome2rio.com/",
      },
      {
        name: "iterate",
        logo: iterateLogo,
        url: "https://www.iteraterecruitment.com/",
      },
      { name: "Donut", logo: donutLogo, url: "https://www.donut.com/" },
    ],
  };

  const features = [
    {
      icon: Settings,
      title: "Slack Community",
      description:
        "Our Slack group provides the networking, coaching and mentoring women often miss out on in their organisations. It gives visibility of role-models, successful female leaders in tech, paving the way for other women and showing them what they too can accomplish.",
      color: "#4ade80",
      bgColor: "#dcfce7",
    },
    {
      icon: Users,
      title: "Mentoring Program",
      description:
        "We provide coaching for those difficult questions that we often face and don't have anywhere to turn. We're excited to announce our formal mentoring program is coming soon.",
      color: "#f472b6",
      bgColor: "#fce7f3",
    },
    {
      icon: Calendar,
      title: "Monthly Events",
      description:
        "Our Meetups bring content, resources and skills needed to succeed as a technical leader. Most of our speakers come from the TLL community.",
      color: "#a78bfa",
      bgColor: "#ede9fe",
    },
    {
      icon: Briefcase,
      title: "Job Postings",
      description:
        "We are a trusted network to help members find their next opportunity. Companies and managers are vouched for, salaries are transparently posted.",
      color: "#fb923c",
      bgColor: "#fed7aa",
    },
  ];

  const blogPosts = [
    {
      category: "Career Growth",
      title: '"Not Technical Enough"',
      excerpt:
        "Women often receive the feedback they're not technical enough during interviews, performance evaluations and promotions. Let's dig in to why we receive this feedback, whether…",
    },
    {
      category: "Meetup Summary",
      title: "Meetup Summary - Building Robust AI Products",
      excerpt:
        "Welcome back! 👋 We're excited to be kicking off Tech Leading Ladies in 2024 with some amazing speakers and your favourite programs lined up for…",
    },
    {
      category: "Meetup Summary",
      title: "Meetup Summary - Startin' Something",
      excerpt:
        "(Cue music: 🎶 I said you wanna be startin' something, you got to be startin' something 🎶) The Tech Leading Ladies October meetup featured Lucy…",
    },
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-pink-400"
      >
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url(${bannerImage})`,
            mixBlendMode: "multiply",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/60 via-pink-600/60 to-pink-500/60" />

        <div className="max-w-7xl mx-auto px-6 py-32 relative z-10 w-full">
          <div className="max-w-2xl">
            <h1 className="md:text-5xl lg:text-6xl font-bold text-white mb-6 !leading-[1.4]">
              Bridging The Gender Gap In Tech Leadership
            </h1>
            <p className="text-md md:text-xl text-white/95 mb-8 !leading-[1.6] font-light">
              Tech Leading Ladies is a community group of women identifying and
              non-binary members who work in software development and technology
              roles.
            </p>
            <a
              href="#discover"
              className="inline-block px-8 py-4 border-2 border-white text-white font-normal text-md rounded hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Smooth Wave Divider */}
        <div className="wrap-divider" data-height="350" data-front="" data-style="waves_opacity_alt" data-position="bottom"><svg aria-hidden="true" fill="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 300" preserveAspectRatio="none">
          <path className="divider" d="M 1000 299 l 2 -279 c -155 -36 -310 135 -415 164 c -102.64 28.35 -149 -32 -232 -31 c -80 1 -142 53 -229 80 c -65.54 20.34 -101 15 -126 11.61 v 54.39 z" style={{ opacity: 0.15 }}></path>
          <path d="M 1000 286 l 2 -252 c -157 -43 -302 144 -405 178 c -101.11 33.38 -159 -47 -242 -46 c -80 1 -145.09 54.07 -229 87 c -65.21 25.59 -104.07 16.72 -126 10.61 v 22.39 z" style={{ opacity: 0.3 }}></path>
          <path d="M 1000 300 l 1 -230.29 c -217 -12.71 -300.47 129.15 -404 156.29 c -103 27 -174 -30 -257 -29 c -80 1 -130.09 37.07 -214 70 c -61.23 24 -108 15.61 -126 10.61 v 22.39 z"></path>
        </svg>

        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-orange-500 animate-on-scroll">
            Sponsors
          </h2>

          <div className="mt-20">
            <h3 className="text-3xl font-normal text-center mb-16 text-gray-800">
              Silver
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center mb-8">
              {sponsors.silver.map((sponsor, index) => (
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
                    className="max-w-[220px] h-auto object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-24">
            <h3 className="text-3xl font-normal text-center mb-16 text-gray-800">
              Community
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 items-center justify-items-center">
              {sponsors.community.map((sponsor, index) => (
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
                    className="max-w-[140px] h-auto object-contain"
                    onError={(e) => {
                      e.currentTarget.src = `https://via.placeholder.com/140x80?text=${sponsor.name}`;
                    }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="discover" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-16 items-start">
            <div className="md:col-span-2 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Meet women leaders in tech across Australia and New Zealand.
              </h2>
              <p className="text-base text-gray-700 mb-6 leading-relaxed font-light">
                Founded in 2017 as a meetup and coaching group, this community
                is designed to break down the barriers to promotion for women in
                Tech.
              </p>
              <p className="text-base text-gray-700 leading-relaxed font-light">
                Since then it has grown into a community drawing members from
                all over Australian and New Zealand.
              </p>
            </div>

            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-2"
                  >
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center mb-6"
                      style={{ backgroundColor: feature.bgColor }}
                    >
                      <IconComponent
                        size={40}
                        color={feature.color}
                        strokeWidth={2.5}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-blue relative h-[700px] flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <h2 className="text-2xl md:text-3xl text-center text-white">
            What They're Saying
          </h2>
          <div className="relative h-[400px] flex items-center">
            <div className="text-center transition-opacity duration-500 w-full">
              {testimonials[currentTestimonial].image && (
                <div className="mb-4 flex justify-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center overflow-hidden ring-4 ring-white/30">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].author}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = "none";
                        if (target.parentElement) {
                          const initial =
                            testimonials[currentTestimonial].author.charAt(0);
                          target.parentElement.innerHTML = `<div class="text-3xl font-bold text-blue-600">${initial}</div>`;
                        }
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Remove fixed height, use padding instead */}
              <div className="flex items-center justify-center px-4">
                <p className="text-md md:text-lg text-white leading-relaxed max-w-4xl mx-auto font-light">
                  "{testimonials[currentTestimonial].text}"
                </p>
              </div>

              {/* Consistent spacing */}
              <div className="text-white mb-2 mt-8">
                <p className="font-semibold text-xl mb-1">
                  {testimonials[currentTestimonial].author}
                </p>
                <p className="text-white/90 text-base font-light">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
              <div className="text-white font-semibold text-lg">
                {currentTestimonial + 1} / {testimonials.length}
              </div>
            </div>

            <button
              onClick={() =>
                setCurrentTestimonial(
                  (prev) =>
                    (prev - 1 + testimonials.length) % testimonials.length
                )
              }
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-blue-700/50 hover:bg-blue-700/70 text-white w-12 h-12 md:w-14 md:h-14 rounded-full transition flex items-center justify-center text-3xl"
            >
              ‹
            </button>
            <button
              onClick={() =>
                setCurrentTestimonial(
                  (prev) => (prev + 1) % testimonials.length
                )
              }
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-blue-700/50 hover:bg-blue-700/70 text-white w-12 h-12 md:w-14 md:h-14 rounded-full transition flex items-center justify-center text-3xl"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Recent posts
          </h2>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {blogPosts.map((post, index) => (
              <div key={index} className="cursor-pointer group">
                <span className="text-gray-500 font-normal text-sm mb-3 block">
                  {post.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {post.excerpt}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 border-2 border-orange-500 text-gray-900 px-8 py-3 rounded font-medium hover:bg-orange-500 hover:text-white transition group"
            >
              Tech Leading Ladies Blog
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full blur-2xl"></div>
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-pink-300 rounded-full blur-2xl"></div>
        </div>

        {/* Top Wave Divider */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[100px] md:h-[150px]"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight pt-20">
            Looking for a community to support you on your tech lead journey?
          </h2>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 border-2 border-white text-white font-normal text-base rounded hover:bg-white hover:text-purple-600 transition-all duration-300"
          >
            Join Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TechLeadingLadies;
