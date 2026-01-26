"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  CheckCircleIcon,
  MailCheckIcon,
  MailIcon,
  MicroscopeIcon,
} from "lucide-react";

type Status = "idle" | "submitting" | "success";

export function NewsletterSignup() {
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Mock 3s API call
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setStatus("success");
  };

  return (
    <div className="not-prose my-8" style={{ perspective: 1000 }}>
      <AnimatePresence mode="wait">
        {status !== "success" ? (
          <motion.div
            key="form"
            initial={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ transformStyle: "preserve-3d" }}
            className="rounded-lg border bg-stone-100 p-6 shadow-2xl lg:p-12"
          >
            <p className="mb-4 flex items-center justify-center">
              <span className="inline-flex items-center rounded-full bg-blue-100 p-3">
                <MicroscopeIcon className="size-8 stroke-[1.5px]" />
              </span>
            </p>
            <h3 className="text-center text-2xl font-bold">Hungry for more science?</h3>
            <p className="text-muted-foreground mt-1 text-center">
              Get the latest food science discoveries delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="mx-auto mt-4 flex max-w-lg gap-2">
              <Input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck={false}
                inputMode="email"
                placeholder="your@email.com"
                required
                disabled={status === "submitting"}
                className="bg-background flex-1"
              />
              <Button type="submit" disabled={status === "submitting"}>
                {status === "submitting" ? (
                  <>
                    <Spinner />
                    Processing...
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ rotateX: -90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            style={{ transformStyle: "preserve-3d" }}
            className="rounded-lg border bg-stone-100 p-6 shadow-2xl lg:p-12"
          >
            <div className="mx-auto max-w-md text-pretty">
              <p className="mb-4 flex items-center justify-center">
                <span className="inline-flex items-center rounded-full bg-white p-3">
                  <motion.span
                    initial={{
                      scale: 0.25,
                      opacity: 0,
                      y: -100,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      y: 0,
                    }}
                  >
                    <MailIcon className="size-8 stroke-gray-600 stroke-2" />
                  </motion.span>
                </span>
              </p>
              <h3 className="text-center text-2xl font-bold">Delicious!</h3>
              <p className="text-muted-foreground mt-1 text-center leading-snug">
                You’re now subscribed to our newsletter. Check your inbox for a welcome treat.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Spinner() {
  return (
    <svg className="size-4 animate-spin" viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}
