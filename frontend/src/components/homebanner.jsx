import React, { useState, useEffect, useRef } from "react";

function HomeBanner() {
  const [current, setCurrent] = useState(0);

  
  const images = [
    "./images/Banner.jpg",
    "./images/Banner2.png",
    "./images/Banner.jpg",
    "./images/Banner2.png",
    "./images/Banner.jpg",
  ];

 
  const scrollItems = [
  {
    title: "Beauty Care",
    image: "./images/ourbest4.jpg",
  },
  {
    title: "Skincare",
    image: "./images/ourbest4.jpg",
  },
  {
    title: "Hair",
    image: "./images/ourbest4.jpg",
  },
  {
    title: "Fragrance",
    image: "./images/ourbest4.jpg",
  },
  {
    title: "Bath & Body",
    image: "./images/ourbest4.jpg",
  },
  {
    title: "Men",
    image: "./images/ourbest4.jpg",
  },
  {
    title: "Child Care",
    image: "./images/ourbest4.jpg",
  },
  {
    title: "Home Care",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  },
];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const MainRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const scroll = (ref, direction) => {
    const container = ref.current;
    const scrollAmount = 300;

    if (!container) return;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const container = MainRef.current;
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

        <div className="bg-blue-100 rounded-t-lg text-center text-xs sm:text-sm py-2 sm:py-3 px-2">
          Enjoy up to ₹2000 off. Use code:{" "}
          <span className="font-semibold">BIGSALE26</span>
        </div>

        <div className="relative rounded-b-lg overflow-hidden">
          <img
            src={images[current]}
            alt="Sale"
            className="w-full h-40 sm:h-80 lg:h-120 object-cover transition-all duration-700"
          />
        </div>

        <div className="mt-6 sm:mt-10 relative">

          {showLeft && (
            <button
              onClick={() => scroll(MainRef, "left")}
              className=" sm:flex absolute -left-2 top-1/2 -translate-y-1/2 z-10 
                         bg-white shadow-md rounded-full w-10 h-10 
                         flex items-center justify-center text-3xl"
            >
              ‹
            </button>
          )}

          <div
            ref={MainRef}
            onScroll={handleScroll}
            className="flex gap-2 sm:gap-3 overflow-x-hidden scroll-smooth px-0 sm:px-6"
          >
            {scrollItems.map((item, index) => (
              <div key={index} className="min-w-28 sm:min-w-40 shrink-0">
                <div className="flex justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-28 h-28 sm:w-40 sm:h-40 object-cover rounded transition-transform hover:scale-105"
                  />
                </div>
                <a
                  href="#"
                  className="mt-2 sm:mt-3 block text-xs sm:text-sm font-medium text-gray-800 text-center hover:text-blue-600"
                >
                  {item.title}
                </a>
              </div>
            ))}
          </div>

          {showRight && (
            <button
              onClick={() => scroll(MainRef, "right")}
              className=" sm:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 
                         bg-white shadow-md rounded-full w-10 h-10 
                         flex items-center justify-center text-3xl"
            >
              ›
            </button>
          )}

        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
