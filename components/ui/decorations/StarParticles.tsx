import { RedStar } from "./RedStar";

const particles = [
  { top: "12%", left: "8%", delay: "0s", size: 14 },
  { top: "25%", left: "85%", delay: "1s", size: 18 },
  { top: "45%", left: "15%", delay: "2s", size: 12 },
  { top: "60%", left: "75%", delay: "0.5s", size: 16 },
  { top: "18%", left: "55%", delay: "1.5s", size: 10 },
  { top: "70%", left: "40%", delay: "2.5s", size: 14 },
  { top: "35%", left: "92%", delay: "3s", size: 12 },
  { top: "80%", left: "10%", delay: "1.2s", size: 16 },
  { top: "50%", left: "50%", delay: "0.8s", size: 10 },
  { top: "8%", left: "70%", delay: "2.2s", size: 12 },
];

export function StarParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute animate-float-star"
          style={{
            top: p.top,
            left: p.left,
            animationDelay: p.delay,
            animationDuration: `${3.5 + (i % 3)}s`,
          }}
        >
          <RedStar size={p.size} className="opacity-60" />
        </div>
      ))}
    </div>
  );
}
