import React from "react";
import { assets } from "../Utils/assets/frontend_assets/assets";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full mt-14">
      <h1 className="mb-10 text-2xl font-semibold">Contact Us───</h1>
      <div className="flex justify-center items-center w-[80%]">
        <div className="w-[50%]">
          <img src={assets.contact_img} alt="about" className="w-[90%]" />
        </div>
        <div className="w-[50%]">
          <h1 className="mt-4 font-semibold mb-4">Our Store</h1>
          <p className="my-4">54709 Willms Station Suite 350,<br /> Washington, USA</p>
          <p>Tel: (415) 555-0132 <br />Email: admin@forever.com</p>
          <h1 className="mt-4 font-semibold mb-4">Careers at forever</h1>
          <p className="my-4">Learn more about our teams and job openings.</p>
          <button className="border border-gray-500 p-3 hover:bg-black hover:text-white hover:border-white">Explore jobs</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
