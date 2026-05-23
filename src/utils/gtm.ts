/**
 * Utilidad para disparar eventos al dataLayer de Google Tag Manager.
 */
export const trackEvent = (eventName: string, params: Record<string, unknown> = {}) => {
  if (typeof window !== 'undefined' && 'dataLayer' in window) {
    (window as unknown as { dataLayer: Record<string, unknown>[] }).dataLayer.push({
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
