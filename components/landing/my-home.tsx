import { useEffect, useState } from "react";

const MyHome = () => {
  const [isIframeHidden, setIsIframeHidden] = useState(true);

  useEffect(() => {
    let lastScrollPosition = window.scrollY;

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      const scrollDifference = Math.abs(lastScrollPosition - currentScrollPosition);

      if (scrollDifference > 500) {
        setIsIframeHidden(true);
        lastScrollPosition = currentScrollPosition;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center">
            <h1 className="text-7xl md:text-8xl font-extrabold leading-tight mb-4" data-aos="zoom-y-out">
              Wang Zhao's Blog
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                Always keep studying.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyHome;