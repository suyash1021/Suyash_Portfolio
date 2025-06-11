import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone.trim())) newErrors.phone = 'Invalid phone number';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) newErrors.email = 'Invalid email address';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Submit form logic here
      alert('Message sent!');
    }
  };

  return (
    <div className="min-h-screen bg-[#0e1218] text-white flex flex-col items-center py-10 px-4 md:px-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-10">Contact With Me</h1>
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8">
        {/* Left Profile Card */}
        <div className="bg-[#181d25] p-6 rounded-xl shadow-lg w-full md:w-1/3">
          <img
            src="contactimg" // Replace with your image
            alt="Profile"
            className="rounded-md mb-4"
          />
          <h2 className="text-xl font-bold">Akash Dighe</h2>
          <p className="text-sm text-gray-400">Full Stack Developer</p>
          <p className="text-sm mt-4 text-gray-300">
            Full Stack Developer with 1.5+ years of experience specializing in React, Next.js, Node.js,
            Express.js, and MySQL. Skilled in building fast, scalable web applications and RESTful APIs
            with a focus on performance and clean architecture.
          </p>
          <p className="mt-4"><span className="text-blue-400">Phone:</span> +91 9370331608</p>
          <p className="mt-1"><span className="text-blue-400">Email:</span> akashdighe2205@gmail.com</p>
        </div>

        {/* Right Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#181d25] p-6 rounded-xl shadow-lg w-full md:w-2/3 space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-2 rounded bg-[#0e1218] border border-gray-600 focus:outline-none focus:border-blue-500"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm mb-1">Phone Number</label>
              <input
                type="text"
                name="phone"
                className="w-full p-2 rounded bg-[#0e1218] border border-gray-600 focus:outline-none focus:border-blue-500"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 rounded bg-[#0e1218] border border-gray-600 focus:outline-none focus:border-blue-500"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full p-2 rounded bg-[#0e1218] border border-gray-600 focus:outline-none focus:border-blue-500"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              className="w-full p-2 rounded bg-[#0e1218] border border-gray-600 focus:outline-none focus:border-blue-500"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-900 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
