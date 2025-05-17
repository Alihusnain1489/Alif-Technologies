import React from 'react';
import { useNavigate } from "react-router-dom";
import { PhoneOutlined, MailOutlined } from '@ant-design/icons';

// Icon imports
import html from "/images/icons8-html5-144.png";
import css from "/images/icons8-css3-240.png";
import js from "/images/icons8-javascript-2.svg";
import java from "/images/icons8-java-240.png";
import mongodb from "/images/icons8-mongo-db-100.png";
import sql from "/images/icons8-mysql.svg";
import tailwind from "/images/icons8-tailwind-css.svg";
import springBoot from "/images/icons8-spring-boot-100.png";
import react from "../assets/react.svg";
import github from "/images/icons8-github-120.png";
import vscode from "/images/icons8-visual-studio-code-500.png";
import intellij from "/images/icons8-intellij-idea-500.png";
import eclipse from "/images/icons8-java-eclipse-80.png";
import postman from "/images/icons8-postman-inc-96.png";
import image from '../assets/programmer.jpg';

import '../routes/ScrollAnimation.css';

// Data Arrays
const skills = [
  { name: 'HTML', icon: html },
  { name: 'CSS', icon: css },
  { name: 'JavaScript', icon: js },
  { name: 'React', icon: react },
  { name: 'Java', icon: java },
  { name: 'Spring Boot', icon: springBoot },
  { name: 'MySQL', icon: sql },
  { name: 'MongoDB', icon: mongodb },
  { name: 'Tailwind CSS', icon: tailwind },
  { name: 'GitHub', icon: github },
  { name: 'VS Code', icon: vscode },
  { name: 'IntelliJ IDEA', icon: intellij },
  { name: 'Eclipse', icon: eclipse },
  { name: 'Postman', icon: postman },
];

const features = [
  {
    title: 'Custom Website Design & Development',
    desc: 'Mobile responsive and user-focused UI/UX design to meet specific business needs.'
  },
  {
    title: 'E-Commerce Solutions',
    desc: 'Secure and scalable platforms like Shopify, Magento, and custom-built solutions with payment gateway integration.'
  },
  {
    title: 'SEO & Performance Optimization',
    desc: 'Search engine-friendly architecture, fast-loading websites, and performance tuning.'
  },
  {
    title: 'Responsive & Mobile-First Design',
    desc: 'Optimized for all devices: phones, tablets, desktops. Adaptive layouts and touch-friendly interfaces.'
  },
  {
    title: 'Maintenance & Support',
    desc: 'Ongoing support, updates, security patches, backups, and monitoring.'
  },
  {
    title: 'Cloud & Hosting Integration',
    desc: 'AWS, Google Cloud, Azure support. Managed hosting and deployment.'
  },
];

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <div className=" text-white min-h-screen font-sans">

      {/* Hero Section */}
      <div className="relative">
        <img src={image} alt="Alif Technologies Banner" className="w-full h-[450px] object-cover opacity-90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold font-mono text-white">Alif Technologies</h1>
        </div>
      </div>

      {/* Scrolling Skills Section */}
      <section className="py-10 overflow-hidden">
        <div className="whitespace-nowrap animate-scroll flex items-center space-x-6 px-6">
          {skills.concat(skills).map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center bg-gray-100 rounded-md p-4 w-28 h-28 shadow-md"
            >
              <img
                src={skill.icon}
                alt={`Icon for ${skill.name}`}
                className="h-12 w-12 object-contain mb-2"
              />
              <span className="text-sm text-gray-600 text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16 text-center">
        <h2 className="text-2xl font-semibold text-cyan-600 mb-4">What Clients Say</h2>
        <figure className="italic text-black max-w-xl mx-auto">
          <blockquote>
            "They understood our vision and built a high-performing website that looks amazing."
          </blockquote>
          <figcaption className="mt-4 font-semibold ">
            — James Bond, CEO of 007 Agents
          </figcaption>
        </figure>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-center text-cyan-600">Key Features</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-xl font-semibold text-black">{feature.title}</h3>
                <p className="mt-4 text-black">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-4 ">
        <h2 className="text-2xl md:text-3xl font-semibold text-cyan-600 mb-4">Let's Build Something Amazing</h2>
        <p className=" text-lg mb-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-black">
          <span><PhoneOutlined /> (+92) 349 0470871</span>
          <span><MailOutlined /> mr.alihusnain11@gmail.com</span>
        </p>
        <button
  onClick={handleClick}
  className="bg-cyan-600 text-black hover:bg-cyan-600 hover:text-white transition-transform transform hover:scale-105 border-2 border-cyan-400 p-3 rounded-2xl"
  aria-label="Contact us button"
>
  Let’s Connect
</button>



      </section>

    </div>
  );
};

export default Home;
