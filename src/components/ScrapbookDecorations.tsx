import React from 'react';

export function PaperClip({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none ${className}`}>
      <svg className="w-full h-full drop-shadow-md" fill="none" viewBox="0 0 48 64">
        <path
          d="M16 18V46C16 52.6274 21.3726 58 28 58C34.6274 58 40 52.6274 40 46V14C40 7.37258 34.6274 2 28 2C21.3726 2 16 7.37258 16 14V42C16 45.3137 18.6863 48 22 48C25.3137 48 28 45.3137 28 42V16"
          stroke="#8C8C8C"
          strokeLinecap="round"
          strokeWidth="3.5"
        />
        <path
          d="M16 18V46C16 52.6274 21.3726 58 28 58C34.6274 58 40 52.6274 40 46V14C40 7.37258 34.6274 2 28 2C21.3726 2 16 7.37258 16 14V42C16 45.3137 18.6863 48 22 48C25.3137 48 28 45.3137 28 42V16"
          stroke="#E5E5E5"
          strokeLinecap="round"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
}

export function GoldStar({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`text-gold-muted ${className}`}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 1L14.8 8.5L22.5 9.2L16.5 14.3L18.4 22L12 17.8L5.6 22L7.5 14.3L1.5 9.2L9.2 8.5L12 1Z" />
    </svg>
  );
}

export function MaskingTape({ className = '' }: { className?: string }) {
  return <div aria-hidden="true" className={`masking-tape ${className}`} />;
}

export function BarcodeStamp() {
  const widths = [
    'w-[2px]',
    'w-[1px]',
    'w-[3px]',
    'w-[1px]',
    'w-[2px]',
    'w-[4px]',
    'w-[1px]',
    'w-[2px]',
    'w-[1px]',
    'w-[3px]',
    'w-[2px]',
    'w-[1px]',
    'w-[3px]',
    'w-[2px]',
    'w-[1px]',
    'w-[4px]',
    'w-[1px]',
    'w-[2px]',
  ];

  return (
    <div aria-hidden="true" className="pt-6 flex items-center gap-3">
      <div className="flex items-end h-8 gap-[2px] opacity-80">
        {widths.map((w, idx) => (
          <span key={idx} className={`${w} h-full bg-choc-dark`} />
        ))}
      </div>
      <span className="text-[10px] tracking-widest text-choc-mid uppercase tabular-nums">
        ITPLN · 202632013
      </span>
    </div>
  );
}
