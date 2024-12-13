import React from "react";
import { assets } from "../Utils/assets/frontend_assets/assets";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full mt-14">
      <h1 className="mb-10 text-2xl font-semibold">About Us───</h1>
      <div className="flex justify-center items-center w-[80%]">
        <div className="w-[50%]">
          <img src={assets.about_img} alt="about" className="w-[90%]" />
        </div>
        <div className="w-[50%]">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes. Since our inception, we've worked tirelessly
            to curate a diverse selection of high-quality products that cater to
            every taste and preference. From fashion and beauty to electronics
            and home essentials, we offer an extensive collection sourced from
            trusted brands and suppliers.
          </p>
          <h1 className="mt-4 font-semibold mb-4">Our Misson</h1>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
