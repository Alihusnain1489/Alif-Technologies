import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import image from '../assets/connect.jpg';

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("access_key", "f576c5bd-042c-4484-b925-a8c5b0a47f2c");
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("message", values.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      Swal.fire("Success!", "Your message has been sent.", "success");
    } else {
      Swal.fire("Oops!", "Something went wrong. Please try again.", "error");
    }
  };

  return (
    <section className="bg-white text-black">
    
    
      <div className="relative">
        <img src={image} alt="Alif Technologies Banner" className="w-full h-[450px] object-cover opacity-70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold font-mono text-white">Let’s Connect</h1>
         
        </div>
        </div>

      {/* Info + Form Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <EnvironmentOutlined className="text-2xl text-blue-600" />
            <div>
              <h3 className="font-bold text-lg">Location</h3>
              <p>Lahore, Punjab, Pakistan</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <PhoneOutlined className="text-2xl text-blue-600" />
            <div>
              <h3 className="font-bold text-lg">Phone</h3>
              <p>+92 349 0470871</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <MailOutlined className="text-2xl text-blue-600" />
            <div>
              <h3 className="font-bold text-lg">Email</h3>
              <p>mr.alihusnain11@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 p-8 rounded-md shadow-md">
          <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input size="large" placeholder="Your Name" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Enter a valid email address" },
              ]}
            >
              <Input size="large" placeholder="you@example.com" />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea rows={5} placeholder="Your message..." />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="bg-blue-600 hover:bg-blue-700 border-none"
              >
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
