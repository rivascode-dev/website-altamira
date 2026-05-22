'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { trackEvent, TRACKING_EVENTS } from '@/utils/gtm';
import { m, LazyMotion, domAnimation } from 'framer-motion';

export default function WhatsAppFab() {
  const handleClick = () => {
    trackEvent(TRACKING_EVENTS.WHATSAPP_CLICK, {
      event_category: 'engagement',
      event_label: 'floating_button',
    });
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[2000]"
      >
        <a
          href="https://wa.me/56982811148"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          title="Contactar por WhatsApp"
          aria-label="whatsapp"
          className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition-all duration-300 ease-in-out hover:bg-[#128C7E] hover:scale-110 hover:rotate-6 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
        >
          <MessageCircle size={32} strokeWidth={2.5} />
        </a>
      </m.div>
    </LazyMotion>
  );
}
