"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import bot from "../../assets/synthera_bot.png";
import { RiChatAiFill } from "react-icons/ri";

export default function SyntheraChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "bot",
      text: "Hi — I'm Synthera AI. This chat UI is a demo (non-functional).",
    },
    {
      id: 2,
      role: "bot",
      text: "Ask about outfits, sizes or browse the shop!",
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    // Close on Escape key
    function handleKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    // auto-scroll to latest message when open or messages change
    if (open)
      scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // append local user message (demo only)
    setMessages((s) => [
      ...s,
      { id: Date.now(), role: "user", text: input.trim() },
    ]);
    setInput("");

    // demo bot reply (fake) — shows how a response would appear
    setTimeout(() => {
      setMessages((s) => [
        ...s,
        {
          id: Date.now() + 1,
          role: "bot",
          text: "Nice choice — (demo reply).",
        },
      ]);
    }, 700);
  };

  return (
    <div className="fixed right-6 bottom-6 z-50">
      {/* Chat panel */}
      {open && (
        <div className="w-80 md:w-96 h-[420px] bg-white dark:bg-gray-900 shadow-xl rounded-2xl flex flex-col border border-gray-200 dark:border-gray-700 overflow-hidden">
          <header className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <div className="border rounded-full p-2 border-primary">
                <Image src={bot} alt="synthera-bot" className="w-8" />
              </div>
              <div>
                <div className="text-sm font-semibold">Synthera AI</div>
                <div className="text-xs text-gray-500">
                  Shopping assistant (demo)
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                ✕
              </button>
            </div>
          </header>

          <main className="p-3 flex-1 overflow-y-auto space-y-3">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-lg ${
                    m.role === "user"
                      ? "bg-slate-700 text-white"
                      : "bg-gray-800 text-white"
                  }`}
                >
                  <div className="text-sm">{m.text}</div>
                </div>
              </div>
            ))}
            <div ref={scrollRef} />
          </main>

          <form
            onSubmit={handleSubmit}
            className="px-3 py-3 border-t border-gray-100 dark:border-gray-800"
          >
            <div className="flex items-center gap-2">
              <input
                type="text"
                aria-label="Type a message"
                className="flex-1 bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                placeholder="Ask Synthera (demo only)..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                className="px-3 py-2 bg-primary text-white rounded-lg hover:opacity-95 disabled:opacity-60"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Floating launcher button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label="Open Synthera chat"
        className={`w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white text-lg font-semibold hover:scale-105 transition ${
          open && "hidden"
        }`}
      >
        <RiChatAiFill className="text-3xl" />
      </button>
    </div>
  );
}
