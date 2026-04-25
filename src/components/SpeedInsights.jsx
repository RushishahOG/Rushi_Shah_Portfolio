import { useEffect } from "react";

export default function SpeedInsights() {
  useEffect(() => {
    // Prevent duplicate script
    if (document.querySelector('script[data-vercel-insights]')) return;

    const script = document.createElement("script");
    script.src = "https://cdn.vercel-insights.com/v1/script.js";
    script.async = true;

    // Important attributes
    script.setAttribute("data-vercel-insights", "true");
    script.setAttribute("data-mode", "auto");

    document.head.appendChild(script);
  }, []);

  return null;
}