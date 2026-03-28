import React, { useState, useEffect, useRef } from "react";
import { GoVerified } from "react-icons/go";
import { FaShippingFast, FaHeart, FaStar } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import { GrUserExpert } from "react-icons/gr";
import MemberModal from "../components/membermodal";


function HomeTopShelf() {

    const[showModal,setShowModal]=useState(false);

    const fourStepRef = useRef(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    const scroll = (ref, direction) => {
        const container = ref.current;
        if (!container) return;

        const scrollAmount = 300;
        container.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    const handleScroll = () => {
        const container = fourStepRef.current;
        if (!container) return;

        const isAtStart = container.scrollLeft <= 0;
        const isAtEnd =
            container.scrollLeft + container.clientWidth >=
            container.scrollWidth - 5;

        setShowLeft(!isAtStart);
        setShowRight(!isAtEnd);
    };

    useEffect(() => {
        handleScroll();
    }, []);

    const handlesubmit = () => alert("Redirecting to 4step product Page");
    // const handleexplore = () => alert("Redirecting to Top Shelf Page");
    // const handlechat = () => alert("Redirecting to Chat Page");

    const products = [
        {
            image: "./images/4step1.jpg",
            brand: "WishCare",
            title: "Hair Growth Serum Concentrate",
            price: "₹679",
            oldPrice: "₹999",
            discount: "32% Off",
        },
        {
            image: "./images/4step2.jpg",
            brand: "Minimalist",
            title: "Vitamin C Serum 10%",
            price: "₹599",
            oldPrice: "₹699",
            discount: "14% Off",
        },
        {
            image: "./images/4step3.png",
            brand: "COSRX",
            title: "Snail 96 Mucin Essence",
            price: "₹1160",
            oldPrice: "₹1499",
            discount: "20% Off",
        },
        {
            image: "./images/4step4.jpg",
            brand: "Dot & Key",
            title: "Hydrating Moisturizer",
            price: "₹495",
            oldPrice: "₹650",
            discount: "24% Off",
        },
        {
            image: "./images/4step1.jpg",
            brand: "Inde Wild",
            title: "Champi Hair Oil",
            price: "₹717",
            oldPrice: "₹845",
            discount: "15% Off",
        },
        {
            image: "./images/4step2.jpg",
            brand: "Mamaearth",
            title: "Onion Hair Oil",
            price: "₹399",
            oldPrice: "₹499",
            discount: "20% Off",
        },
        
    ];


    return (
        <div className="min-h-screen bg-white px-3 sm:px-4 md:px-6 py-4">
            <div className="max-w-7xl mx-auto">

{/*         TOP SHELF           */}
                <div className="px-0 sm:px-3 lg:px-6 relative">
                    <div className="relative rounded-lg overflow-hidden">
                        <img
                            src="./images/topshelf.jpg"
                            alt="Top Shelf"
                            className="w-full h-32 sm:h-50 lg:h-full object-cover"
                        />
                    </div>
                </div>

{/*          ONLY ON 4STEP       */}
                <div className="px-0 sm:px-3 lg:px-6">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 mt-6 sm:mt-8">
                        Only on 4Step
                        <button
                            onClick={handlesubmit}
                            className="text-xs sm:text-sm font-semibold float-end hover:text-blue-600"
                        >
                            View All &gt;&gt;&gt;
                        </button>
                    </h2>

                    <div className="relative">
                        {showLeft && (
                            <button
                                onClick={() => scroll(fourStepRef, "left")}
                                className="hidden sm:flex absolute -left-2 top-1/2 -translate-y-1/2 z-10 
                             bg-white shadow-md rounded-full w-10 sm:w-13 h-10 sm:h-13 
                            flex items-center justify-center text-2xl sm:text-3xl"
                            >
                                ‹
                            </button>
                        )}
                        <div
                            ref={fourStepRef}
                            onScroll={handleScroll}
                            className="overflow-x-hidden overflow-y-hidden scroll-smooth"
                        >
                            <div className="grid grid-flow-col auto-cols-[150px] sm:auto-cols-[200px] lg:auto-cols-[240px] gap-2 sm:gap-4">
                                {products.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col group cursor-pointer"
                                    >
                                        <div className="relative rounded overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-32 sm:h-40 lg:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                            <FaHeart className="absolute top-2 sm:top-3 right-2 sm:right-4 text-gray-300 text-xs sm:text-sm cursor-pointer" />
                                        </div>

                                        <div className="mt-2 sm:mt-3">
                                            <div className="flex items-center gap-1 sm:gap-2 mb-1 text-xs sm:text-sm">
                                                <p className="font-medium text-gray-400 text-xs">
                                                    {item.brand}
                                                </p>
                                                <FaStar className="text-green-600 text-xs" />
                                                <span className="font-medium text-gray-700 text-xs hidden sm:inline">
                                                    4.4
                                                </span>
                                                <span className="text-gray-500 text-xs hidden sm:inline">
                                                    | 2.8K
                                                </span>
                                            </div>

                                            <p className="text-xs sm:text-sm text-gray-700 mb-1 sm:mb-2 font-semibold line-clamp-2">
                                                {item.title}
                                            </p>

                                            <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold text-gray-800 flex-wrap">
                                                <span>{item.price}</span>
                                                <span className="text-xs text-gray-400 line-through font-normal">
                                                    {item.oldPrice}
                                                </span>
                                                <span className="text-xs text-green-600 font-medium">
                                                    ({item.discount})
                                                </span>
                                            </div>
                                        </div>

                                        <button
                                            className="mt-2 sm:mt-3 bg-black text-white text-xs sm:text-sm py-2 rounded
                                            opacity-0 translate-y-2
                                            group-hover:opacity-100 group-hover:translate-y-0
                                            transition-all duration-300"
                                            onClick={()=> setShowModal(true)}
                                        >
                                            Add to Bag
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {showRight && (
                            <button
                                onClick={() => scroll(fourStepRef, "right")}
                                className="hidden sm:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 
              bg-white shadow-md rounded-full w-10 sm:w-13 h-10 sm:h-13 
              flex items-center justify-center text-2xl sm:text-3xl"
                            >
                                ›
                            </button>
                        )}
                    </div>
                </div>
{/*         CHAT SECTION         */}
                <div className="px-0 sm:px-3 lg:px-6 relative mt-8 sm:mt-12 lg:mt-20">
                    <div className="relative rounded-lg overflow-hidden">
                        <img
                            src="./images/chatnow.jpg"
                            alt="Chat"
                            className="w-full h-32 sm:h-50 lg:h-full object-cover"
                        />
                    </div>
                </div>

{/*         AUTHENTICATION SECTION         */}
                <div className="px-3 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-20 bg-gray-100 rounded-lg">
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-3 sm:px-6 py-6 sm:py-10">

                        {/* 100% Authentic */}
                        <div className="flex flex-col">
                            <GoVerified className="text-gray-700 text-lg sm:text-2xl mb-3 sm:mb-4" />
                            <p className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">
                                100% Authentic
                            </p>
                            <p className="font-semibold text-xs sm:text-sm text-gray-500">
                                All our products are directly sourced from brands
                            </p>
                        </div>

                        {/* Free Shipping */}
                        <div className="flex flex-col">
                            <FaShippingFast className="text-gray-700 text-lg sm:text-2xl mb-3 sm:mb-4" />
                            <p className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">
                                Free Shipping
                            </p>
                            <p className="font-semibold text-xs sm:text-sm text-gray-500">
                                On all orders above $299
                            </p>
                        </div>

                        {/* Certified Advisors */}
                        <div className="flex flex-col">
                            <GrUserExpert className="text-gray-700 text-lg sm:text-2xl mb-3 sm:mb-4" />
                            <p className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">
                                Certified Beauty Advisors
                            </p>
                            <p className="font-semibold text-xs sm:text-sm text-gray-500">
                                Get expert consultations
                            </p>
                        </div>

                        {/* Easy Returns */}
                        <div className="flex flex-col">
                            <TbTruckReturn className="text-gray-700 text-lg sm:text-2xl mb-3 sm:mb-4" />
                            <p className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">
                                Easy Returns
                            </p>
                            <p className="font-semibold text-xs sm:text-sm text-gray-500">
                                Hassle-free pick-ups and refunds
                            </p>
                        </div>

                    </div>
                </div>
            </div>
{/* Membar Modal             */}
            <MemberModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
            />
        </div>
    );
}

export default HomeTopShelf;
