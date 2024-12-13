import React from "react";
import { products } from "../Utils/assets/frontend_assets/assets";
import LatestCard from "./LatestCard";

const BestSeller = () => {
  console.log(products);

  const bestSellers1 = products.filter((item) => item.bestseller === true); 
  const bestSellers = bestSellers1.slice(0,5);
  console.log(bestSellers);

  return (
    <div className="mt-10 w-full">
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-4xl">BestSeller Collection───</h1>
        <p>
          Discover the trendiest styles with our latest collection, curated just
          for you!
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {bestSellers.map((card,index) => (
          <div key={index}>
            <LatestCard item={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
