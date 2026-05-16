/**
 * Utilidad para disparar eventos al dataLayer de Google Tag Manager.
 */
export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: eventName,
      ...params,
    });
  }
};

export const TRACKING_EVENTS = {
  WHATSAPP_CLICK: 'whatsapp_click',
  FORM_SUBMIT: 'form_submit',
  PHONE_CLICK: 'phone_click',
};
