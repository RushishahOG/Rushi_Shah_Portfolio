import { useEffect } from "react";

export default function SpeedInsights() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.vercel-insights.com/v1/script.js";
    script.async = true;
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  return null;
}
