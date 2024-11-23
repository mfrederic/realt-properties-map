import ReactGa from 'react-ga4';
import Env from "../utils/env";

let INITIATED = false;
export function initAnalytics() {
  if (INITIATED) {
    return;
  }
  const trackingId = Env.VITE_GA_TRACKING_ID || '';
  ReactGa.initialize(trackingId);
  INITIATED = true;
}

export function analyticsView({
  page,
  title,
}: {
  page: string;
  title: string;
}) {
  ReactGa.send({
    hitType: 'pageview',
    page,
    title,
  });
}

export function analyticsEvent({
  category,
  action,
  label,
  value,
}: {
  category: string;
  action: string;
  label?: string;
  value?: number;
}) {
  ReactGa.event({
    category,
    action,
    label,
    value,
  });
}