"use client";

import { useRef, useState } from "react";
import { Heart } from "lucide-react";
import { WaveTransition } from "@/shared/ui/WaveTransition";
import { HomePage } from "@/views/home";
import Image from "next/image";

interface EnvelopePageProps {
  onOpen?: () => void;
}

export function EnvelopePage({ onOpen }: EnvelopePageProps) {
  const [opened, setOpened] = useState(false);
  const [waveActive, setWaveActive] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [hideEnvelope, setHideEnvelope] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const envelopeRef = useRef<HTMLDivElement>(null);
  const flapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const sealRef = useRef<HTMLDivElement>(null);

  function handleOpen() {
    if (opened) return;
    setOpened(true);
    onOpen?.();

    envelopeRef.current?.classList.add("stop-float");
    flapRef.current?.classList.add("open");
    sealRef.current?.classList.add("open");
    cardRef.current?.classList.add("open");

    setTimeout(() => {
      setShowMessage(true);
    }, 1000);

    setTimeout(() => {
      setWaveActive(true);
    }, 3000);

    setTimeout(() => {
      setShowHome(true);
    }, 4000);

    setTimeout(() => {
      setHideEnvelope(true);
    }, 4500);
  }

  return (
    <>
      {!hideEnvelope && (
        <div
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${showHome ? "opacity-0" : "opacity-100"}`}
        >
          <button
            onClick={handleOpen}
            className="cursor-pointer"
            aria-label="Open envelope"
          >
            <div
              ref={envelopeRef}
              className="floating-element relative w-[300px] sm:w-[400px] md:w-[500px] h-[200px] sm:h-[260px] md:h-[320px]"
              style={{ perspective: "1000px" }}
            >
              <div className="absolute inset-0 bg-surface-container rounded-DEFAULT shadow-md z-10"></div>

              <div
                ref={cardRef}
                className="card-insert absolute left-4 right-4 bottom-4 top-4 rounded-DEFAULT z-20 flex flex-col items-center justify-center overflow-hidden border-0"
              >
                <Image
                  src="/invitacion.png"
                  alt="Invitación de boda"
                  fill
                  priority
                  sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, 500px"
                  className={`w-full h-full object-contain transition-opacity duration-500 border-0 ${showMessage ? "opacity-100" : "opacity-0"}`}
                />
              </div>

              <div
                className="absolute bottom-0 left-0 right-0 h-2/3 bg-surface-container-highest rounded-b-DEFAULT z-30 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]"
                style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}
              ></div>

              <div
                ref={flapRef}
                className="flap absolute top-0 left-0 right-0 h-2/3 bg-surface-container-highest rounded-t-DEFAULT z-40 flex items-end justify-center pb-4 shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
                style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
              >
                <div
                  ref={sealRef}
                  className="wax-seal relative flex items-center justify-center transform translate-y-4"
                >
                  <Heart
                    className="w-16 h-16 text-primary fill-primary drop-shadow-md"
                    strokeWidth={0}
                  />
                  <span className="absolute font-noto-serif text-xs font-bold text-white">
                    A&amp;I
                  </span>
                </div>
              </div>
            </div>
          </button>

          <div className="absolute bottom-10 text-center w-full">
            <span className="font-label-sm text-label-sm text-on-surface-variant tracking-widest uppercase">
              {!opened && "Click en el sobre para abrir"}
            </span>
          </div>
        </div>
      )}

      <WaveTransition active={waveActive} />

      <div
        className={`main-content-reveal ${showHome ? "visible-content" : ""}`}
      >
        <HomePage />
      </div>
    </>
  );
}
