import React, { useState } from 'react';
import { HOBBIES, HobbyItem } from '../data/portfolioData';
import { MaskingTape } from './ScrapbookDecorations';
import { EditorialModal } from './EditorialModal';

function HobbyIllustration({ id }: { id: HobbyItem['id'] }) {
  switch (id) {
    case 'writing':
      return (
        <svg className="w-12 h-12 text-choc-dark" fill="none" viewBox="0 0 64 64">
          <rect height="44" rx="2" stroke="currentColor" strokeWidth="2" width="36" x="14" y="10" />
          <line stroke="currentColor" strokeWidth="1.5" x1="22" x2="42" y1="22" y2="22" />
          <line stroke="currentColor" strokeWidth="1.5" x1="22" x2="42" y1="30" y2="30" />
          <line stroke="currentColor" strokeWidth="1.5" x1="22" x2="34" y1="38" y2="38" />
        </svg>
      );
    case 'drawing':
      return (
        <svg className="w-12 h-12 text-choc-dark" fill="none" viewBox="0 0 64 64">
          <path
            d="M16 48L22 24L44 12L52 20L40 42L16 48Z"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path d="M22 24L40 42" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case 'reading':
      return (
        <img
          src="/assets/aistudio/WhatsApp_Image_2026-11-21_at_14.19.51_3949304e.jpeg"
          alt="Anggun Adha Hanifa reading a book"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[50%_58%]"
        />
      );
    case 'photography':
      return (
        <img
          src="/assets/aistudio/WhatsApp_Image_2026-10-31_at_13.12.04_719cfa5a.jpeg"
          alt="Coastal sea and cloudy sky captured by Anggun Adha Hanifa"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
      );
    case 'dance':
      return (
        <img
          src="/assets/aistudio/WhatsApp_Image_2026-10-31_at_13.08.09_c79b36ad.jpeg"
          alt="Anggun Adha Hanifa in traditional dance attire"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[50%_38%]"
        />
      );
  }
}

export function ThingsILoveSection() {
  const [activeHobby, setActiveHobby] = useState<HobbyItem | null>(null);

  return (
    <>
      <section
        aria-label="Things I Love"
        className="bg-grid-ivory rounded-sm p-6 sm:p-10 md:p-14 paper-shadow"
      >
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-choc-dark">
            Things I Love
          </h2>
          <p className="font-hand text-2xl sm:text-3xl text-choc-mid mt-1">
            little things that inspire me ✦
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {HOBBIES.map((hobby) => (
            <button
              key={hobby.id}
              type="button"
              onClick={() => setActiveHobby(hobby)}
              className={`relative bg-ivory-warm p-5 pt-7 border border-choc-dark/15 paper-shadow transform ${hobby.rotationClass} hover:rotate-0 transition-transform duration-200 flex flex-col text-left cursor-pointer`}
            >
              <MaskingTape
                className={`w-14 h-4 absolute -top-2 left-1/2 -translate-x-1/2 ${hobby.tapeRotationClass}`}
              />
              <div className="bg-ivory-light border border-choc-dark/10 h-28 w-full flex items-center justify-center mb-4 overflow-hidden">
                <HobbyIllustration id={hobby.id} />
              </div>
              <h3 className="font-serif text-lg font-bold uppercase tracking-wide text-choc-dark mb-1">
                {hobby.title}
              </h3>
              <p className="text-xs leading-relaxed text-choc-mid">
                {hobby.summary}
              </p>
            </button>
          ))}
        </div>
      </section>

      <EditorialModal
        isOpen={Boolean(activeHobby)}
        onClose={() => setActiveHobby(null)}
        kicker={activeHobby?.title}
        title={activeHobby?.journalTitle ?? ''}
      >
        {activeHobby && (
          <div className="space-y-5">
            <div className="flex items-center gap-4 bg-ivory-warm border border-choc-dark/15 p-4">
              <div className="w-16 h-16 bg-ivory-light border border-choc-dark/10 flex items-center justify-center shrink-0 overflow-hidden">
                <HobbyIllustration id={activeHobby.id} />
              </div>
              <p className="text-sm italic text-choc-mid">
                {activeHobby.summary}
              </p>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-choc-dark">
              {activeHobby.journalNote}
            </p>
            <div className="pt-3 border-t border-choc-dark/15">
              <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-gold-muted mb-1">
                In My Notebook
              </p>
              <p className="font-hand text-2xl text-choc-mid">
                {activeHobby.favoritePrompt}
              </p>
            </div>
          </div>
        )}
      </EditorialModal>
    </>
  );
}
