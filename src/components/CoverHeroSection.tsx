import React, { useState } from 'react';
import {
  BarcodeStamp,
  GoldStar,
  MaskingTape,
  PaperClip,
} from './ScrapbookDecorations';
import { EditorialModal } from './EditorialModal';
import { SKETCHBOOK_PAGES } from '../data/portfolioData';

function BotanicalSketchSvg() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 180 220">
      <path
        d="M18 32L162 24L154 188L24 196Z"
        fill="#FBF7E9"
        stroke="#4A211B"
        strokeDasharray="3 3"
        strokeWidth="1"
      />
      <path
        d="M90 175C90 140 88 95 92 52"
        stroke="#4A211B"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M90 135C70 128 58 112 62 98C76 102 88 118 90 135Z"
        fill="#D9D9A8"
        stroke="#4A211B"
        strokeWidth="1.4"
      />
      <path
        d="M90 112C112 104 124 88 120 74C106 78 94 95 90 112Z"
        fill="#E8B9B8"
        stroke="#4A211B"
        strokeWidth="1.4"
      />
      <path
        d="M91 84C75 76 68 62 72 50C84 54 90 68 91 84Z"
        fill="#B59A4D"
        fillOpacity="0.45"
        stroke="#4A211B"
        strokeWidth="1.4"
      />
      <path
        d="M132 45L134 51L140 52L135 56L136 62L132 59L128 62L129 56L124 52L130 51Z"
        fill="#B59A4D"
      />
      <text
        fill="#4A211B"
        fontFamily="Caveat, cursive"
        fontSize="14"
        textAnchor="middle"
        x="90"
        y="206"
      >
        sketchbook &amp; notes
      </text>
    </svg>
  );
}

function GridSketchSvg() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 180 220">
      <rect x="20" y="24" width="140" height="162" fill="#FBF7E9" stroke="#4A211B" strokeWidth="1.2" />
      <line x1="20" y1="62" x2="160" y2="62" stroke="#4A211B" strokeOpacity="0.25" strokeWidth="1" />
      <line x1="88" y1="62" x2="88" y2="186" stroke="#4A211B" strokeOpacity="0.25" strokeWidth="1" />
      <rect x="30" y="76" width="48" height="62" fill="#D9D9A8" fillOpacity="0.5" stroke="#4A211B" strokeWidth="1.1" />
      <rect x="98" y="76" width="52" height="24" fill="#E8B9B8" fillOpacity="0.6" stroke="#4A211B" strokeWidth="1.1" />
      <rect x="98" y="110" width="52" height="58" fill="#F8F1D8" stroke="#4A211B" strokeDasharray="3 2" strokeWidth="1.1" />
      <text
        fill="#4A211B"
        fontFamily="Caveat, cursive"
        fontSize="14"
        textAnchor="middle"
        x="90"
        y="206"
      >
        layout proportions
      </text>
    </svg>
  );
}

function InfographicDraftSvg() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 180 220">
      <rect x="20" y="24" width="140" height="162" fill="#FBF7E9" stroke="#4A211B" strokeWidth="1.2" />
      <line x1="34" y1="54" x2="120" y2="54" stroke="#4A211B" strokeWidth="2" />
      <rect x="34" y="72" width="106" height="10" fill="#4A211B" />
      <rect x="34" y="92" width="74" height="10" fill="#54271F" />
      <rect x="34" y="112" width="60" height="10" fill="#B59A4D" />
      <rect x="34" y="132" width="54" height="10" fill="#4A211B" fillOpacity="0.7" />
      <rect x="34" y="152" width="46" height="10" fill="#4A211B" fillOpacity="0.45" />
      <text
        fill="#4A211B"
        fontFamily="Caveat, cursive"
        fontSize="14"
        textAnchor="middle"
        x="90"
        y="206"
      >
        statcounter notes
      </text>
    </svg>
  );
}

export function CoverHeroSection() {
  const [isSketchbookOpen, setIsSketchbookOpen] = useState(false);
  const [activePageIndex, setActivePageIndex] = useState(0);

  const currentPage = SKETCHBOOK_PAGES[activePageIndex];

  return (
    <>
      <section
        aria-label="Cover Portfolio"
        className="bg-grid-choc rounded-sm p-6 sm:p-12 md:p-16 paper-shadow relative overflow-hidden"
      >
        <div className="relative max-w-4xl mx-auto bg-ivory-warm rounded-md p-6 sm:p-10 md:p-12 paper-shadow double-outline-card transform -rotate-1 transition-transform duration-200 hover:rotate-0">
          <PaperClip className="absolute -top-7 left-1/2 -translate-x-1/2 w-12 h-16 z-20" />

          <GoldStar className="absolute top-5 left-5 w-6 h-6" />
          <GoldStar className="hidden sm:block absolute bottom-20 left-1/2 w-5 h-5" />

          <div
            aria-hidden="true"
            className="hidden md:block absolute bottom-16 right-1/3 w-20 h-20 halftone-dots opacity-25 transform rotate-12 pointer-events-none"
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-4">
            <div className="md:col-span-7 space-y-4">
              <p className="text-xs tracking-[0.25em] uppercase text-choc-mid font-semibold">
                Personal Portfolio
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[0.95] text-choc-dark text-balance">
                Creative
                <br />
                Portfolio
              </h1>
              <p className="font-hand text-4xl sm:text-5xl text-choc-dark pt-1">
                Anggun Adha Hanifa
              </p>
              <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-choc-mid font-medium pt-1">
                Information Systems Student
              </p>

              <BarcodeStamp />
            </div>

            <div className="md:col-span-5 flex justify-center">
              <button
                type="button"
                onClick={() => setIsSketchbookOpen(true)}
                aria-label="Open sketchbook and creative notes"
                className="group relative bg-ivory-light p-3 pb-6 border border-choc-dark/20 shadow-md transform rotate-2 hover:rotate-0 transition-transform duration-200 w-full max-w-[260px] text-left cursor-pointer"
              >
                <MaskingTape className="w-16 h-5 absolute -top-2.5 left-1/2 -translate-x-1/2 -rotate-3 z-10" />
                <div className="bg-sage-pale/45 border border-choc-dark/15 aspect-[4/5] relative overflow-hidden">
                  <img
                    src="/assets/aistudio/WhatsApp_Image_2026-10-31_at_13.18.12_e69626d0.jpeg"
                    alt="Anggun Adha Hanifa"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <span className="sr-only">Click to view sketchbook pages</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <EditorialModal
        isOpen={isSketchbookOpen}
        onClose={() => setIsSketchbookOpen(false)}
        kicker={currentPage.dateLabel}
        title={currentPage.title}
      >
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
          <div className="sm:col-span-5 bg-sage-pale/45 border border-choc-dark/15 p-3 aspect-[4/5] flex items-center justify-center">
            {currentPage.id === 'botanical' && <BotanicalSketchSvg />}
            {currentPage.id === 'grid-notes' && <GridSketchSvg />}
            {currentPage.id === 'infographic-draft' && <InfographicDraftSvg />}
          </div>
          <div className="sm:col-span-7 space-y-4">
            <p className="text-sm sm:text-base leading-relaxed text-choc-mid">
              {currentPage.notes}
            </p>
            <div className="pt-2 border-t border-choc-dark/15">
              <p className="text-xs uppercase tracking-[0.16em] font-semibold text-choc-mid mb-3">
                Flip Sketchbook Pages
              </p>
              <div className="flex flex-wrap gap-2">
                {SKETCHBOOK_PAGES.map((page, index) => (
                  <button
                    key={page.id}
                    type="button"
                    onClick={() => setActivePageIndex(index)}
                    className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      activePageIndex === index
                        ? 'bg-choc-dark text-ivory-warm border-choc-dark'
                        : 'bg-ivory-warm text-choc-dark border-choc-dark/25 hover:border-choc-dark'
                    }`}
                  >
                    Page 0{index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </EditorialModal>
    </>
  );
}
