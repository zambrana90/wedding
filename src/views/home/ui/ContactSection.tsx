import { ExternalLink } from "lucide-react";

const GOOGLE_FORM_URL = "https://forms.gle/N4F472wMxLJ6qmmg7";

export function ContactSection() {
  return (
    <section id="form" className="py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-noto-serif text-4xl md:text-5xl text-primary mb-4 italic">
            Formulario Asistencia
          </h2>
        </div>

        <div className="bg-surface rounded-xl shadow-lg border border-primary/10 p-8 md:p-12 text-center">
          <div className="space-y-6">
            <p className="font-sans text-on-surface-variant">
              Haz clic en el botón de abajo para abrir el formulario de
              asistencia. Serás redirigido a Google Forms.
            </p>

            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-4 px-8 rounded-lg font-sans font-medium uppercase tracking-wider text-sm bg-primary text-on-primary hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              Abrir formulario de asistencia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
