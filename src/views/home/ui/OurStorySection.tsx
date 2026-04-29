import Image from "next/image";

const timelineItems = [
  {
    date: "2017",
    title: "El Primer Hola",
    description:
      "Lo que comenzó como una semana de vacaciones en Nigrán, se convirtió en una historia llena de complicidad, amor, muchos kilómetros y muchas historias juntos que no han hecho más que empezar.",
    image: "/2017.jpg",
    aspectRatio: "aspect-[5/5]",
  },
  {
    date: "2020",
    title: "Construyendo un Hogar",
    description:
      "Nuestro salto a la vida en común y a crear nuestro hogar se vio frustrado por la pandemia, pero en cuanto las circunstancias nos dejaron, dejamos los viajes atrás (al menos temporalmente) y comenzamos esa vida en común en Vigo. ",
    image: "/2020.jpg",
    aspectRatio: "aspect-[2/2]",
  },
  {
    date: "2023",
    title: "Nuestras Aventuras",
    description:
      "Uno de nuestros hobbies favoritos es escaparnos con la moto, como en esta Ruta de los Faros, en la que disfrutamos un montón y de la que tenemos muy buenos recuerdos.",
    image: "/2023.jpg",
    aspectRatio: "aspect-square",
  },
  {
    date: "2025",
    title: "El Compromiso",
    description: (
      <>
        En nuestro último viaje a la Manga, disfrutando de un precioso
        atardecer, nuestro otro hobbie favorito, vivimos nuestro momento más
        especial hasta la fecha.
        <br />
        <br />
        El siguiente lo compartiremos con toda nuestra gente.
      </>
    ),
    image: "/2025.jpg",
    aspectRatio: "aspect-5/5]",
  },
];

export function OurStorySection() {
  return (
    <section id="our-story" className="py-12 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-noto-serif text-4xl md:text-5xl text-primary mb-4 italic">
            Nuestra Historia
          </h2>
          <p className="font-sans text-lg text-on-surface-variant max-w-6xl mx-auto">
            Desde un encuentro casual hasta una vida llena de aventuras
            compartidas.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />

          {timelineItems.map((item, index) => (
            <div
              key={item.date}
              className={`flex flex-col md:flex-row justify-between items-center w-full mb-16 relative ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-primary z-10 shadow-sm" />

              <div className="w-full md:w-[45%] mb-6 md:mb-0">
                <div
                  className={`${item.aspectRatio} w-full overflow-hidden shadow-lg border-8 border-white rounded-[40%_60%_70%_30%/40%_50%_60%_50%] hover:rounded-[50%_50%_40%_60%/50%_40%_60%_40%] transition-all duration-500`}
                >
                  <Image
                    alt={item.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                    src={item.image}
                    width={400}
                    height={500}
                  />
                </div>
              </div>

              <div
                className={`w-full md:w-[45%] flex flex-col justify-center text-center md:text-left bg-white/60 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-sm border border-white ${
                  index % 2 === 1 ? "md:text-right md:pr-12" : "md:pl-12"
                }`}
              >
                <span className="text-label-sm text-secondary mb-2 uppercase tracking-widest">
                  {item.date}
                </span>
                <h3 className="font-noto-serif text-2xl text-primary mb-4">
                  {item.title}
                </h3>
                <p className="font-sans text-base text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 bg-white/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-sm border border-white relative">
          <h2 className="font-noto-serif text-xl md:text-2xl text-primary italic">
            &ldquo;Pase lo que pase, te elegiré. Te elegiré una y otra vez, sin
            dudarlo, sin pensarlo&rdquo;
          </h2>
        </div>
      </div>
    </section>
  );
}
