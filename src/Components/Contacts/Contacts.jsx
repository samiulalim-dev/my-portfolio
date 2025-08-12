import React, { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // এখানে তুমি API কল বা অন্য কাজ করতে পারো
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 bg-[#0a0a23] text-white">
      <div>
        <h2 className="text-4xl w-11/12 mx-auto font-bold mb-8  ">
          <div className="flex items-center gap-2">
            {/* Horizontal Gradient Line */}
            <span
              className="flex-grow h-[2px] ml-4 rounded"
              style={{
                background: "linear-gradient(to right, #6366f1, #a855f7)",
              }}
            />
            {/* Left Gradient Arrow */}
            <span className=" text-[#a855f7]">
              <MdArrowBackIos />
            </span>

            {/* Text */}
            <span className="text-white">Contact Me</span>

            {/* Right Gradient Arrow */}
            <span className=" text-[#a855f7]">
              <MdArrowForwardIos />
            </span>

            {/* Horizontal Gradient Line */}
            <span
              className="flex-grow h-[2px] ml-4 rounded"
              style={{
                background: "linear-gradient(to right, #6366f1, #a855f7)",
              }}
            />
          </div>
        </h2>

        <div className="flex container mx-auto max-w-4xl px-6 md:px-12 flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl font-semibold">Get In Touch</h3>
            <p>
              If you have any questions or want to collaborate, feel free to
              reach out!
            </p>
            <div className="space-y-4">
              <p>
                <strong> Email:</strong>{" "}
                <a
                  href="mailto:samiulalim.dev@gmail.com"
                  className="text-indigo-400 hover:underline"
                >
                  samiulalim.dev@gmail.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+880140279198"
                  className="text-indigo-400 hover:underline"
                >
                  +880 1402791983
                </a>
              </p>
              <p>
                <strong>Whats App:</strong>{" "}
                <a
                  href="tel:+880140279198"
                  className="text-indigo-400 hover:underline"
                >
                  +880 1402791983
                </a>
              </p>
              <p>
                <strong>Location:</strong> Dhaka, Bangladesh
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="md:w-1/2 flex flex-col gap-6 z-10 bg-[#111128] p-6 rounded-lg shadow-lg"
          >
            {submitted && (
              <p className="mb-4 text-green-400 font-semibold">
                Thank you for your message! I will get back to you soon.
              </p>
            )}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-[#0a0a23] text-white px-4 py-3 rounded-md border border-gray-700 focus:border-indigo-500 outline-none transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-[#0a0a23] text-white px-4 py-3 rounded-md border border-gray-700 focus:border-indigo-500 outline-none transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-[#0a0a23]  text-white px-4 py-3 rounded-md border border-gray-700 focus:border-indigo-500 outline-none transition resize-none"
            />

            <button
              type="submit"
              className="bg-gradient-to-r cursor-pointer from-[#6366f1] to-[#a855f7] px-6 py-3 rounded-md font-semibold hover:scale-105 transition-transform duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
