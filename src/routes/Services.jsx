import React from 'react'
import image1 from '../assets/service1.jpg'
import image2 from '../assets/service2.jpg'
import image3 from '../assets/service3.jpg'

const serviceData = [
  {
    title: 'E-Commerce Solutions',
    desc: 'Secure and scalable platforms like Shopify, Magento, and custom-built solutions with payment gateway integration.',
    img: image2,
  },
  {
    title: 'SEO & Performance Optimization',
    desc: 'Search engine-friendly architecture, fast-loading websites, and performance tuning.',
    img: image3,
  },
  {
    title: 'Responsive & Mobile-First Design',
    desc: 'Optimized for all devices: phones, tablets, desktops. Adaptive layouts and touch-friendly interfaces.',
    img: image1,
  },
  {
    title: 'Maintenance & Support',
    desc: 'Ongoing support, updates, security patches, backups, and monitoring.',
    img: image2,
  },
  {
    title: 'Cloud & Hosting Integration',
    desc: 'AWS, Google Cloud, Azure support. Managed hosting and deployment.',
    img: image3,
  },
]

const Services = () => {
  return (
    <main className="bg-gray-50 text-gray-900 scroll-smooth">

      {/* Hero Banner */}
      <section className="relative">
        <img
          src={image1}
          alt="Alif Technologies Banner"
          className="w-full h-[60vh] object-cover opacity-80"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold font-mono text-white text-center drop-shadow-lg">
            Our Services
          </h1>
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-center">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          At Alif Technologies, we specialize in building modern, high-performance web applications using React. 
          Whether it's a single-page app, an enterprise dashboard, or an e-commerce solution, we combine scalable 
          frontend architecture with seamless UX to deliver exceptional digital products. Our services span full-cycle 
          development — from UI/UX design to deployment and maintenance — helping clients turn ideas into reliable, 
          production-ready applications.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="space-y-16">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-1/2 w-full rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="lg:w-1/2 w-full text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl font-semibold text-cyan-700 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}

export default Services
