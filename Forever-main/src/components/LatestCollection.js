import React, { useEffect, useState } from 'react';
import { products } from '../Utils/assets/frontend_assets/assets';
import LatestCard from './LatestCard';

const LatestCollection = () => {
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(20, 30));
    }, []);

    return (
        <div className="mt-10 w-full">
            <div className="flex flex-col justify-center items-center gap-3">
                <h1 className="text-4xl">Latest Collection───</h1>
                <p>Discover the trendiest styles with our latest collection, curated just for you!</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
                {latestProducts.map((card) => (
                    <div key={card.id}>
                        <LatestCard item={card} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestCollection;
