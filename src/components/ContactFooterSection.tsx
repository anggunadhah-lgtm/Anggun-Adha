import React, { useState } from 'react';
import { Check, Copy, Send } from 'lucide-react';
import { SOCIAL_PROFILES } from '../data/portfolioData';
import { EditorialModal } from './EditorialModal';

type ConnectModalMode = 'instagram' | 'facebook' | 'message' | null;

export function ContactFooterSection() {
  const [modalMode, setModalMode] = useState<ConnectModalMode>(null);
  const [copiedHandle, setCopiedHandle] = useState(false);

  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [messageText, setMessageText] = useState('');
  const [submittedNote, setSubmittedNote] = useState(false);

  const activeSocial =
    modalMode === 'instagram'
      ? SOCIAL_PROFILES.instagram
      : modalMode === 'facebook'
        ? SOCIAL_PROFILES.facebook
        : null;

  const handleCopyHandle = async (handle: string) => {
    try {
      await navigator.clipboard.writeText(handle);
      setCopiedHandle(true);
      window.setTimeout(() => setCopiedHandle(false), 1800);
    } catch {
      setCopiedHandle(false);
    }
  };

  const handleOpenMessageModal = () => {
    setSubmittedNote(false);
    setModalMode('message');
  };

  const handleSubmitNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !messageText.trim()) return;
    setSubmittedNote(true);
  };

  const handleCloseModal = () => {
    setModalMode(null);
    setCopiedHandle(false);
  };

  return (
    <>
      <footer
        aria-label="Contact and Footer"
        className="bg-grid-choc text-ivory-warm rounded-sm p-8 sm:p-12 paper-shadow text-center"
      >
        <h2 className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-wide text-ivory-light mb-2">
          Let&apos;s Connect
        </h2>
        <p className="text-sm sm:text-base text-ivory-warm/85 max-w-md mx-auto mb-6">
          Terbuka untuk belajar, berbagi ide, dan berkolaborasi.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            type="button"
            onClick={() => setModalMode('instagram')}
            aria-label="Instagram Profile"
            className="px-6 py-2.5 bg-ivory-warm text-choc-dark text-xs sm:text-sm font-semibold uppercase tracking-widest rounded-sm hover:bg-gold-muted hover:text-ivory-light transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Instagram
          </button>
          <button
            type="button"
            onClick={() => setModalMode('facebook')}
            aria-label="Facebook Profile"
            className="px-6 py-2.5 border border-ivory-warm/50 text-ivory-warm text-xs sm:text-sm font-semibold uppercase tracking-widest rounded-sm hover:bg-ivory-warm hover:text-choc-dark transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Facebook
          </button>
          <button
            type="button"
            onClick={handleOpenMessageModal}
            aria-label="Send a collaboration note"
            className="px-6 py-2.5 border border-gold-muted/70 text-gold-muted text-xs sm:text-sm font-semibold uppercase tracking-widest rounded-sm hover:bg-gold-muted hover:text-ivory-light transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Send a Note
          </button>
        </div>

        <div className="pt-6 border-t border-ivory-warm/15 text-xs tracking-wider text-ivory-warm/70">
          © 2025 Anggun Adha Hanifa · Information Systems Student · ITPLN
        </div>
      </footer>

      <EditorialModal
        isOpen={Boolean(activeSocial)}
        onClose={handleCloseModal}
        kicker="Social Connect"
        title={activeSocial?.platform ?? ''}
      >
        {activeSocial && (
          <div className="space-y-5">
            <div className="bg-ivory-warm border border-choc-dark/15 p-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-choc-mid">
                  Profile Handle
                </p>
                <p className="font-serif text-xl font-bold text-choc-dark">
                  {activeSocial.handle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleCopyHandle(activeSocial.handle)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-choc-dark text-ivory-warm text-xs font-semibold uppercase tracking-wider hover:bg-choc-mid transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {copiedHandle ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Handle</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-choc-mid">
              {activeSocial.note}
            </p>
            <p className="text-xs uppercase tracking-[0.15em] text-gold-muted font-semibold">
              {activeSocial.suggestedTopics}
            </p>
          </div>
        )}
      </EditorialModal>

      <EditorialModal
        isOpen={modalMode === 'message'}
        onClose={handleCloseModal}
        kicker="Guestbook & Collaboration"
        title="Leave a Note for Anggun"
      >
        {submittedNote ? (
          <div className="bg-ivory-warm border border-choc-dark/15 p-6 text-center space-y-3">
            <p className="font-hand text-3xl text-choc-dark">
              Terima kasih, {senderName}!
            </p>
            <p className="text-sm text-choc-mid leading-relaxed">
              Your note has been recorded in this session&apos;s guestbook. Looking
              forward to sharing ideas and collaborating.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmittedNote(false);
                setSenderName('');
                setSenderEmail('');
                setMessageText('');
              }}
              className="mt-2 px-5 py-2 bg-choc-dark text-ivory-warm text-xs font-semibold uppercase tracking-widest hover:bg-choc-mid transition-colors cursor-pointer"
            >
              Write Another Note
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmitNote} className="space-y-4">
            <div>
              <label
                htmlFor="guestbook-name"
                className="block text-xs font-semibold uppercase tracking-wider text-choc-mid mb-1.5"
              >
                Your Name
              </label>
              <input
                id="guestbook-name"
                type="text"
                required
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="e.g. Nadia Putri"
                className="w-full bg-ivory-warm border border-choc-dark/30 px-3.5 py-2.5 text-sm text-choc-dark placeholder:text-choc-mid/50"
              />
            </div>

            <div>
              <label
                htmlFor="guestbook-email"
                className="block text-xs font-semibold uppercase tracking-wider text-choc-mid mb-1.5"
              >
                Email or Handle (Optional)
              </label>
              <input
                id="guestbook-email"
                type="text"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="e.g. nadia@example.com"
                className="w-full bg-ivory-warm border border-choc-dark/30 px-3.5 py-2.5 text-sm text-choc-dark placeholder:text-choc-mid/50"
              />
            </div>

            <div>
              <label
                htmlFor="guestbook-message"
                className="block text-xs font-semibold uppercase tracking-wider text-choc-mid mb-1.5"
              >
                Message or Collaboration Idea
              </label>
              <textarea
                id="guestbook-message"
                rows={4}
                required
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="Share an idea, study topic, or creative project..."
                className="w-full bg-ivory-warm border border-choc-dark/30 px-3.5 py-2.5 text-sm text-choc-dark placeholder:text-choc-mid/50"
              />
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button
                type="button"
                onClick={handleCloseModal}
                className="px-4 py-2.5 border border-choc-dark/30 text-choc-dark text-xs font-semibold uppercase tracking-widest hover:bg-ivory-warm transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-choc-dark text-ivory-warm text-xs font-semibold uppercase tracking-widest hover:bg-choc-mid transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Note</span>
              </button>
            </div>
          </form>
        )}
      </EditorialModal>
    </>
  );
}
