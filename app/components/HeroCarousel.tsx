import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

interface HeroCarouselProps {
  images: string[];
}

export default function HeroCarousel({ images }: HeroCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);

    // Auto-play setup
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      clearInterval(autoplay);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative min-h-screen flex items-center text-white pt-12">
      {/* Background Images Carousel - Only images change */}
      <div className="absolute inset-0 z-0">
        <div className="embla overflow-hidden w-full h-full" ref={emblaRef}>
          <div className="embla__container flex h-full">
            {images.map((image, index) => (
              <div
                key={index}
                className="embla__slide flex-none w-full relative"
              >
                <Image
                  src={image}
                  alt={`AutoCar'z luxury vehicle ${index + 1}`}
                  fill
                  className="object-cover brightness-50"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Static Content Overlay - Never moves */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex items-center">
        <div className="w-full lg:w-2/3 text-center lg:text-left lg:ml-20">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 leading-tight text-[#F8F8F5] font-serif">
            Conduisez l'exception,
            <br />
            Ressentez la <span className="text-[#F8F8F5]">passion...</span>
            <br />
            <span className="text-[#FFD700] text-lg md:text-2xl lg:text-3xl xl:text-4xl">
              Vivez AutoCar'z
            </span>
          </h1>

          <p className="text-xs md:text-sm lg:text-base mb-6 text-[#F8F8F5] max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Découvrez une sélection exclusive de véhicules luxueux qui marient
            élégance et performance, pour ceux qui exigent l'excellence.
          </p>

          <button className="px-6 py-3 bg-gradient-to-r from-[#FFD700] to-[#E6B800] text-black rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-sm tracking-wide">
            Découvrir la boutique →
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-all duration-300"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-all duration-300"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-[#FFD700] scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Statistics Bar - Always visible and static */}
      <div className="absolute bottom-4 left-0 right-0 z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-1">
                100+
              </span>
              <span className="text-xs text-[#71797E] uppercase tracking-wide">
                Véhicules Premium
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-1">
                15+
              </span>
              <span className="text-xs text-[#71797E] uppercase tracking-wide">
                Années d'Expérience
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-1">
                500+
              </span>
              <span className="text-xs text-[#71797E] uppercase tracking-wide">
                Clients Satisfaits
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
