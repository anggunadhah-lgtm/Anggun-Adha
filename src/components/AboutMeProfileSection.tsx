import React, { useState } from 'react';
import { ABOUT_CONTENT, PROFILE_ROWS } from '../data/portfolioData';
import { GoldStar, PaperClip } from './ScrapbookDecorations';

export function AboutMeProfileSection() {
  const [lang, setLang] = useState<'id' | 'en'>('id');
  const [copiedId, setCopiedId] = useState(false);

  const handleCopyStudentId = async () => {
    try {
      await navigator.clipboard.writeText('202632013');
      setCopiedId(true);
      window.setTimeout(() => setCopiedId(false), 1800);
    } catch {
      setCopiedId(false);
    }
  };

  return (
    <section
      aria-label="About Me and Personal Profile"
      className="rounded-sm overflow-hidden paper-shadow grid grid-cols-1 lg:grid-cols-12"
    >
      {/* Left Panel: Dark Chocolate Brown with Fine Grid */}
      <div className="lg:col-span-6 bg-grid-choc text-ivory-warm p-8 sm:p-12 flex flex-col justify-between relative">
        <div>
          <p className="text-xs tracking-[0.22em] uppercase text-gold-muted font-semibold mb-2">
            {ABOUT_CONTENT.kicker}
          </p>
          <h2 className="font-hand text-4xl sm:text-5xl text-ivory-light mb-6">
            {ABOUT_CONTENT.heading}
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-ivory-warm/90">
            {lang === 'id' ? ABOUT_CONTENT.bioId : ABOUT_CONTENT.bioEn}
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-ivory-warm/15 flex items-center justify-between gap-4">
          <span className="font-hand text-xl text-gold-muted">
            {ABOUT_CONTENT.footnote}
          </span>
          <div className="flex items-center gap-3 shrink-0">
            <div className="inline-flex border border-ivory-warm/25 rounded-sm overflow-hidden">
              <button
                type="button"
                onClick={() => setLang('id')}
                className={`px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  lang === 'id'
                    ? 'bg-ivory-warm text-choc-dark'
                    : 'text-ivory-warm/80 hover:text-ivory-light'
                }`}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  lang === 'en'
                    ? 'bg-ivory-warm text-choc-dark'
                    : 'text-ivory-warm/80 hover:text-ivory-light'
                }`}
              >
                EN
              </button>
            </div>
            <GoldStar className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Right Panel: Pale Sage Notebook Grid with Cream Profile Card */}
      <div className="lg:col-span-6 bg-grid-sage p-8 sm:p-12 flex items-center justify-center">
        <div className="relative bg-ivory-light w-full max-w-md p-6 sm:p-8 paper-shadow border border-choc-dark/15">
          <PaperClip className="absolute -top-6 right-8 w-9 h-12" />

          <h3 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-wide text-choc-dark border-b-2 border-choc-dark pb-2 mb-4">
            Personal Profile
          </h3>

          <dl className="divide-y divide-choc-dark/15 text-xs sm:text-sm">
            {PROFILE_ROWS.map((row) => (
              <div key={row.label} className="py-2.5 grid grid-cols-3 gap-2 items-baseline">
                <dt className="font-semibold uppercase tracking-wider text-choc-mid">
                  {row.label}
                </dt>
                <dd
                  className={`col-span-2 text-choc-dark ${
                    row.label === 'Name' ? 'font-medium' : ''
                  } ${row.isMono ? 'font-mono tabular-nums' : ''}`}
                >
                  {row.label === 'Student ID' ? (
                    <button
                      type="button"
                      onClick={handleCopyStudentId}
                      title="Copy Student ID"
                      className="inline-flex items-center gap-2 hover:text-gold-muted transition-colors cursor-pointer text-left"
                    >
                      <span>{row.value}</span>
                      <span className="text-[10px] font-sans uppercase tracking-widest text-choc-mid/80">
                        {copiedId ? 'Copied' : ''}
                      </span>
                    </button>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
