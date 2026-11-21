import React, { useState } from 'react';
import { APPROACH_TRAITS, ApproachTrait } from '../data/portfolioData';
import { GoldStar, MaskingTape } from './ScrapbookDecorations';
import { EditorialModal } from './EditorialModal';

export function WhyExploreSection() {
  const [selectedTrait, setSelectedTrait] = useState<ApproachTrait | null>(null);

  return (
    <>
      <section
        aria-label="Why Explore My Portfolio"
        className="bg-grid-ivory rounded-sm p-6 sm:p-10 md:p-14 paper-shadow"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10 border-b border-choc-dark/15">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-choc-dark leading-none text-balance">
            Why Explore
            <br />
            My Portfolio?
          </h2>
          <div className="md:text-right">
            <p className="text-xs tracking-[0.2em] uppercase font-semibold text-choc-dark">
              My Creative Approach
            </p>
            <p className="text-xs tracking-[0.15em] uppercase text-choc-mid mt-1">
              Curiosity · Creativity · Technology
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-10">
          {APPROACH_TRAITS.map((trait) => (
            <button
              key={trait.id}
              type="button"
              onClick={() => setSelectedTrait(trait)}
              className={`relative bg-ivory-warm p-6 pt-8 paper-shadow transform ${trait.rotationClass} hover:rotate-0 transition-transform duration-200 border border-choc-dark/10 text-left flex flex-col justify-between cursor-pointer`}
            >
              <MaskingTape
                className={`w-20 h-5 absolute -top-2.5 left-1/2 -translate-x-1/2 ${trait.tapeRotationClass}`}
              />
              <div>
                <h3 className="font-hand text-2xl font-bold text-choc-dark mb-2">
                  {trait.title}
                </h3>
                <p className="text-sm leading-relaxed text-choc-mid">
                  {trait.summary}
                </p>
              </div>
              <GoldStar className="w-4 h-4 mt-4 ml-auto" />
            </button>
          ))}
        </div>
      </section>

      <EditorialModal
        isOpen={Boolean(selectedTrait)}
        onClose={() => setSelectedTrait(null)}
        kicker={selectedTrait?.practiceTag}
        title={selectedTrait?.title ?? ''}
      >
        {selectedTrait && (
          <div className="space-y-4">
            <p className="font-hand text-2xl text-choc-dark">
              “{selectedTrait.summary}”
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-choc-mid">
              {selectedTrait.reflection}
            </p>
          </div>
        )}
      </EditorialModal>
    </>
  );
}
