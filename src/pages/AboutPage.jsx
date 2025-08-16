import React from "react";
// import { FaUserCircle } from "react-icons/fa";

import BreadCrumbs from "@/components/BreadCrumbs";
import AboutSection from "@/components/AboutSection";
// import HeroSection1 from "@/components/hero-section-1";
import WorkingProcessFlex from "@/components/WorkingProcessFlex";
import InfoGrid from "@/components/InfoGrid";

import icon1 from '../assets/icons/web.png';
import Manav from '../assets/Team/MG.jpg';

const AboutPage = () => {
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "About Us" }];

  const whyChooseUs = {
    topTitle: "Why Choose Us",
    topSubheading: "Why 10Sight is Your Perfect Tech Partner",
    items: [
      {
        icon: "🤝",
        title: "Client-Centered Approach",
        desc: "We prioritize your vision and ensure our solutions align with your business goals.",
      },
      {
        icon: "🎯",
        title: "Tailored Solutions",
        desc: "We build strategies and tools that are unique to your brand, audience, and objectives.",
      },
      {
        icon: "🚀",
        title: "End-to-End Expertise",
        desc: "From idea to deployment, our expert team handles every stage with finesse.",
      },
      {
        icon: "📞",
        title: "Transparent Communication",
        desc: "No technical jargon—just honest, timely updates you can understand.",
      },
      {
        icon: "📈",
        title: "Scalable & Future-Proof",
        desc: "Our digital products adapt as your business grows, ensuring long-term value.",
      },
      {
        icon: "🛠️",
        title: "Reliable Support",
        desc: "We’re here before, during, and after launch to support you at every step.",
      },
    ],
  };

  const ourValues = {
    topTitle: 'Our Values',
    topSubheading: 'The Core Values That Drive 10Sight',
    items: [
      {
        icon: '💡',
        title: 'Innovation',
        desc: 'We constantly push the boundaries of technology and creativity to deliver smarter solutions.',
      },
      {
        icon: '🤝',
        title: 'Integrity',
        desc: 'Honesty and transparency are at the core of everything we do—from communication to delivery.',
      },
      {
        icon: '🎯',
        title: 'Client Success',
        desc: 'We succeed when our clients succeed. Their growth is our biggest achievement.',
      },
      {
        icon: '🏆',
        title: 'Excellence',
        desc: 'We are obsessed with quality and strive to exceed expectations in every project.',
      },
      {
        icon: '🤝',
        title: 'Collaboration',
        desc: 'We work hand-in-hand with clients and teams to copcreate effective, lasting solutions.',
      },
      {
        icon: '📈',
        title: 'Growth Mindset',
        desc: 'We embrace learning and adapt quickly to stay ahead in a fast-moving digital world.'
      }
    ]
  };

  return (
    <div>
      {/* Bread Crumbs */}
      <BreadCrumbs headText={"About Us"} items={breadcrumbItems} />
      {/* About Section */}
      <AboutSection />
      {/* Our Mission */}
      <section className="px-[5vw] py-16 text-center" data-aos="fade-up">
        <div className="text-5xl mb-4">🧭</div>
        <p className="uppercase text-sm text-gray-400 tracking-widest mb-2">
          Our Mission
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 sora-600">
          Empowering Businesses Through Smart Digital Innovation
        </h2>
        <p className="max-w-[45rem] mx-auto text-primary leading-relaxed sora-400">
          At <strong>10Sight</strong>, our mission is to help brands grow
          through intelligent technology, strategic design, and powerful
          storytelling.
          <br />
          <br />
          We deliver high-performance websites, impactful social media
          strategies, and next-gen AI/ML solutions that drive real-world
          results. We’re committed to making innovation accessible, meaningful,
          and measurable for businesses of all sizes.
        </p>
      </section>

      {/* Our Vision */}
      <section
        className="px-[5vw] py-16 text-center bg-white"
        data-aos="fade-up"
      >
        <div className="text-5xl mb-4">🔮</div>
        <p className="uppercase text-sm text-gray-400 tracking-widest mb-2">
          Our Vision
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 sora-600">
          Shaping the Future of Digital Possibilities
        </h2>
        <p className="max-w-[45rem] mx-auto text-primary leading-relaxed sora-400">
          At <strong>10Sight</strong>, our vision is to become a global leader
          in intelligent digital solutions.
          <br />
          <br />
          We aim to redefine how businesses interact with technology—by building
          seamless experiences, leveraging data-driven insights, and fostering
          long-term partnerships. We envision a world where every brand can
          unlock its full potential through innovation, strategy, and purposeful
          design.
        </p>
      </section>
      {/* Core Values */}
      <InfoGrid data={ourValues} />
      {/* Why choose us */}
      <InfoGrid data={whyChooseUs} />
      {/* Working Process Flex */}
      <div className="bg-white">
        <WorkingProcessFlex />
      </div>
      {/* Meet the Team */}
      <section className="px-[5vw] py-20 bg-gray-100 text-center" id="our-team">
        <p
          className="uppercase text-sm text-gray-400 tracking-widest mb-2"
          data-aos="fade-up"
        >
          Our Team
        </p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-primary mb-12 sora-600"
          data-aos="fade-up"
        >
          The People Behind 10Sight
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {[
            { name: "Jatin Kumar Nagar", role: "Founder & Co-Founder", img: "https://ui-avatars.com/api/?name=Jatin+Kumar+Nagar&size=96" },
            { name: "Manav Gupta", role: "Founder & Co-Founder", img: Manav},
          ].map((member, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-xl shadow-sm"
              data-aos="fade-up"
              data-aos-delay={`${i * 100}`}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold sora-600 text-primary">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 sora-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
