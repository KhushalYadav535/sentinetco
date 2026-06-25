"use client";

import { useEffect } from "react";

export default function VaaniWidget() {
  useEffect(() => {
    // Step 1: Set config FIRST
    (window as any).vaaniConfig = {
      agentId: "69f606afedd5091bf839767e",
      color: "#8b5cf6",
      text: "Talk to AI Support",
      position: "bottom-right",
      frontendUrl: "https://vaani-ai-five.vercel.app", // VaaniAI Vercel frontend
    };

    // Step 2: Load the widget script dynamically AFTER config is set
    if (!document.getElementById("vaani-widget-script")) {
      const script = document.createElement("script");
      script.id = "vaani-widget-script";
      script.src = "https://api.srv980418.hstgr.cloud/widget.js";
      script.async = true;
      script.onload = () => console.log("[VaaniAI] Widget script loaded ✅");
      script.onerror = (e) => console.error("[VaaniAI] Widget script failed to load ❌", e);
      document.body.appendChild(script);
    }
  }, []);

  return null;
}
