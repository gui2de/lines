// Open external links in a new tab; keep internal links in the same tab.
function markExternalLinks() {
  const host = window.location.hostname;
  document.querySelectorAll(".md-content a[href]").forEach(function (a) {
    const url = new URL(a.href, window.location.href);
    if (url.protocol.startsWith("http") && url.hostname && url.hostname !== host) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
  });
}
if (typeof document$ !== "undefined") {
  document$.subscribe(markExternalLinks);   // re-runs on Material page changes
} else {
  document.addEventListener("DOMContentLoaded", markExternalLinks);
}
