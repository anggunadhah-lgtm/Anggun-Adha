import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { MaskingTape } from './ScrapbookDecorations';

interface EditorialModalProps {
  isOpen: boolean;
  onClose: () => void;
  kicker?: string;
  title: string;
  children: React.ReactNode;
}

export function EditorialModal({
  isOpen,
  onClose,
  kicker,
  title,
  children,
}: EditorialModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-choc-dark/65 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="editorial-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-ivory-light border border-choc-dark/25 paper-shadow p-6 sm:p-8 pt-9 text-choc-dark max-h-[88vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <MaskingTape className="w-24 h-5 absolute -top-2.5 left-1/2 -translate-x-1/2 -rotate-1" />

        <div className="flex items-start justify-between gap-4 border-b border-choc-dark/15 pb-4 mb-5">
          <div>
            {kicker && (
              <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-gold-muted mb-1">
                {kicker}
              </p>
            )}
            <h3
              id="editorial-modal-title"
              className="font-serif text-2xl sm:text-3xl font-bold text-choc-dark leading-tight"
            >
              {title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="min-w-[40px] min-h-[40px] flex items-center justify-center border border-choc-dark/20 bg-ivory-warm text-choc-dark hover:bg-choc-dark hover:text-ivory-warm transition-colors rounded-sm shrink-0 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
