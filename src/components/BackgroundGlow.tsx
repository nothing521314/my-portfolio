"use client";

export default function BackgroundGlow() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden pointer-events-none">
      <div className="absolute rounded-full blur-[120px] opacity-15 mix-blend-screen transition-all duration-1000 ease top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[radial-gradient(circle,#6366f1_0%,rgba(99,102,241,0)_70%)] animate-blob1" />
      <div className="absolute rounded-full blur-[120px] opacity-15 mix-blend-screen transition-all duration-1000 ease bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[radial-gradient(circle,#06b6d4_0%,rgba(6,182,212,0)_70%)] animate-blob2" />
      <div className="absolute rounded-full blur-[120px] opacity-10 mix-blend-screen transition-all duration-1000 ease top-[40%] left-[30%] w-[40vw] h-[40vw] bg-[radial-gradient(circle,#ec4899_0%,rgba(236,72,153,0)_70%)] animate-blob3" />
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-size-[50px_50px] bg-center"
        style={{
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)",
        }}
      />
    </div>
  );
}
