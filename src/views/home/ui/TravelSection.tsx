import {
  Bus,
  Car,
  Phone,
  Mail,
  MapPin,
  Clock,
  RotateCcw,
  Home,
  CreditCard,
  Info,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

const accommodations = [
  {
    name: "Hotel Francisco II",
    type: "hotel",
    address: "Calle de Juan Manuel Bedoya, 17, 32004 Ourense",
    phone: "988 24 20 95",
    email: "hfranciscoii@gmail.com",
    website: "https://www.hotelfrancisco.net/",
    amenities: ["Garaje disponible (10€/coche y noche)", "Sólo Alojamiento"],
    cancellation: "Consultar política de cancelación",
    rooms: [
      {
        name: "Habitación Individual",
        price: "58€",
        period: "por noche",
        description: "",
        availability: "",
      },
      {
        name: "Habitación Doble",
        price: "74€",
        period: "por noche",
        description: "",
        availability: "",
      },
      {
        name: "Habitación Triple",
        price: "88€",
        period: "por noche",
        description: "",
        availability: "",
      },
    ],
    notes: [
      "No hay mínimo de noches",
      "Garaje: 10€ por coche y noche",
      "Disponen de aire acondicionado",
      "Sólo Alojamiento",
    ],
    image: "/hotel_francisco_II.png",
  },
  {
    name: "Hotel Miño",
    type: "hotel",
    rating: 1,
    address: "Rúa Papa Juan XXIII, 2, 32003 Ourense",
    phone: "988 21 75 94",
    email: "recepcion@hmourense.com",
    website: "https://hmourense.com/",
    checkIn: "15:30",
    checkOut: "12:00",
    minNights: 2,
    amenities: [
      "Ventilador de techo (sin aire acondicionado)",
      "Parking público con acuerdo (16.50€/24h)",
    ],
    cancellation: "Cancelación gratuita hasta 10 días antes del check-in",
    rooms: [
      {
        name: "Doble 2 camas gemelas (0.90m) con balcón",
        price: "61.20€",
        period: "por noche",
        description: "",
        availability: "",
      },
      {
        name: "Doble cama matrimonio (1.50m) con balcón",
        price: "61.20€",
        period: "por noche",
        description: "",
        availability: "",
      },
      {
        name: "Doble 2 camas gemelas (0.90m) patio interior",
        price: "52.20€",
        period: "por noche",
        description: "",
        availability: "",
      },
      {
        name: "Doble cama matrimonio (1.50m) patio interior",
        price: "52.20€",
        period: "por noche",
        description: "",
        availability: "",
      },
      {
        name: "Individual exterior con ventana a la calle",
        price: "41.40€",
        period: "por noche",
        description: "",
        availability: "",
      },
    ],
    notes: [
      "Estancia mínima de 2 noches (fin de semana obligatorio)",
      "No tiene aire acondicionado, pero todas las habitaciones tienen ventilador de techo",
      "Parking público Juan XXIII justo delante (16.50€/24h con acuerdo)",
    ],
    image: "/hotel_miño.jpg",
  },
  {
    name: "Casa Miño (Apartamentos)",
    type: "apartment",
    address: "Rúa Ervedelo, 3, 32003 Ourense",
    phone: "988 21 75 94",
    email: "recepcion@hmourense.com",
    website: "https://booking.avirato.com/",
    checkIn: "16:00",
    checkOut: "11:00",
    minNights: 2,
    amenities: [
      "Aire acondicionado",
      "Cocina equipada",
      "Nevera",
      "Microondas",
      "Menaje completo",
      "Parking público con acuerdo (16.50€/24h)",
    ],
    cancellation: "Cancelación gratuita hasta 10 días antes del check-in",
    rooms: [
      {
        name: "Apartamento 6 personas (2 dormitorios + 2 baños)",
        description:
          "2 dormitorios con 2 camas individuales cada uno + 2 camas en salón (zona abierta)",
        price: "162.00€",
        period: "por noche",
        availability: "1 disponible",
      },
      {
        name: "Apartamento 5 personas (1 dormitorio + 1 baño)",
        description:
          "1 dormitorio con 3 camas individuales + 2 camas en salón (zona abierta)",
        price: "144.00€",
        period: "por noche",
        availability: "1 disponible",
      },
      {
        name: "Apartamento 4 personas tipo loft (4 camas individuales)",
        description:
          "Todo en la misma estancia, baño privado dentro del apartamento",
        price: "135.00€",
        period: "por noche",
        availability: "1 disponible",
      },
      {
        name: "Apartamento 4 personas tipo loft (matrimonio + 2 individuales)",
        description:
          "Todo en la misma estancia, baño privado dentro del apartamento",
        price: "135.00€",
        period: "por noche",
        availability: "1 disponible",
      },
      {
        name: "Apartamento 2 personas tipo loft (cama matrimonio)",
        description:
          "Todo en la misma estancia, baño privado dentro del apartamento",
        price: "99.00€",
        period: "por noche",
        availability: "3 disponibles",
      },
    ],
    notes: [
      "Estancia mínima de 2 noches (fin de semana obligatorio)",
      "Todos los apartamentos con cocina, nevera, microondas y menaje completo",
      "Disponen de aire acondicionado",
      "Misma opción de parking que el Hotel Miño",
    ],
    image: "/apartamento_miño.jpeg",
  },
];

export function TravelSection() {
  return (
    <section id="travel" className="py-12 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-noto-serif text-4xl md:text-5xl text-primary mb-4 italic">
            Transporte y Alojamiento
          </h2>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-noto-serif text-3xl text-secondary mb-4">
              Cómo llegar
            </h3>
            <div className="w-16 h-px bg-secondary/30 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-surface/80 backdrop-blur-sm rounded-lg p-8 md:p-12 flex flex-col justify-center items-center text-center shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Bus className="text-primary w-8 h-8" />
              </div>
              <h4 className="font-noto-serif text-2xl text-primary mb-4">
                Servicio de Autobús
              </h4>
              <p className="font-sans text-base text-on-surface-variant mb-8">
                Para tu comodidad, hemos organizado un servicio de autobús
                gratuito. Por favor, reserva tu asiento al confirmar tu
                asistencia.
              </p>
              <div className="space-y-3 font-sans text-sm text-on-surface-variant/80">
                <p className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" />
                  Horario: 17:30h desde Ourense
                </p>
                <p className="flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Salida: Parque de San Lázaro
                </p>
                <p className="flex items-center justify-center gap-2">
                  <RotateCcw className="w-4 h-4" />
                  Regreso: 01:00h y 05:00h
                </p>
              </div>
            </div>

            <div className="bg-surface/80 backdrop-blur-sm rounded-lg p-8 md:p-12 flex flex-col justify-center items-center text-center shadow-sm border border-secondary/10 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <Car className="text-secondary w-8 h-8" />
              </div>
              <h4 className="font-noto-serif text-2xl text-secondary mb-4">
                En Coche
              </h4>
              <p className="font-sans text-base text-on-surface-variant mb-8">
                Si prefieres conducir, hay amplio aparcamiento gratuito
                disponible en el lugar.
              </p>
              <div className="space-y-3 font-sans text-sm text-on-surface-variant/80">
                <p className="flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Aparcamiento gratuito en el lugar
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" />
                  30 minutos desde Ourense centro
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Bus className="w-4 h-4" />
                  Consulta con nosotros la dirección
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <h3 className="font-noto-serif text-3xl text-primary mb-4">
              Dónde dormir
            </h3>
            <div className="w-16 h-px bg-primary/30 mx-auto mb-6" />
            <p className="font-sans text-base text-on-surface-variant max-w-2xl mx-auto">
              Hemos negociado tarifas especiales para los invitados de nuestra
              boda. Menciona que vienes a la boda de Aitana e Isra (28/08/2026)
              al hacer la reserva.
            </p>
          </div>

          <div className="space-y-12">
            {accommodations.map((acc) => (
              <div
                key={acc.name}
                className="bg-surface rounded-lg overflow-hidden shadow-sm border border-primary/10 hover:shadow-md transition-all duration-300"
              >
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className="aspect-[4/3] lg:aspect-auto lg:h-full w-full relative overflow-hidden bg-primary/5">
                    <Image
                      alt={acc.name}
                      className="object-cover w-full h-full"
                      src={acc.image}
                      width={400}
                      height={300}
                    />
                    <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur text-primary px-3 py-1 rounded-full text-xs font-medium shadow-sm flex items-center gap-1">
                      {acc.type === "hotel" ? (
                        <Home className="w-3 h-3" />
                      ) : (
                        <Home className="w-3 h-3" />
                      )}
                      {acc.type === "hotel" ? "Hotel" : "Apartamentos"}
                    </div>
                  </div>

                  <div className="lg:col-span-2 p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div>
                        <h4 className="font-noto-serif text-2xl text-primary mb-2">
                          {acc.name}
                        </h4>
                        <p className="flex items-start gap-2 text-sm text-on-surface-variant/80">
                          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          {acc.address}
                        </p>
                      </div>
                      <a
                        href={acc.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline whitespace-nowrap"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Ver web
                      </a>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-6 p-4 bg-surface-container/50 rounded-lg">
                      <a
                        href={`tel:${acc.phone.replace(/\s/g, "")}`}
                        className="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        {acc.phone}
                      </a>
                      <a
                        href={`mailto:${acc.email}`}
                        className="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        {acc.email}
                      </a>
                    </div>

                    {(acc.checkIn || acc.checkOut) && (
                      <div className="flex flex-wrap gap-4 mb-6 text-sm text-on-surface-variant">
                        {acc.checkIn && (
                          <p className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-secondary" />
                            Check-in: {acc.checkIn}
                          </p>
                        )}
                        {acc.checkOut && (
                          <p className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-secondary" />
                            Check-out: {acc.checkOut}
                          </p>
                        )}
                      </div>
                    )}

                    <div className="mb-6">
                      <h5 className="font-noto-serif text-lg text-primary mb-4 flex items-center gap-2">
                        <CreditCard className="w-4 h-4" />
                        Habitaciones y Precios
                      </h5>
                      <div className="space-y-3">
                        {acc.rooms.map((room, idx) => (
                          <div
                            key={idx}
                            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 bg-surface-container/30 rounded-lg"
                          >
                            <div className="flex-1">
                              <p className="font-medium text-on-surface text-sm">
                                {room.name}
                              </p>
                              {room.description ? (
                                <p className="text-xs text-on-surface-variant/70 mt-1">
                                  {room.description}
                                </p>
                              ) : null}
                              {room.availability ? (
                                <p className="text-xs text-secondary mt-1">
                                  {room.availability}
                                </p>
                              ) : null}
                            </div>
                            <div className="text-right">
                              <span className="font-noto-serif text-lg text-primary font-semibold">
                                {room.price}
                              </span>
                              <span className="text-xs text-on-surface-variant/70 block">
                                {room.period}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {acc.notes.map((note, idx) => (
                        <p
                          key={idx}
                          className="flex items-start gap-2 text-sm text-on-surface-variant"
                        >
                          <Info className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          {note}
                        </p>
                      ))}
                    </div>

                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                      <p className="flex items-start gap-2 text-sm text-on-surface-variant">
                        <RotateCcw className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>
                          <strong className="text-primary">
                            Política de cancelación:
                          </strong>{" "}
                          {acc.cancellation}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
