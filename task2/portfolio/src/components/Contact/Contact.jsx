import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send the data to a backend or an email service here.
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' }); // Reset form fields
  };

  return (
    <div className="min-h-screen bg-black text-white p-10 px-[100px]">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#1ca998]">Contact Me</h2>
      
      {isSubmitted ? (
        <div className="text-center text-green-500">
          <p>Your message has been sent successfully!</p>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row">
          {/* Contact Info Section */}
          <div className="flex-1 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="text-lg mb-4 flex items-center">
              <FaEnvelope className="mr-3 text-[#1ca998]" />
              <strong>Email:</strong> komalkalsoom1@gmail.com
            </p>
            <p className="text-lg mb-4 flex items-center">
              <FaPhoneAlt className="mr-3 text-[#1ca998]" />
              <strong>Phone:</strong> +123 456 7890
            </p>
            <p className="text-lg mb-4 flex items-center">
              <FaMapMarkerAlt className="mr-3 text-[#1ca998]" />
              <strong>Location:</strong> Lahore, Pakistan
            </p>
          </div>

          {/* Contact Form Section */}
          <form onSubmit={handleSubmit} className="flex-1 bg-transparent text-white p-6 rounded-lg shadow-lg border-2 border-[#1ca998]">
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 bg-transparent border border-[#1ca998] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#1ca998] focus:border-[#17a48b]"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-lg mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 bg-transparent border border-[#1ca998] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#1ca998] focus:border-[#17a48b]"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-lg mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 bg-transparent border border-[#1ca998] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#1ca998] focus:border-[#17a48b]"
                rows="5"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-[#1ca998] text-white py-2 px-6 rounded-md hover:bg-[#17a48b] transition duration-300 w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contact;
