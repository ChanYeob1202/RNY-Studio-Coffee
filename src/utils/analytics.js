const TOAST_ORDER_URL = "https://order.toasttab.com/online/rny-coffee-studio-3829-west-6th-street";

// UTM tags let Toast's reports show which orders came from which button
export const getOrderUrl = (placement) =>
  `${TOAST_ORDER_URL}?utm_source=website&utm_medium=${placement}`;

export const trackOrderClick = (label) => {
  //GA4 gtag is created by the snippet in public/index.html
  if (window.gtag) {
    window.gtag("event", "order_online_click", {
      event_category: "engagement",
      event_label: label,
    });
  }
};
