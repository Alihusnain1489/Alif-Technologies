import { Button, Checkbox, DatePicker, Form, Input, message, Select } from 'antd';
import group from '../assets/group.jpg';
import icon from "../assets/service2.jpg";

export default function Company() {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    console.log('Submitted:', values);
    message.success('Application submitted successfully!');
    form.resetFields();
  };

  const handleFinishFailed = (errorInfo) => {
    message.error('Please fill all required fields correctly.');
  };

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <img
          src={group}
          alt="Team"
          className="w-full h-[450px] object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold font-serif text-white drop-shadow-lg">
            Join our Team
          </h1>
        </div>
      </div>

      <section className="bg-gray-100 py-16 px-4">
  <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">Join the Team</h2>
    <p className="text-center text-gray-600 mb-8">Apply below to become part of our growing workforce</p>

    <Form
      form={form}
      name="join_team"
      layout="vertical"
      onFinish={handleFinish}
      onFinishFailed={handleFinishFailed}
    >
      <Form.Item
        name="fullName"
        label="Full Name"
        rules={[{ required: true, message: 'Please enter your name' }]}
      >
        <Input placeholder="Type your name" size="large" />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Enter a valid email address' },
        ]}
      >
        <Input placeholder="Type your email" size="large" />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: 'Please enter a password' }]}
      >
        <Input.Password placeholder="Type your password" size="large" />
      </Form.Item>

      <Form.Item
        name="confirmPassword"
        label="Confirm Password"
        dependencies={['password']}
        rules={[
          { required: true, message: 'Please confirm your password' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Passwords do not match!'));
            },
          }),
        ]}
      >
        <Input.Password placeholder="Confirm password" size="large" />
      </Form.Item>

      <Form.Item name="gender" label="Gender">
        <Select placeholder="Select your gender" size="large">
          <Select.Option value="male">Male</Select.Option>
          <Select.Option value="female">Female</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item name="dob" label="Date of Birth">
        <DatePicker picker="date" placeholder="Choose date" size="large" className="w-full" />
      </Form.Item>

      <Form.Item name="website" label="Website">
        <Input placeholder="Add your website URL" size="large" />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('You must agree to continue')),
          },
        ]}
      >
        <Checkbox>
          I agree to the <a href="#" className="text-blue-600 underline">Terms and Conditions</a>
        </Checkbox>
      </Form.Item>

      <Form.Item className="text-center">
        <Button type="primary" htmlType="submit" size="large" className="w-full">
          Apply
        </Button>
      </Form.Item>
    </Form>
  </div>
</section>
            {/* Why Join Alif Technologies */}
            <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
            Why Join <span className="text-cyan-700">Alif Technologies</span>?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-center">
              <div className="mb-4 text-cyan-700 text-5xl">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-600">Cutting-Edge Projects</h3>
              <p className="text-gray-600">
                Work on innovative products using the latest web technologies, including React, Node, GraphQL, and more.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-center">
              <div className="mb-4 text-cyan-700 text-5xl">
                <i className="fas fa-people-arrows"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-600">Collaborative Culture</h3>
              <p className="text-gray-600">
                Join a team that values transparency, knowledge-sharing, and professional growth through mentorship and feedback.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-center">
              <div className="mb-4 text-cyan-700 text-5xl">
                <i className="fas fa-rocket"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-600">Growth Opportunities</h3>
              <p className="text-gray-600">
                Enjoy continuous learning, certifications, conference access, and the ability to level up in your career.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-center">
              <div className="mb-4 text-cyan-700 text-5xl">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-600">Tech-First Mindset</h3>
              <p className="text-gray-600">
                We prioritize quality, code reviews, scalable architecture, and performance optimization at every stage.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-center">
              <div className="mb-4 text-cyan-700 text-5xl">
                <i className="fas fa-globe"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-600">Remote Flexibility</h3>
              <p className="text-gray-600">
                Flexible working hours and remote-friendly options so you can do your best work wherever you are.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-center">
              <div className="mb-4 text-cyan-700 text-5xl">
                <i className="fas fa-heart"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-600">Positive Impact</h3>
              <p className="text-gray-600">
                Be part of a company that values ethical tech, sustainability, and empowering clients through innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      </div>

  );
}
