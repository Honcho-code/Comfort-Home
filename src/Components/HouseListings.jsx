import React, { useRef } from "react";
import { homeListing } from "../assets/asset";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faArrowLeft, faLocation } from "@fortawesome/free-solid-svg-icons";
import {
  faArrowRightLong
} from "@fortawesome/free-solid-svg-icons";


const HouseListings = () => {
  const scrollRef = useRef(null)
  
  const scroll = (direction) => {
    const container = scrollRef.current;
  
    if (container && container.firstChild) {
      const cardWidth = container.firstChild.offsetWidth + 16; // +gap (space-x-4)
  
      if (direction === "right") {
        // If we're near the end, scroll to start
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - cardWidth) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
      } else {
        // If we're near the start, scroll to end
        if (container.scrollLeft <= 0) {
          container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
        } else {
          container.scrollBy({ left: -cardWidth, behavior: "smooth" });
        }
      }
    }
  };
  
  return (
    <div className="mx-4 md:mx-6 lg:mx-28 my-6 md:my-14 lg:my-20 scroll-smooth" id="listings">
      {/* Mobile job Listing */}
      <div className="relative md:hidden">
        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 scrollbar-hide scroll-smooth pb-2"
        >
          {homeListing.map((listing, key) => (
            <div
              key={key}
              className="w-full flex-shrink-0 bg-white shadow-sm"
            >
              <img
                src={listing.image}
                alt="listing"
                className="w-full  object-cover rounded"
              />
              <div className="mx-3 mb-2">

                <div className="flex justify-between items-center mt-2">
                  <h2 className="text-lg font-medium">{listing.name}</h2>
                  <p className="text-sm font-normal">#{listing.price}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FontAwesomeIcon icon={faLocation} />
                  <p className="text-gray-700 text-xs">{listing.location}</p>
                </div>
                <div className="flex items-center gap-2 text-sm my-3">
                  <FontAwesomeIcon
                    icon={faArrowRightLong}
                    className="p-2 text-xs bg-blue-900 text-white rounded"
                  />
                  <p className="underline text-blue-900 cursor-pointer">
                    Explore our properties
                  </p>
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional arrow buttons for mobile scroll (show if needed) */}
        <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 transform -translate-y-1/2  shadow p-2 rounded-full backdrop-blur-xl text-white">
          <FontAwesomeIcon icon={faAngleLeft}/>
        </button>
        <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 transform -translate-y-1/2 shadow p-2 rounded-full backdrop-blur-xl text-white">
        <FontAwesomeIcon icon={faAngleRight}/>
        </button>
      </div>



      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-6">
        {homeListing.map((listing, key) => (
          <div key={key}>
            <img src={listing.image} alt="listing image" />
            <div className="flex justify-between items-center mt-2">
              <h2 className="text-lg font-normal">{listing.name}</h2>
              <p className="sm">#{listing.price}</p>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <FontAwesomeIcon icon={faLocation} />
              <p className="text-gray-700 text-xs">{listing.location}</p>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faArrowRightLong}
                className="p-1.5 text-xs bg-blue-900 text-white rounded"
              />
              <p className="underline text-blue-900 cursor-pointer">
                Explore our properties
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseListings;
