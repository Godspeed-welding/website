"use client";

import Image from "next/image";
import { useState } from "react";
import { GALLERY_IMAGES } from "@/lib/gallery";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(24);

  const shown = GALLERY_IMAGES.slice(0, visibleCount);

  return (
    <section className="relative bg-gunmetal py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 [column-fill:_balance]">
          {shown.map((file, i) => (
            <button
              key={file}
              onClick={() => setActive(i)}
              className="block w-full mb-3 overflow-hidden break-inside-avoid border border-transparent hover:border-ember-bright/60 transition-colors"
            >
              <Image
                src={`/images/${file}`}
                alt="Godspeed Welding job site photo"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />
            </button>
          ))}
        </div>

        {visibleCount < GALLERY_IMAGES.length && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setVisibleCount((c) => c + 16)}
              className="font-display uppercase tracking-wider text-sm border border-steel-silver-dim/60 hover:border-ember-bright hover:text-white text-steel-silver px-7 py-3 rounded-[1px] transition-colors"
            >
              Show More
            </button>
          </div>
        )}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] bg-charcoal/95 flex items-center justify-center p-6"
          onClick={() => setActive(null)}
        >
          <button
            aria-label="Close"
            className="absolute top-6 right-6 text-steel-silver hover:text-white text-3xl leading-none"
            onClick={() => setActive(null)}
          >
            &times;
          </button>
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/images/${shown[active]}`}
              alt="Godspeed Welding job site photo, enlarged"
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
