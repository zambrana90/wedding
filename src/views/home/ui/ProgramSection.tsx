import Image from "next/image";

export function ProgramSection() {
  return (
    <section id="program" className="py-12 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-noto-serif text-4xl md:text-5xl text-primary mb-4 italic">
          La Celebración
        </h2>
      </div>

      <div className="bg-surface p-4 md:p-8 rounded-xl shadow-lg border border-secondary/20">
        <div className="relative w-full overflow-hidden rounded-lg">
          <Image
            alt="Illustrated timeline of the wedding day events"
            className="w-full h-auto object-contain"
            src="/program.png"
            width={1200}
            height={800}
            priority
          />
        </div>
      </div>
    </section>
  );
}
