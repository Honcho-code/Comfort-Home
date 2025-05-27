import React, { useState } from "react";
import { assest } from "../assets/asset";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="mx-4 md:mx-6 lg:mx-28 my-6 md:my-14 lg:my-20 scroll-smooth" id="contact">
      <div className="mb-10">
        <h1 className="text-xl md:text-3xl font-semibold mb-2 w-96">
          Say Hi👋, Let's Talk About Your Next Home.
        </h1>
        <p className="text-lg">
          Send a message lets get started on your next big project.
        </p>
      </div>
      <div className="block md:grid md:grid-cols-2 gap-5 lg:gap-9 items-center">
        <img src={assest.brand_img} alt="contact_image" className="hidden md:block lg:w-lg"/>
        <div>
          <form action="">
            <div>
              <label htmlFor="name" className="block mb-2">Name:</label>
              <input
                type="text"
                placeholder="Rapheal Clinton"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border px-2 py-2 w-full mb-4 rounded border-gray-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email:</label>
              <input
                type="email"
                placeholder="Rapheal@gmail.com"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border px-2 py-2 w-full mb-4 rounded border-gray-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message:</label>
              <textarea
                type="text"
                placeholder="Hello Comfort Home..."
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border px-2 py-3 w-full mb-4 rounded border-gray-500 resize-none"
                rows={4}
              />
            </div>
            <button className="bg-blue-900 px-8 py-3 text-white rounded text-lg font-medium cursor-pointer">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
