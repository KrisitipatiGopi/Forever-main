import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16 md:mx-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8 ml-32">
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-semibold text-white mb-4">FOREVER</h2>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-semibold text-white mb-4">Company</h2>
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>About Us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-semibold text-white mb-4">
              Get in Touch
            </h2>
            <ul className="space-y-2 text-sm">
              <li>+91 9391998674</li>
              <li>gopikristipati223@gmail.com</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            Copyright 2024 © <span className="text-white">gopikristipati.dev</span>{" "}
            - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
