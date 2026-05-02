import Image from "next/image";
import { Mouse } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-start justify-center overflow-hidden bg-surface-container pt-32 md:pt-40"
    >
      <div className="absolute inset-0 z-0">
        <Image
          alt="A beautiful proposal at sunset"
          className="w-full h-full object-cover object-center opacity-70"
          src="/pedida.png"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 80vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/40 via-transparent to-background"></div>
      </div>

      <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto flex flex-col">
        <span className="text-label-md text-on-surface-variant uppercase tracking-widest mb-6 block">
          ¡Nos casamos!
        </span>
        <h1 className="font-noto-serif text-5xl md:text-display-lg text-primary mb-8 leading-tight">
          Aitana{" "}
          <span className="font-noto-serif italic text-primary/80">&amp;</span>{" "}
          Israel
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-3xl mx-auto mb-12">
          Y nos encantaría celebrarlo con vosotros el próximo 28 de Agosto de
          2026.
          <br className="hidden md:block" />
          <span className="hidden md:inline">
            Acompáñanos en este día inolvidable lleno de alegría, risas y
            hermosos recuerdos.
          </span>
        </p>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <Mouse size={36} className="text-on-surface-variant" />
      </div>
    </section>
  );
}
