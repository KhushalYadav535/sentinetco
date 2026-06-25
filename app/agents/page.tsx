"use client"

import React, { useState } from "react"
import { MobileNav } from "@/components/mobile-nav"
import { PixelIcon } from "@/components/pixel-icon"
import { RevealText } from "@/components/reveal-text"

const AGENTS = [
  {
    id: "69f606afedd5091bf839767e",
    name: "Customer Support Specialist",
    description: "Handles inbound customer queries, troubleshooting, and FAQs.",
    icon: "💬",
    color: "#8b5cf6", // Purple
  },
  {
    id: "sales_sdr_demo", // Placeholder ID
    name: "Outbound Sales SDR",
    description: "Cold calls leads, qualifies them, and books meetings on your calendar.",
    icon: "🚀",
    color: "#10b981", // Emerald
  },
  {
    id: "front_desk_demo", // Placeholder ID
    name: "Virtual Front Desk",
    description: "Answers main line calls, routes to departments, and takes messages.",
    icon: "🏢",
    color: "#3b82f6", // Blue
  },
  {
    id: "billing_support_demo", // Placeholder ID
    name: "Billing & Collections",
    description: "Helps customers update payment methods and securely processes payments.",
    icon: "💳",
    color: "#f59e0b", // Amber
  }
];

export default function AgentsShowcasePage() {
  const [selectedAgent, setSelectedAgent] = useState(AGENTS[0])

  const backendUrl = "https://api.srv980418.hstgr.cloud"
  const widgetUrl = `https://vaani-ai-five.vercel.app/widget?agentId=${encodeURIComponent(selectedAgent.id)}&color=${encodeURIComponent(selectedAgent.color)}&mode=embed&backend=${encodeURIComponent(backendUrl)}`

  return (
    <div className="bg-[#F5F4F0] text-[#111] min-h-screen font-sans antialiased">
      <MobileNav />

      {/* Spacer for sticky nav */}
      <div className="h-32" />

      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-32">
        <div className="mb-12">
          <PixelIcon type="agents" size={40} />
          <RevealText className="mt-6 text-4xl md:text-5xl font-light tracking-tight leading-[1.05]">
            {"Agent Showcase Gallery"}
          </RevealText>
          <p className="mt-4 text-black/50 max-w-2xl text-lg">
            Experience our AI voice agents in action. Select a persona below to start a live conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[70vh] min-h-[600px]">
          {/* Left Column: Agent Selection */}
          <div className="lg:col-span-1 flex flex-col gap-4 overflow-y-auto pr-4 custom-scrollbar">
            {AGENTS.map((agent) => {
              const isSelected = selectedAgent.id === agent.id;
              return (
                <button
                  key={agent.id}
                  onClick={() => setSelectedAgent(agent)}
                  className={`text-left p-6 rounded-2xl border transition-all duration-300 ${
                    isSelected 
                      ? "bg-white border-black/20 shadow-md shadow-black/5 scale-[1.02]" 
                      : "bg-white/40 border-black/[0.06] hover:bg-white/80 hover:border-black/10"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                      style={{ backgroundColor: `${agent.color}20` }}
                    >
                      {agent.icon}
                    </div>
                    <h3 className="font-medium text-lg text-black/90">{agent.name}</h3>
                  </div>
                  <p className="text-sm text-black/50 leading-relaxed">
                    {agent.description}
                  </p>
                </button>
              )
            })}
          </div>

          {/* Right Column: Embedded Agent Widget */}
          <div className="lg:col-span-2 relative rounded-3xl border border-black/10 overflow-hidden shadow-2xl shadow-black/5 bg-white flex flex-col">
            {/* Browser-like header */}
            <div className="h-12 bg-[#fafaf8] border-b border-black/5 flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
              </div>
              <div className="mx-auto flex items-center gap-2 bg-white border border-black/5 rounded-md px-3 py-1 text-xs text-black/40 font-mono w-1/2 justify-center">
                <span style={{ color: selectedAgent.color }}>●</span>
                Live Demo: {selectedAgent.name}
              </div>
            </div>
            
            {/* Widget Iframe */}
            <div className="flex-1 w-full h-full relative bg-[#fcfcfc]">
              <iframe 
                key={selectedAgent.id} // Re-mount iframe when agent changes
                src={widgetUrl}
                allow="microphone;autoplay"
                className="w-full h-full border-none"
              />
            </div>
          </div>
        </div>
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(0,0,0,0.1);
          border-radius: 10px;
        }
      `}} />
    </div>
  )
}
