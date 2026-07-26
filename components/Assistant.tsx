"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

type Message = {
  role: "user" | "model";
  text: string;
};

export function Assistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      text: "Hi — I can answer questions about James, his projects, and his security work. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg: Message = { role: "user", text: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      const data = await res.json().catch(() => ({ reply: "Hmm, I didn't catch that. Try again?" }));
      setMessages((m) => [...m, { role: "model", text: data.reply || data.error || "I'm not sure about that — try asking about James's projects or security work." }]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "model",
          text: "I'm having trouble connecting right now. You can still browse the projects or use the contact form.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="mb-3 flex w-[min(92vw,360px)] flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border bg-background px-4 py-3">
              <span className="font-display text-sm font-semibold text-foreground">
                Ask about my work
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md p-1 text-muted hover:bg-surface hover:text-foreground"
                aria-label="Close assistant"
              >
                <X size={16} />
              </button>
            </div>

            <div className="flex h-[320px] flex-col gap-3 overflow-y-auto bg-surface p-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "self-end rounded-br-md bg-accent text-accent-text"
                      : "self-start rounded-bl-md border border-border bg-background text-foreground"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {loading && (
                <div className="self-start rounded-2xl rounded-bl-md border border-border bg-background px-3.5 py-2.5 text-sm text-muted">
                  <Loader2 className="animate-spin" size={16} />
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            <form
              onSubmit={send}
              className="flex items-center gap-2 border-t border-border bg-background p-3"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="rounded-lg bg-accent p-2 text-accent-text transition hover:opacity-90 disabled:opacity-50"
                aria-label="Send"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((o) => !o)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-text shadow-lg transition hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        aria-label={open ? "Close assistant" : "Open assistant"}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>
    </div>
  );
}
