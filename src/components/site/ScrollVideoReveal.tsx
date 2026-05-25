import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import videoSrc from "@/assets/videos/IMG_7145.webm";

type PopupItem = {
  title: string;
  subtitle: string;
  delay: number;
  desktop: {
    top: string;
    left: string;
  };
  mobile: {
    top: string;
    left: string;
  };
  initial: {
    opacity: number;
    x?: number;
    y?: number;
    scale?: number;
  };
  className: string;
  titleClassName: string;
  subtitleClassName: string;
};

const POPUPS: PopupItem[] = [
  {
    title: "Bills & Utilities",
    subtitle: "Pay in seconds",
    delay: 0.35,
    desktop: { top: "14%", left: "34%" },
    mobile: { top: "15%", left: "28%" },
    initial: { opacity: 0, y: -24, scale: 0.9 },
    className: "bg-gradient-to-r from-mint to-mint-deep",
    titleClassName: "text-ink",
    subtitleClassName: "text-ink/70",
  },
  {
    title: "Save smarter",
    subtitle: "Up to 14% p.a. returns",
    delay: 0.6,
    desktop: { top: "18%", left: "66%" },
    mobile: { top: "15%", left: "72%" },
    initial: { opacity: 0, x: 28 },
    className: "bg-mint",
    titleClassName: "text-ink",
    subtitleClassName: "text-ink/60",
  },
  {
    title: "24/7 Support",
    subtitle: "Always here to help",
    delay: 0.85,
    desktop: { top: "38%", left: "84%" },
    mobile: { top: "34%", left: "84%" },
    initial: { opacity: 0, x: 28 },
    className: "bg-white",
    titleClassName: "text-ink",
    subtitleClassName: "text-ink/60",
  },
  {
    title: "Track expenses",
    subtitle: "Smart budgeting tools",
    delay: 1.1,
    desktop: { top: "60%", left: "82%" },
    mobile: { top: "56%", left: "82%" },
    initial: { opacity: 0, y: 24 },
    className: "bg-primary",
    titleClassName: "text-primary-foreground",
    subtitleClassName: "text-primary-foreground/70",
  },
  {
    title: "Secure & Protected",
    subtitle: "Bank-level encryption",
    delay: 1.35,
    desktop: { top: "78%", left: "68%" },
    mobile: { top: "70%", left: "74%" },
    initial: { opacity: 0, y: 24, scale: 0.92 },
    className: "bg-primary",
    titleClassName: "text-primary-foreground",
    subtitleClassName: "text-primary-foreground/70",
  },
  {
    title: "Cashback rewards",
    subtitle: "Earn on every purchase",
    delay: 1.6,
    desktop: { top: "72%", left: "24%" },
    mobile: { top: "64%", left: "18%" },
    initial: { opacity: 0, y: 24 },
    className: "bg-white",
    titleClassName: "text-ink",
    subtitleClassName: "text-ink/60",
  },
  {
    title: "Pay everywhere",
    subtitle: "QR, cards, bills & more",
    delay: 1.85,
    desktop: { top: "50%", left: "14%" },
    mobile: { top: "46%", left: "14%" },
    initial: { opacity: 0, x: -28 },
    className: "bg-white",
    titleClassName: "text-ink",
    subtitleClassName: "text-ink/60",
  },
  {
    title: "Send money instantly",
    subtitle: "Free Raast transfers",
    delay: 2.1,
    desktop: { top: "30%", left: "18%" },
    mobile: { top: "28%", left: "14%" },
    initial: { opacity: 0, x: -28 },
    className: "bg-white",
    titleClassName: "text-ink",
    subtitleClassName: "text-ink/60",
  },
];

export function ScrollVideoReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Video slides up from bottom (0.2-0.5)
  const videoY = useTransform(scrollYProgress, [0.2, 0.5], ["100%", "0%"]);
  
  // Text moves up and fades out (0.15-0.4)
  const textY = useTransform(scrollYProgress, [0.15, 0.4], ["0%", "-30%"]);
  const textOpacity = useTransform(scrollYProgress, [0.15, 0.4], [1, 0]);
  
  // Video opacity
  const videoOpacity = useTransform(scrollYProgress, [0.2, 0.35, 0.75, 0.9], [0, 1, 1, 0]);
  
  // Content scale at the end
  const contentScale = useTransform(scrollYProgress, [0.7, 0.9], [1, 0.95]);

  // Play video when it becomes visible
  useEffect(() => {
    const unsubscribe = videoOpacity.on("change", (latest) => {
      if (videoRef.current) {
        if (latest > 0.5) {
          // Video is visible, play it
          videoRef.current.play().catch(() => {
            // Handle autoplay restrictions
          });
        } else {
          // Video is not visible, pause and reset
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }
    });

    return () => unsubscribe();
  }, [videoOpacity]);

  return (
    <div ref={containerRef} className="relative h-[250vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-primary"
      >
        {/* Animated blob background */}
        <motion.div
          aria-hidden
          className="absolute -top-20 -right-20 size-80 rounded-full bg-mint/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Text content - moves up and fades */}
        <motion.div 
          style={{ y: textY, opacity: textOpacity }}
          className="absolute inset-0 flex items-center justify-center z-10 text-center px-6"
        >
          <div className="max-w-3xl">
            <h2 className="text-[38px] md:text-[62px] font-semibold text-primary-foreground">
              Your everyday money, made <em className="not-italic text-mint">easy</em>.
            </h2>
            <p className="mt-6 text-xl text-primary-foreground/70 max-w-xl mx-auto">
              Download easypaisa and open your account in under two minutes — all you need is your CNIC.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <motion.a 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.97 }} 
                href="#" 
                className="rounded-full bg-mint text-ink px-7 py-3.5 font-semibold"
              >
                Download for iOS
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.97 }} 
                href="#" 
                className="rounded-full border border-white/30 px-7 py-3.5 font-semibold text-primary-foreground hover:bg-white/10 transition"
              >
                Download for Android
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Video - slides up from bottom */}
        <motion.div
          style={{ 
            y: videoY, 
            scale: contentScale,
            opacity: videoOpacity
          }}
          className="absolute inset-0 flex items-center justify-center z-20"
        >
          <div className="relative w-full h-full max-w-7xl mx-auto px-6 flex items-center justify-center">
            {/* Video with rounded corners */}
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl">
              {/* Video */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                muted
                playsInline
              >
                <source src={videoSrc} type="video/webm" />
              </video>
            </div>

            {/* Floating text labels - desktop oval */}
            {POPUPS.map((popup) => (
              <motion.div
                key={`${popup.title}-desktop`}
                initial={popup.initial}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: popup.delay, duration: 0.55 }}
                className={`absolute z-30 hidden w-[188px] -translate-x-1/2 -translate-y-1/2 rounded-2xl px-4 py-3 shadow-xl md:block ${popup.className}`}
                style={{
                  top: popup.desktop.top,
                  left: popup.desktop.left,
                }}
              >
                <p className={`text-sm font-semibold leading-tight ${popup.titleClassName}`}>
                  {popup.title}
                </p>
                <p className={`mt-1 text-xs leading-tight ${popup.subtitleClassName}`}>
                  {popup.subtitle}
                </p>
              </motion.div>
            ))}

            {/* Floating text labels - mobile oval */}
            {POPUPS.map((popup) => (
              <motion.div
                key={`${popup.title}-mobile`}
                initial={popup.initial}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: popup.delay, duration: 0.55 }}
                className={`absolute z-30 w-[118px] -translate-x-1/2 -translate-y-1/2 rounded-xl px-2.5 py-2 shadow-xl md:hidden ${popup.className}`}
                style={{
                  top: popup.mobile.top,
                  left: popup.mobile.left,
                }}
              >
                <p className={`text-[11px] font-semibold leading-tight ${popup.titleClassName}`}>
                  {popup.title}
                </p>
                <p className={`mt-1 text-[10px] leading-tight ${popup.subtitleClassName}`}>
                  {popup.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
