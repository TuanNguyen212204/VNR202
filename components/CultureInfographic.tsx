"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, Building2, Globe2, Heart } from "lucide-react";
import { cultureContent } from "@/lib/presentation-content";
import { LotusIcon } from "@/components/ui/decorations/LotusIcon";

const nodeIcons = [BookOpen, Heart, Building2, Globe2];

const nodePositions = [
  { x: 140, y: 28, labelX: 140, labelY: 12 },
  { x: 252, y: 140, labelX: 268, labelY: 144 },
  { x: 140, y: 252, labelX: 140, labelY: 272 },
  { x: 28, y: 140, labelX: 12, labelY: 144 },
];

export function CultureInfographic() {
  const reduced = useReducedMotion();
  const branches = cultureContent.infographicBranches;

  return (
    <div className="flex h-full min-h-[320px] items-center justify-center p-4 illustration-variant-culture">
      <svg viewBox="0 0 280 280" className="h-full w-full max-h-[360px] max-w-[360px]">
        <circle cx="140" cy="140" r="108" fill="none" stroke="#7B1E2E" strokeWidth="1" opacity="0.15" />
        <circle cx="140" cy="140" r="78" fill="none" stroke="#7B1E2E" strokeWidth="1" opacity="0.12" />

        {branches.map((_, i) => {
          const pos = nodePositions[i];
          return (
            <motion.line
              key={`line-${i}`}
              x1="140"
              y1="140"
              x2={pos.x}
              y2={pos.y}
              stroke="#F5C518"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.55 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 + 0.2 }}
            />
          );
        })}

        <motion.g
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={reduced ? "" : "animate-infographic-pulse"}
          style={{ transformOrigin: "140px 140px" }}
        >
          <circle cx="140" cy="140" r="48" fill="rgba(123,30,46,0.1)" stroke="#7B1E2E" strokeWidth="2" />
          <foreignObject x="118" y="108" width="44" height="44">
            <div className="flex h-full w-full items-center justify-center">
              <LotusIcon size={36} />
            </div>
          </foreignObject>
          <text x="140" y="158" textAnchor="middle" fill="#7B1E2E" fontSize="10" fontWeight="bold">
            Văn hóa
          </text>
          <text x="140" y="172" textAnchor="middle" fill="#7B1E2E" fontSize="10" fontWeight="bold">
            Con người
          </text>
        </motion.g>

        {branches.map((label, i) => {
          const pos = nodePositions[i];
          const Icon = nodeIcons[i];
          return (
            <motion.g
              key={label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
            >
              <motion.g
                animate={reduced ? undefined : { y: [0, -5, 0] }}
                transition={{
                  duration: 3.5 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              >
                <circle cx={pos.x} cy={pos.y} r="22" fill="white" fillOpacity="0.7" stroke="#F5C518" strokeWidth="2" />
                <foreignObject x={pos.x - 10} y={pos.y - 10} width="20" height="20">
                  <div className="flex h-full w-full items-center justify-center text-burgundy">
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </div>
                </foreignObject>
              </motion.g>
              <text
                x={pos.labelX}
                y={pos.labelY}
                textAnchor="middle"
                fill="#2C1810"
                fontSize="8.5"
                fontWeight="600"
              >
                {label.split(" ").length > 3
                  ? label.split(" ").slice(0, 2).join(" ")
                  : label}
              </text>
              {label.split(" ").length > 3 && (
                <text
                  x={pos.labelX}
                  y={pos.labelY + 10}
                  textAnchor="middle"
                  fill="#2C1810"
                  fontSize="8.5"
                  fontWeight="600"
                >
                  {label.split(" ").slice(2).join(" ")}
                </text>
              )}
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
