import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const socialLinks = [
    { icon: <FaFacebookF />, label: "Facebook" },
    { icon: <FaTwitter />, label: "Twitter" },
    { icon: <FaLinkedinIn />, label: "LinkedIn" },
    { icon: <FaInstagram />, label: "Instagram" },
  ];

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone.trim()))
      newErrors.phone = "Invalid phone number";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim()))
      newErrors.email = "Invalid email address";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .send(
          "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
          "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
          formData,
          "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
        )
        .then(() => {
          alert("Message sent!");
          setFormData({
            name: "",
            phone: "",
            email: "",
            subject: "",
            message: "",
          });
        })
        .catch((error) => {
          console.error("EmailJS error:", error);
          alert("Failed to send message. Please try again.");
        });
    }
  };

  return (
    <div className="min-h-screen bg-[#0D1117] text-white flex flex-col items-center py-10 px-4 md:px-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-10">
        <span className="text-[#00D563]">Contact</span> With Me
      </h1>
      <div className="flex flex-col md:flex md:flex-col xl:flex xl:flex-row  w-full max-w-6xl gap-8">
        {/* Left Profile Card */}
        <div className="bg-[#181d25] p-6 rounded-xl text-left shadow-lg w-full  md:w-full xl:w-1/3">
          <img src="contactimg.jpg" alt="Profile" className="rounded-md mb-4" />
          <h2 className="text-xl font-bold">Suyash Pawar</h2>
          <p className="text-sm text-gray-400">Full Stack Developer</p>
          <p className="text-sm mt-4 text-gray-300">
            Full Stack Developer with 1.5+ years of experience specializing in
            React, Next.js, Node.js, Express.js, and MySQL.
          </p>
          <p className="mt-4">
            <span className="text-blue-400">Phone:</span> +91 8669872268
          </p>
          <p className="mt-1">
            <span className="text-blue-400">Email:</span>{" "}
            suyashpawar759@gmail.com
          </p>
          <div className="flex-1">
            <h2 className="font-semibold  mt-4 mb-4">FIND ME IN</h2>
            <div className="flex justify-start xl:justify-start gap-4 flex-wrap">
              {socialLinks.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-800 group transition duration-300 p-2 rounded-lg transform hover:scale-110 shadow-md hover:shadow-[#00D563]/30"
                  title={item.label}
                >
                  <span className="text-2xl text-gray-400 group-hover:text-green-500 transition-colors duration-300">
                    {item.icon}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#181d25] p-6 rounded-xl shadow-lg w-full xl:w-2/3 md:w-full text-start space-y-4"
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
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
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
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
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
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
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
            {errors.subject && (
              <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
            )}
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
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 border border-gray-600 hover:border-blue-500 rounded hover:bg-gray-900 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
