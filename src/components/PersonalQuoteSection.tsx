import React from 'react';
import { GoldStar } from './ScrapbookDecorations';

export function PersonalQuoteSection() {
  return (
    <section aria-label="Personal Quote" className="flex justify-center py-4">
      <div className="relative bg-ivory-warm max-w-3xl w-full p-8 sm:p-12 paper-shadow border border-choc-dark/15 text-center transform -rotate-1 hover:rotate-0 transition-transform duration-200">
        <GoldStar className="w-7 h-7 mx-auto mb-4" />
        <blockquote className="font-serif italic text-2xl sm:text-3xl text-choc-dark leading-relaxed text-balance">
          “Teknologi adalah kanvasnya, dan kreativitas adalah warna untuk
          menghidupkannya.”
        </blockquote>
        <p className="font-hand text-2xl text-choc-mid mt-4">
          — Anggun Adha Hanifa
        </p>
      </div>
    </section>
  );
}
