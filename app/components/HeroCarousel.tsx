import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

interface HeroCarouselProps {
  images: string[];
}

export default function HeroCarousel({ images }: HeroCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    // Auto-play
    const autoplay = setInterval(() => emblaApi.scrollNext(), 5000);

    return () => {
      clearInterval(autoplay);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative min-h-screen flex items-center text-white">
      {/* Background Images Carousel */}
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

      {/* Static Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        <div className="w-full lg:w-2/3 text-center lg:text-left lg:ml-20">
          <h1 className="text-4xl font-bold mb-4 leading-tight text-white font-serif">
            Conduisez l'exception,
            <br />
            Ressentez la <span className="text-white">passion...</span>
            <br />
            <span className="text-[#FFD700]">Vivez AutoCar'z</span>
          </h1>

          <p className="text-lg mb-6 text-gray-200 max-w-lg mx-auto lg:mx-0">
            Découvrez une sélection exclusive de véhicules luxueux qui marient
            élégance et performance, pour ceux qui exigent l'excellence.
          </p>

          <button className="px-6 py-3 bg-[#FFD700] text-black rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
            Découvrir la boutique →
          </button>
        </div>
      </div>

      {/* Simple Navigation */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full text-white text-xl"
      >
        ←
      </button>

      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full text-white text-xl"
      >
        →
      </button>

      {/* Dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex space-x-2 opacity-12">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full ${
              index === selectedIndex ? "bg-[#FFD700]" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Statistics */}
      <div className="absolute bottom-4 left-0 right-0 z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-[#FFD700] mb-1">
                100+
              </span>
              <span className="text-xs text-gray-400 uppercase">
                Véhicules Premium
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-[#FFD700] mb-1">
                15+
              </span>
              <span className="text-xs text-gray-400 uppercase">
                Années d'Expérience
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-[#FFD700] mb-1">
                500+
              </span>
              <span className="text-xs text-gray-400 uppercase">
                Clients Satisfaits
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
