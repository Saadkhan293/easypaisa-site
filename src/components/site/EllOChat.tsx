import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Send, X } from "lucide-react";
import ello from "@/assets/ello-mascot.png";

type Msg = { from: "bot" | "user"; text: string };
type Stage = "peek" | "intro" | "chat";

const SUGGESTIONS = [
  "I forgot my PIN. How can I reset it?",
  "Where can I see my recent transactions?",
  "How can I invest in Term Deposit?",
  "How to report a fraud?",
  "How to increase my account limit?",
];

export function EllOChat() {
  const [stage, setStage] = useState<Stage>("peek");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      from: "bot",
      text: "Hello! I'm Ello, here to make things easier for you. Got a question? I've got the answers.",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, stage]);

  const send = (text: string) => {
    const t = text.trim();
    if (!t) return;
    setMessages((m) => [...m, { from: "user", text: t }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          from: "bot",
          text: "Thanks for asking! A human agent will follow up shortly — meanwhile try the Help Center inside the app.",
        },
      ]);
    }, 700);
  };

  return (
    <>
      {/* PEEKING ELLO — walks in from the right, waves, blinks, walks back out */}
      <AnimatePresence>
        {stage === "peek" && (
          <motion.div
            key="peek"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: 200 }}
            transition={{ duration: 0.4 }}
            className="fixed right-0 bottom-0 z-40 pointer-events-none"
            style={{ width: 240, height: 210 }}
          >
            {/* horizontal walk loop */}
            <motion.div
              animate={{ x: [280, 0, 0, 0, 0, 280] }}
              transition={{
                duration: 16,
                times: [0, 0.12, 0.22, 0.78, 0.88, 1],
                repeat: Infinity,
                repeatDelay: 5,
                ease: "easeInOut",
                delay: 0.6,
              }}
              className="absolute inset-0"
            >
              {/* speech bubble — visible while Ello is settled */}
              <motion.div
                animate={{ opacity: [0, 0, 1, 1, 0, 0], scale: [0.7, 0.7, 1, 1, 0.8, 0.7] }}
                transition={{ duration: 16, times: [0, 0.18, 0.25, 0.78, 0.88, 1], repeat: Infinity, repeatDelay: 5, delay: 0.6 }}
                className="absolute top-2 right-[165px] bg-white rounded-2xl rounded-br-sm shadow-xl px-4 py-2 text-sm font-medium text-ink whitespace-nowrap"
              >
                Hi! I'm Ello 👋
                <span className="absolute -bottom-1.5 right-3 w-3 h-3 bg-white rotate-45" />
              </motion.div>

              {/* clickable mascot — bob + wave rotation + blink */}
              <motion.button
                aria-label="Chat with Ello"
                onClick={() => setStage("intro")}
                animate={{ y: [0, -8, 0, -6, 0], rotate: [-7, 7, -4, 6, -7] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 right-2 pointer-events-auto group"
                style={{ transformOrigin: "bottom center" }}
              >
                <div className="absolute inset-0 -z-10 rounded-full bg-mint-deep/40 blur-2xl scale-90" />
                <div className="relative w-[150px] h-[170px] md:w-[170px] md:h-[190px]">
                  <img
                    src={ello}
                    alt="Ello mascot"
                    width={170}
                    height={190}
                    loading="lazy"
                    className="w-full h-full object-contain object-bottom drop-shadow-2xl select-none pointer-events-none transition-transform group-hover:scale-105"
                  />
                </div>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* INTRO MODAL — "Hey, I'm Ello!" */}
      <AnimatePresence>
        {stage === "intro" && (
          <motion.div
            key="intro-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={() => setStage("peek")}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 240, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm bg-white rounded-[2rem] shadow-2xl p-8 text-center"
            >
              <button
                onClick={() => setStage("peek")}
                aria-label="Close"
                className="absolute top-4 right-4 size-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition"
              >
                <X className="size-4 text-ink/60" />
              </button>

              {/* circular green avatar */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="mx-auto w-36 h-36 rounded-full bg-mint-deep flex items-center justify-center overflow-hidden shadow-lg"
              >
                <img src={ello} alt="Ello" className="w-32 h-32 object-contain" />
              </motion.div>

              <h3 className="mt-5 text-2xl font-bold text-ink">Hey, I'm Ello!</h3>
              <p className="mt-2 text-sm text-ink/70 leading-relaxed px-2">
                Your digital dost from easypaisa — part genius, part fun, and 100% here to guide you on your financial adventure. 🎉🚀
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setStage("chat")}
                className="mt-6 w-full py-3.5 rounded-full bg-mint-deep text-white font-semibold shadow-md"
              >
                Start Chat
              </motion.button>

              <p className="mt-3 text-xs text-ink/50">
                by clicking on "Start Chat" you agree to our{" "}
                <span className="text-mint-deep font-medium underline">Terms &amp; Conditions</span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CHAT WINDOW */}
      <AnimatePresence>
        {stage === "chat" && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-3rem)] bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col border border-black/5"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-black/5 bg-white">
              <button
                onClick={() => setStage("peek")}
                className="p-1.5 rounded-full hover:bg-black/5 transition"
                aria-label="Back"
              >
                <ArrowLeft className="size-5 text-ink" />
              </button>
              <div className="font-semibold text-ink">Ask Ello</div>
              <button
                onClick={() => setStage("peek")}
                className="p-1.5 rounded-full hover:bg-black/5 transition"
                aria-label="Close"
              >
                <X className="size-5 text-ink" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#f7f8f7]">
              <div className="text-center text-[10px] text-ink/40 font-medium">
                {new Date().toLocaleDateString("en", { day: "2-digit", month: "short" })},{" "}
                {new Date().toLocaleTimeString("en", { hour: "2-digit", minute: "2-digit" })}
              </div>

              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  {m.from === "bot" && (
                    <div className="size-7 rounded-full bg-mint-deep/15 flex items-center justify-center mr-2 shrink-0 overflow-hidden">
                      <img src={ello} alt="" className="w-7 h-7 object-cover scale-150" />
                    </div>
                  )}
                  <div
                    className={`max-w-[78%] px-3.5 py-2 text-sm leading-snug rounded-2xl ${
                      m.from === "user"
                        ? "bg-mint-deep text-white rounded-br-sm"
                        : "bg-white text-ink rounded-bl-sm border border-black/5"
                    }`}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}

              {messages.length === 1 && (
                <div className="pt-2">
                  <div className="text-xs text-ink/50 mb-2 flex items-center gap-1">
                    <span>✨</span> Try asking it like this:
                  </div>
                  <div className="space-y-2">
                    {SUGGESTIONS.map((s) => (
                      <motion.button
                        key={s}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => send(s)}
                        className="block w-full text-left px-3.5 py-2 rounded-2xl bg-mint-deep text-white text-sm shadow-sm"
                      >
                        {s}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white border-t border-black/5">
              <div className="px-4 pt-2 pb-1 text-xs text-ink/50 font-medium">Help Center</div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
                className="flex items-center gap-2 px-3 pb-3"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything…"
                  className="flex-1 px-4 py-2.5 rounded-full bg-[#f1f2f1] text-sm outline-none focus:ring-2 focus:ring-mint-deep/40"
                />
                <button
                  type="submit"
                  className="size-10 rounded-full bg-mint-deep text-white flex items-center justify-center hover:scale-105 transition"
                  aria-label="Send"
                >
                  <Send className="size-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
