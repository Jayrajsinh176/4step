import React, { useState, useEffect } from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import HorizontalScroll from "./horizontalscroll";
import MemberModal from "../components/membermodal";
import axios from "axios";


function HomeViral() {
    const [showModal, setShowModal] = useState(false);
    const [viralProducts, setViralProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    
    const handleWhishlist = () => {
        alert("Item added to wishlist");
    }


    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/viral-products")
            .then(res => setViralProducts(res.data))
            .catch(err => console.error(err));
    }, []);

    const makeupCards = [
        {
            text: "Up to 50% Off",
            images: "./images/best1.jpg",
        },
        {
            text: "Min 15% Off",
            images: "./images/best2.jpg",
        },
        {
            text: "Up to 40% Off + Gift",
            images: "./images/best3.jpg",
        },
        {
            text: "Gift over ₹2500",
            images: "./images/best4.jpg",
        },
        {
            text: "Bath & Body",
            images: "./images/best1.jpg",
        },
    ];

    const trendingCategories = [
        { name: "K-Beauty", image: "./images/trending1.jpg" },
        { name: "Gen-Z", image: "./images/trending2.jpg" },
        { name: "Wedding", image: "./images/trending3.jpg" },
        { name: "Homegrown", image: "./images/trending4.jpg" },
        { name: "Dream 101", image: "./images/trending1.jpg" },
        { name: "Festive Faves", image: "./images/trending5.jpg" },
    ];

    const bestProducts = [
        { name: "K-Beauty", image: "./images/ourbest4.jpg" },
        { name: "Gen-Z", image: "./images/ourbest1.png" },
        { name: "Wedding", image: "./images/ourbest2.png" },
        { name: "Homegrown", image: "./images/ourbest3.jpg" },
        { name: "Dream 101", image: "./images/ourbest4.jpg" },
        { name: "Festive Faves", image: "./images/trending5.jpg" },
    ];

    const hairCards = [
        { text: "Up to 50% Off", image: "./images/best1.jpg" },
        { text: "Buy 2 Get 5% Off", image: "./images/hair2.jpg" },
        { text: "Gift on 2 Buys", image: "./images/hair3.jpg" },
        { text: "Min 20% Off", image: "./images/hair4.jpg" },
        { text: "Bath & Body", image: "./images/best1.jpg" },
    ];


    return (
        <div className="min-h-screen bg-white px-4 py-4">
            <div className="w-full mx-auto">
                {/*         Viral Section           */}
                <div className="section-wrapper px-6">
                    <h2 className="text-2xl font-semibold  mb-6">
                        Viral Hits You'll Love
                    </h2>
                    <div className=" relative">
                        <HorizontalScroll>
                            <div className="overflow-x-hidden overflow-y-hidden scroll-smooth">
                                <div className="grid grid-flow-col auto-cols-[240px] ">
                                    {viralProducts.map((item, index) => (
                                        <div key={index}
                                            className="flex flex-col group cursor-pointer"
                                        >
                                            <div className="relative rounded overflow-hidden">
                                                <img
                                                    src={item.image}
                                                    alt="Product"
                                                    className="w-80 h-40 object-contain transition-transform duration-300 group-hover:scale-105"
                                                />
                                                <FaHeart className="absolute top-1 right-1/5 text-gray-300 text-sm cursor-pointer" onClick={handleWhishlist} />
                                            </div>

                                            <div className="mt-3">
                                                <div className="flex items-center gap-2 mb-1 text-sm">
                                                    <p className="font-medium text-gray-400">
                                                        {item.brand}
                                                    </p>
                                                </div>
                                                <p className="text-sm text-gray-700 mb-2 font-semibold leading-tight line-clamp-2">
                                                    {item.name}
                                                </p>
                                                <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                                                    ₹{item.price}
                                                </div>
                                            </div>

                                            <button
                                                className="mt-3 bg-black text-white text-sm py-2 rounded
                                                    opacity-0 translate-y-2
                                                    group-hover:opacity-100 group-hover:translate-y-0
                                                    transition-all duration-300"
                                                onClick={() => {setShowModal(true); setSelectedProduct(item);}}
    
                                            >
                                                Add to Bag
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </HorizontalScroll>
                    </div>
                </div>
                {/*              Best In Makeup      */}
                <div className="px-6 mt-10">
                    <h2 className="text-2xl font-semibold mb-6">
                        Best In Makeup
                    </h2>

                    <div className="relative">
                        <HorizontalScroll>
                            <div className="overflow-x-hidden scroll-smooth">
                                <div className="grid grid-flow-col auto-cols-[280px] gap-4">
                                    {makeupCards.map((item, index) => (
                                        <div key={index} className="flex flex-col">
                                            <img
                                                src={item.images}
                                                alt="Makeup"
                                                className="w-70 h-50 object-cover rounded-lg transition-transform hover:scale-105"
                                            />
                                            <p className="mt-3 text-sm font-medium text-gray-800">
                                                {item.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </HorizontalScroll>
                    </div>
                </div>

                {/*         Trending Categories       */}
                <div className="px-6 mt-10">
                    <h2 className="text-2xl font-semibold tracking-wide  mb-6">
                        Trending Categories
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                        {trendingCategories.map((item, index) => (
                            <div key={index} className="flex flex-col">
                                <img
                                    src={item.image}
                                    alt="Makeup"
                                    className="w-70 h-50 object-cover rounded-lg transition-transform hover:scale-105"
                                />
                                <p className="mt-3 text-sm font-medium text-gray-800">
                                    {item.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/*         Our Best Product       */}
                <div className="px-6 mt-10 bg-[#DCC0B6]">
                    <h2 className="text-3xl font-semibold  mb-6 py-5">
                        Our Best Product
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                        {bestProducts.map((item, index) => (
                            <div key={index} className="transition-transform hover:scale-105">
                                <img
                                    src={item.image}
                                    alt="Makeup"
                                    className="w-50 h-50 rounded-t-lg "
                                />
                                <p className="text-sm font-medium bg-gray-300 rounded-b-lg w-47.4 px-2 py-2 mb-10">
                                    {item.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                {/*         Hair Section       */}
                <div className="px-6 mt-6">
                    <h2 className="text-2xl font-semibold  mb-6">
                        Best In Hair & Tools
                    </h2>

                    <div className=" relative">
                        <HorizontalScroll>

                            <div className="flex gap-4 overflow-x-hidden scroll-smooth">
                                {hairCards.map((item, index) => (
                                    <div key={index} className="min-w-70 flex flex-col">
                                        <div className="text-center">
                                            <img
                                                src={item.image}
                                                className="w-70 h-50 object-cover rounded-lg mx-auto transition-transform hover:scale-105"
                                            />
                                        </div>
                                        <p className="mt-3 text-sm font-medium text-gray-800">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </HorizontalScroll>
                    </div>
                </div>
            </div>
            {/* Member Modal */}
            <MemberModal
    isOpen={showModal}
    onClose={() => setShowModal(false)}
    selectedProduct={selectedProduct}
/>
        </div>
    );
}

export default HomeViral;
