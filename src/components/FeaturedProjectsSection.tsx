import React, { useState } from 'react';
import {
  APPLE_ADOPTION_FACTORS,
  MOBILE_VENDOR_SHARES,
} from '../data/portfolioData';
import { MaskingTape } from './ScrapbookDecorations';

type ProjectFilter = 'all' | 'data-viz' | 'research';

export function FeaturedProjectsSection() {
  const [filter, setFilter] = useState<ProjectFilter>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('Apple');
  const [showAppleFactors, setShowAppleFactors] = useState(false);

  const activeBrand =
    MOBILE_VENDOR_SHARES.find((b) => b.brand === selectedBrand) ??
    MOBILE_VENDOR_SHARES[0];

  const showDataViz = filter === 'all' || filter === 'data-viz';
  const showResearch = filter === 'all' || filter === 'research';

  return (
    <section
      aria-label="Featured Projects"
      className="bg-grid-sage rounded-sm p-6 sm:p-10 md:p-14 paper-shadow"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Large Cream Title Area */}
        <div className="lg:col-span-4 bg-ivory-warm p-6 sm:p-8 paper-shadow border border-choc-dark/15 lg:sticky lg:top-8">
          <p className="text-xs tracking-[0.2em] uppercase text-choc-mid font-semibold mb-2">
            Selected Works
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-tight text-choc-dark leading-none mb-4 text-balance">
            Featured
            <br />
            Projects
          </h2>
          <p className="text-sm leading-relaxed text-choc-mid mb-6">
            A collection of informational and data visualization projects exploring
            technology trends and user behavior in Indonesia.
          </p>

          <div
            role="tablist"
            aria-label="Filter projects"
            className="flex flex-wrap gap-1.5 pt-4 border-t border-choc-dark/15"
          >
            {(
              [
                { id: 'all', label: 'All Works' },
                { id: 'data-viz', label: 'Data Viz' },
                { id: 'research', label: 'Research' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={filter === tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  filter === tab.id
                    ? 'bg-choc-dark text-ivory-warm border-choc-dark'
                    : 'bg-ivory-light text-choc-mid border-choc-dark/20 hover:text-choc-dark hover:border-choc-dark/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Printed Editorial Project Boards */}
        <div className="lg:col-span-8 space-y-8">
          {showDataViz && (
            <article className="bg-ivory-light p-6 sm:p-8 paper-shadow border border-choc-dark/15 relative">
              <MaskingTape className="w-24 h-5 absolute -top-2.5 right-8 rotate-2" />
              <span className="inline-block text-[11px] tracking-[0.18em] uppercase font-semibold text-gold-muted mb-2">
                Infographic · Data Visualization
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-choc-dark leading-snug mb-4 text-balance">
                Which Mobile Phone Brands Are the Most Sought-After by People in
                Indonesia?
              </h3>

              {/* Interactive Visual Bar Chart Card */}
              <div className="bg-ivory-warm p-5 rounded-sm border border-choc-dark/10 space-y-3 mb-4">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <p className="text-xs uppercase tracking-wider font-semibold text-choc-mid">
                    Mobile Vendor Market Share — Indonesia (Statcounter Global Stats)
                  </p>
                </div>

                {MOBILE_VENDOR_SHARES.map((item) => {
                  const isSelected = item.brand === activeBrand.brand;
                  return (
                    <button
                      key={item.brand}
                      type="button"
                      onClick={() => setSelectedBrand(item.brand)}
                      className={`w-full text-left p-1.5 -mx-1.5 rounded-sm transition-colors cursor-pointer ${
                        isSelected ? 'bg-ivory-light/90' : 'hover:bg-ivory-light/50'
                      }`}
                    >
                      <div className="flex justify-between text-xs font-medium text-choc-dark mb-1">
                        <span className={isSelected ? 'font-bold' : ''}>
                          {item.brand}
                        </span>
                        <span className="tabular-nums font-semibold">
                          {item.share.toFixed(2)}%
                        </span>
                      </div>
                      <div className="w-full bg-choc-dark/10 h-3 rounded-sm overflow-hidden">
                        <div
                          className={`${item.barColorClass} h-full transition-opacity duration-200`}
                          style={{ width: `${item.share}%` }}
                        />
                      </div>
                    </button>
                  );
                })}

                {/* Contextual insight for selected brand */}
                <div className="pt-3 mt-2 border-t border-choc-dark/10 text-xs text-choc-mid">
                  <p className="font-semibold text-choc-dark uppercase tracking-wider mb-1">
                    {activeBrand.brand} · {activeBrand.segment}
                  </p>
                  <p className="leading-relaxed">{activeBrand.insight}</p>
                </div>
              </div>

              <p className="text-xs text-choc-mid">
                Source:{' '}
                <a
                  className="underline hover:text-choc-dark transition-colors"
                  href="https://gs.statcounter.com/vendor-market-share/mobile/indonesia"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Statcounter Global Stats — Mobile Vendor Market Share Indonesia
                </a>
              </p>
            </article>
          )}

          {showResearch && (
            <article className="bg-ivory-light p-6 sm:p-8 paper-shadow border border-choc-dark/15 relative">
              <MaskingTape className="w-24 h-5 absolute -top-2.5 left-8 -rotate-2" />
              <span className="inline-block text-[11px] tracking-[0.18em] uppercase font-semibold text-gold-muted mb-2">
                Informational Project · Technology
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-choc-dark leading-snug mb-3 text-balance">
                Why Are Apple Devices Highly Used in Indonesia?
              </h3>
              <p className="text-sm leading-relaxed text-choc-mid">
                An informational study exploring the key factors behind the strong
                adoption of Apple devices in Indonesia—including long-term device
                durability, consistent iOS software updates, an active second-hand
                iPhone market, brand prestige, and continued usability by subsequent
                owners.
              </p>

              {showAppleFactors && (
                <div className="mt-5 pt-5 border-t border-choc-dark/15 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {APPLE_ADOPTION_FACTORS.map((factor, index) => (
                    <div
                      key={factor.title}
                      className="bg-ivory-warm p-4 border border-choc-dark/10"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wider text-choc-dark mb-1">
                        0{index + 1}. {factor.title}
                      </p>
                      <p className="text-xs leading-relaxed text-choc-mid">
                        {factor.detail}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-5">
                <button
                  type="button"
                  onClick={() => setShowAppleFactors((prev) => !prev)}
                  className="px-4 py-2 border border-choc-dark/30 bg-ivory-warm text-choc-dark text-xs font-semibold uppercase tracking-widest hover:bg-choc-dark hover:text-ivory-warm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {showAppleFactors ? 'Hide Key Factors' : 'Explore Key Factors'}
                </button>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
