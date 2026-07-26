"use client";

import { motion } from "framer-motion";

function FloatingOrb({
  size,
  x,
  y,
  delay,
  duration,
  color,
}: {
  size: number;
  x: string;
  y: string;
  delay: number;
  duration: number;
  color: string;
}) {
  return (
    <motion.div
      className="pointer-events-none absolute rounded-full blur-3xl"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: color,
      }}
      animate={{
        x: ["-5%", "5%", "-5%"],
        y: ["-5%", "8%", "-5%"],
        scale: [1, 1.1, 1],
        opacity: [0.4, 0.6, 0.4],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function GridLines() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.08]"
      style={{
        backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
        backgroundSize: "48px 48px",
      }}
    />
  );
}

function LekhaBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <FloatingOrb size={400} x="-10%" y="10%" delay={0} duration={14} color="rgba(124,107,255,0.25)" />
      <FloatingOrb size={320} x="70%" y="40%" delay={3} duration={16} color="rgba(157,151,201,0.18)" />
      <FloatingOrb size={280} x="30%" y="70%" delay={6} duration={13} color="rgba(124,107,255,0.15)" />
      <motion.div
        className="absolute right-[10%] top-[15%] h-2 w-2 rounded-full"
        style={{ backgroundColor: "var(--accent)" }}
        animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[15%] top-[35%] h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: "var(--accent)" }}
        animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />
      <motion.div
        className="absolute bottom-[25%] right-[25%] h-2 w-2 rounded-full"
        style={{ backgroundColor: "var(--accent)" }}
        animate={{ scale: [1, 1.7, 1], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      <GridLines />
    </div>
  );
}

function HomeSecurityLabBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <FloatingOrb size={350} x="60%" y="-10%" delay={0} duration={18} color="rgba(53,208,127,0.12)" />
      <FloatingOrb size={300} x="-5%" y="50%" delay={4} duration={16} color="rgba(111,154,128,0.1)" />
      <FloatingOrb size={250} x="40%" y="80%" delay={8} duration={20} color="rgba(53,208,127,0.08)" />
      <GridLines />
      {/* Terminal cursor blink */}
      <motion.div
        className="absolute left-[8%] top-[20%] font-mono text-xs"
        style={{ color: "var(--accent)" }}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
      >
        _
      </motion.div>
      <motion.div
        className="absolute right-[12%] top-[60%] font-mono text-xs"
        style={{ color: "var(--muted)" }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
      >
        [auth:ok]
      </motion.div>
      <motion.div
        className="absolute bottom-[20%] left-[15%] font-mono text-xs"
        style={{ color: "var(--muted)" }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1.2 }}
      >
        tunnel:up
      </motion.div>
    </div>
  );
}

function GingerBrosBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <FloatingOrb size={380} x="-5%" y="20%" delay={0} duration={15} color="rgba(221,107,26,0.12)" />
      <FloatingOrb size={300} x="65%" y="60%" delay={3} duration={17} color="rgba(226,201,155,0.25)" />
      <FloatingOrb size={260} x="30%" y="80%" delay={6} duration={14} color="rgba(221,107,26,0.1)" />
      {/* Bubbles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border"
          style={{
            width: 12 + i * 8,
            height: 12 + i * 8,
            left: `${15 + i * 14}%`,
            bottom: "-5%",
            borderColor: "var(--border)",
            opacity: 0.25,
          }}
          animate={{ y: [0, -800], opacity: [0.3, 0.1, 0] }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1.2,
          }}
        />
      ))}
    </div>
  );
}

function PassClassBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <FloatingOrb size={360} x="70%" y="10%" delay={0} duration={16} color="rgba(47,107,216,0.1)" />
      <FloatingOrb size={300} x="-5%" y="55%" delay={4} duration={18} color="rgba(95,107,122,0.12)" />
      <FloatingOrb size={240} x="45%" y="80%" delay={7} duration={15} color="rgba(47,107,216,0.08)" />
      <GridLines />
    </div>
  );
}

function AmberEnergyBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <FloatingOrb size={400} x="50%" y="-10%" delay={0} duration={15} color="rgba(245,179,1,0.12)" />
      <FloatingOrb size={320} x="-10%" y="50%" delay={3} duration={17} color="rgba(142,160,196,0.1)" />
      <FloatingOrb size={260} x="70%" y="75%" delay={6} duration={14} color="rgba(245,179,1,0.08)" />
      {/* Pulse rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/3 rounded-full border"
          style={{
            width: 100 + i * 80,
            height: 100 + i * 80,
            marginLeft: -(100 + i * 80) / 2,
            marginTop: -(100 + i * 80) / 2,
            borderColor: "var(--accent)",
          }}
          animate={{ scale: [1, 1.3], opacity: [0.3 - i * 0.08, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut",
            delay: i * 1,
          }}
        />
      ))}
    </div>
  );
}

function VRHelicopterBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <FloatingOrb size={380} x="60%" y="-5%" delay={0} duration={16} color="rgba(56,224,200,0.1)" />
      <FloatingOrb size={320} x="-5%" y="55%" delay={3} duration={18} color="rgba(111,151,164,0.1)" />
      <FloatingOrb size={260} x="40%" y="85%" delay={6} duration={15} color="rgba(56,224,200,0.08)" />
      <GridLines />
      {/* Connection nodes */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full"
          style={{
            backgroundColor: "var(--accent)",
            left: `${20 + i * 18}%`,
            top: `${30 + (i % 2) * 30}%`,
          }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
    </div>
  );
}

const backgrounds: Record<string, React.FC> = {
  lekha: LekhaBackground,
  "home-security-lab": HomeSecurityLabBackground,
  gingerbros: GingerBrosBackground,
  passclass: PassClassBackground,
  "amber-energy-hackathon": AmberEnergyBackground,
  "vr-helicopter-simulator": VRHelicopterBackground,
};

export function ProjectBackground({ slug }: { slug: string }) {
  const Background = backgrounds[slug] || LekhaBackground;
  return <Background />;
}
