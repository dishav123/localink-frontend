import { Link } from "react-router";
import { specialityData } from "../../assets/assets";
import { useRef, useState, useEffect } from "react";

function SpecialityMenu() {
  const scrollRef = useRef(null);
  const itemRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  // Calculate pages dynamically
  useEffect(() => {
    const calculatePages = () => {
      if (!scrollRef.current || !itemRef.current) return;

      const containerWidth = scrollRef.current.offsetWidth;
      const itemWidth = itemRef.current.offsetWidth + 24; // gap-6 = 24px

      const itemsPerView = Math.floor(containerWidth / itemWidth);
      const pages = Math.ceil(specialityData.length / itemsPerView);

      setTotalPages(pages);
    };

    calculatePages();
    window.addEventListener("resize", calculatePages);

    return () => window.removeEventListener("resize", calculatePages);
  }, []);

  // Track active page
  const handleScroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const containerWidth = scrollRef.current.offsetWidth;

    const index = Math.round(scrollLeft / containerWidth);
    setActiveIndex(index);
  };

  // Scroll by page
  const scrollToIndex = (index) => {
    const containerWidth = scrollRef.current.offsetWidth;

    scrollRef.current.scrollTo({
      left: index * containerWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col items-center gap-4 py-16 text-gray-800">
      <h1 className="text-3xl font-medium">Find by Speciality</h1>

      <p className="sm:w-1/3 text-center text-sm">
        Pick a speciality to see trusted experts who are ready to help you with
        fast, reliable, and location-based service.
      </p>

      {/* Wrapper for gradient hint */}
      <div className="relative w-full">
        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-white to-transparent z-10 sm:hidden" />

        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-white to-transparent z-10 sm:hidden" />

        {/* Scroll container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex items-center gap-6 pt-5 w-full overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {specialityData.map((items, index) => (
            <Link
              key={index}
              ref={index === 0 ? itemRef : null}
              to={`/serviceproviders/${items.speciality}`}
              className="flex flex-col items-center text-xs cursor-pointer shrink-0 snap-start hover:translate-y-[-10px] transition-all duration-300"
            >
              <img
                className="w-20 sm:w-24 mb-1"
                src={items.image}
                alt={items.speciality}
              />
              <p>{items.speciality}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex gap-2 mt-4 sm:hidden">
        {[...Array(totalPages)].map((_, index) => (
          <div
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${
              activeIndex === index
                ? "bg-gray-800 scale-125"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default SpecialityMenu;
