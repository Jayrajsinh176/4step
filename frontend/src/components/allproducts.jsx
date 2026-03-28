import React, { useState, useEffect } from 'react';
import { FaStar, FaHeart } from "react-icons/fa";
import MemberModal from "../components/membermodal";

function AllProducts() {

    const [showModal, setShowModal] = useState(false);
    const [current, setCurrent] = useState(0);
    const images = [
        "./images/Banner2.png",
        "https://images.unsplash.com/photo-1520975916090-3105956dac38",
        "./images/Banner2.png",
        "https://images.unsplash.com/photo-1520975916090-3105956dac38",
        "./images/Banner2.png",
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000); // 3 seconds

        return () => clearInterval(timer);
    }, [images.length]);

    const viralProducts = [
        {
            brand: "WishCare",
            title: "Wishcare Hair Growth Serum Concentrate. In-Vivo",
            price: "₹679",
            oldPrice: "₹999",
            discount: "32% Off",
            image: "./images/vproduct1.jpg",
        },
        {
            brand: "WishCare",
            title: "Beauty of Joseon Relief Sun Aqua-fresh",
            price: "₹1275",
            oldPrice: "₹1500",
            discount: "15% Off",
            image: "./images/vproduct2.jpg",
        },
        {
            brand: "Beauty of Joseon",
            title: "Relief Sun Aqua-fresh Rice + B5 Korean",
            price: "₹1275",
            oldPrice: "₹1500",
            discount: "15% Off",
            image: "./images/vproduct3.jpg",
        },
        {
            brand: "Beauty of Joseon",
            title: "Relief Sun Aqua-fresh Rice + B5 Korean",
            price: "₹1275",
            oldPrice: "₹1500",
            discount: "15% Off",
            image: "./images/vproduct4.jpg",
        },
        {
            brand: "WishCare",
            title: "Wishcare Hair Growth Serum Concentrate. In-Vivo",
            price: "₹679",
            oldPrice: "₹999",
            discount: "32% Off",
            image: "./images/vproduct1.jpg",
        },
        {
            brand: "WishCare",
            title: "Beauty of Joseon Relief Sun Aqua-fresh",
            price: "₹1275",
            oldPrice: "₹1500",
            discount: "15% Off",
            image: "./images/vproduct2.jpg",
        },
        {
            brand: "Beauty of Joseon",
            title: "Relief Sun Aqua-fresh Rice + B5 Korean",
            price: "₹1275",
            oldPrice: "₹1500",
            discount: "15% Off",
            image: "./images/vproduct3.jpg",
        },
    ];

    return (
        <div className="min-h-screen bg-white px-3 sm:px-4 md:px-6 py-4">
            <div className="max-w-7xl mx-auto">
                <nav className="flex gap-3 sm:gap-6 lg:gap-9 text-gray-700 mb-4 text-xs sm:text-sm font-medium justify-start overflow-x-auto pb-2">
                    <a href="#" className="cursor-pointer hover:text-blue-600 whitespace-nowrap">What's New</a>
                    <a href="#" className="cursor-pointer hover:text-blue-600 whitespace-nowrap">Health Care</a>
                    <a href="#" className="cursor-pointer hover:text-blue-600 whitespace-nowrap">Skin Care</a>
                    <a href="#" className="cursor-pointer hover:text-blue-600 whitespace-nowrap">Personal Care</a>
                    <a href="#" className="cursor-pointer hover:text-blue-600 whitespace-nowrap">Beauty Care</a>
                    <a href="#" className="cursor-pointer hover:text-blue-600 whitespace-nowrap">Home Care</a>
                    <a href="#" className="cursor-pointer hover:text-blue-600 whitespace-nowrap">Oral Care</a>
                    <a href="#" className="cursor-pointer hover:text-blue-600 whitespace-nowrap">Child Care</a>
                    <a href="#" className="cursor-pointer hover:text-blue-600 whitespace-nowrap">Agri Care</a>
                    <a href="#" className="cursor-pointer hover:text-blue-600 whitespace-nowrap">Life Care</a>
                    <a href="#" className="cursor-pointer hover:text-blue-600 whitespace-nowrap">Minis</a>
                    <a href="#" className="cursor-pointer hover:text-blue-600 whitespace-nowrap">Homegrown</a>
                </nav>

                <div className="bg-blue-100 rounded-t-lg text-center text-xs sm:text-sm py-3 px-3">
                    Enjoy up to ₹2000 off. Use code:{" "}
                    <span className="font-semibold">BIGSALE26</span>
                </div>

                <div>
                    <div className="relative rounded-b-lg overflow-hidden">
                        <img
                            src={images[current]}
                            alt="Sale"
                            className="w-full h-48 sm:h-80 lg:h-120 object-cover transition-all duration-700"
                        />
                    </div>
                </div>
                <div className="px-0 sm:px-3 lg:px-6 mt-4 sm:mt-6 lg:mt-8">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">
                        Viral Hits You'll Love
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-8">
                        {viralProducts.map((product, index) => (
                            <div
                                key={index}
                                className="flex flex-col group cursor-pointer"
                            >
                                <div className="relative rounded overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-32 sm:h-40 lg:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <FaHeart className="absolute top-2 sm:top-3 right-2 sm:right-3 text-gray-300 text-xs sm:text-sm cursor-pointer" />
                                </div>

                                <div className="mt-2 sm:mt-3">
                                    <div className="flex items-center gap-1 sm:gap-2 mb-1 text-xs sm:text-sm">
                                        <p className="font-medium text-gray-400 text-xs">
                                            {product.brand}
                                        </p>
                                        <FaStar className="text-green-600 text-xs" />
                                        <span className="font-medium text-gray-700 text-xs">4.4</span>
                                        <span className="text-gray-500 text-xs hidden sm:inline">| 2.8K</span>
                                    </div>

                                    <p className="text-xs sm:text-sm text-gray-700 mb-2 font-semibold leading-tight line-clamp-2">
                                        {product.title}
                                    </p>

                                    <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold text-gray-800 flex-wrap">
                                        <span>{product.price}</span>
                                        <span className="text-xs text-gray-400 line-through font-normal">
                                            {product.oldPrice}
                                        </span>
                                        <span className="text-xs text-green-600 font-medium">
                                            ({product.discount})
                                        </span>
                                    </div>
                                </div>

                                <button
                                    className="mt-2 sm:mt-3 bg-black text-white text-xs sm:text-sm py-2 rounded
                                            opacity-0 translate-y-2
                                            group-hover:opacity-100 group-hover:translate-y-0
                                            transition-all duration-300 w-full"
                                    onClick={() => setShowModal(true)}
                                >
                                    Add to Bag
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
{/* Member Modal */}                
                <MemberModal
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                />

            </div>
        </div>

    )
}


export default AllProducts;