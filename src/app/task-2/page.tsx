"use client";

import { motion, Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

// Note: metadata must be exported from a Server Component.
// For client components, set metadata in a separate layout.tsx or use generateMetadata in parent.

const reveal: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: (i: number) => ({
    clipPath: "inset(0 0% 0 0)",
    transition: {
      delay: i * 0.1,
      duration: 1,
      ease: "easeOut",
    },
  }),
};

const content = `
  # Task 2: SVG Stripe Animation

  The SVG stripes use \`fill\` (solid shapes). To avoid modifying the SVG source I used \`clipPath\` with \`inset()\`, which creates a reveal effect:

  - \`inset(0 100% 0 0)\` — fully clipped (hidden)
  - \`inset(0 0% 0 0)\` — no clipping (visible)

  Animating the right inset from 100% → 0% reveals the shape left-to-right.
  `;

export default function Page() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-center gap-12 p-8">
      <div className="relative flex size-full min-h-[80dvh] flex-1 items-center justify-center overflow-hidden rounded-[48px] bg-linear-0 from-[#0a1944] from-10% to-[#2493ff] to-100%">
        <Image
          src="/img/xerox_scan.webp"
          width={1024}
          height={1024}
          alt="visual noise"
          className="absolute top-0 right-0 bottom-0 left-0 size-full opacity-40 mix-blend-luminosity brightness-125"
        />

        <motion.div className="absolute top-0 right-0 bottom-0 left-0 z-0">
          <motion.svg
            className="h-full w-[120%]"
            width="1401"
            height="760"
            viewBox="0 0 1401 760"
            fill="none"
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M1127.83 -899.985L1078.63 -1016.77L540.815 553.942L-681.57 31.322L-637.264 135.165L539.676 568.559L1127.83 -899.964V-899.985Z"
              fill="#05163D"
              variants={reveal}
              custom={1}
            ></motion.path>
            <motion.path
              d="M538.536 584.339L-592.514 239.917L-547.956 344.31L537.029 604.033L1224.65 -670.364L1176.75 -784.043L538.536 584.339Z"
              fill="#05163D"
              variants={reveal}
              custom={2}
            ></motion.path>
            <motion.path
              d="M-503.438 448.637L-456.543 558.509L534.036 642.615L1314.82 -456.291L1273.76 -553.746L535.774 619.812C302.866 581.249 -503.438 448.637 -503.438 448.637Z"
              fill="#05163D"
              variants={reveal}
              custom={3}
            ></motion.path>
            <motion.path
              d="M1371.67 -321.311L532.323 664.678L-416.673 652.579L-370.841 760.144L530.507 688.053L1419.94 -206.764L1371.67 -321.311Z"
              fill="#05163D"
              variants={reveal}
              custom={4}
            ></motion.path>
            <motion.path
              d="M1468.35 -91.8551L528.823 710.161L-326.809 862.594L-282.464 966.5L526.331 742.335L1519.03 28.4238L1468.33 -91.8975L1468.35 -91.8551Z"
              fill="#05163D"
              variants={reveal}
              custom={5}
            ></motion.path>
            <motion.path
              d="M-237.269 1069.94C-225.873 1097.33 -193.464 1171.84 -193.464 1171.84L521.058 811.211L1615.2 256.67L1566.43 141.087L524.033 772.542L-237.211 1069.92L-237.269 1069.96V1069.94Z"
              fill="#05163D"
              variants={reveal}
              custom={6}
            ></motion.path>
            <motion.path
              d="M1712.48 487.52C1701.49 461.121 1664.62 372.487 1664.62 372.487L518.122 849.416L-149.661 1278.47L-105.49 1380.94L514.471 897.222L1712.58 487.541L1712.5 487.478L1712.48 487.52Z"
              fill="#05163D"
              variants={reveal}
              custom={7}
            ></motion.path>
          </motion.svg>
        </motion.div>

        <div className="z-10 flex max-w-xl flex-col items-center gap-y-8">
          <h1 className="font-display flex flex-col text-[250px] leading-[200px] font-bold text-white uppercase italic">
            <span className="ml-14">Arbitrum</span>
            <span>Everywhere</span>
          </h1>
          <p className="w-full flex-1 text-center text-[28px] leading-8 font-medium tracking-wide text-pretty text-white/75">
            From apps to chains, Arbitrum delivers the performance and tooling your business needs
            to launch faster and scale further.
          </p>
          <p className="mt-4 flex w-full flex-1 gap-x-4">
            <button className="flex-1 rounded-full bg-black px-4 py-3 text-lg font-medium text-white">
              Build an App
            </button>
            <button className="flex-1 rounded-full bg-black px-4 py-3 text-lg font-medium text-white">
              Launch a Chain
            </button>
          </p>
        </div>
      </div>

      <nav className="w-full max-w-prose">
        <Link href="/" className="px-3 py-2 font-bold outline-2">
          ← Back
        </Link>
      </nav>
      <article className="prose prose-lg max-w-2xl">
        <Markdown>{content}</Markdown>
      </article>
    </main>
  );
}
