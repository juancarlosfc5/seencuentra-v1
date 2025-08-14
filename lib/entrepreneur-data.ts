import type { Entrepreneur } from "@/types"

interface EntrepreneurDetails extends Entrepreneur {
  shortDescription: string
  fullStory: string
  creativeProcess: string
}

const entrepreneurDetails: Record<string, Omit<EntrepreneurDetails, keyof Entrepreneur>> = {
  "1": {
    shortDescription:
      "Artesana orfebre con 15 años de experiencia, preservando técnicas ancestrales de trabajo en plata.",
    fullStory: `Mi historia con la plata comenzó cuando tenía apenas 12 años, observando a mi abuela trabajar en su pequeño taller en el centro de Bogotá. Sus manos expertas transformaban simples láminas de plata en joyas que parecían contar historias milenarias.

Después de estudiar diseño industrial, decidí regresar a mis raíces y aprender formalmente las técnicas que había observado durante mi infancia. Mi abuela, ya de 85 años, se convirtió en mi maestra más estricta y amorosa.

Cada pieza que creo lleva no solo mi técnica, sino también la sabiduría de generaciones de orfebres que han mantenido viva esta tradición. Trabajo principalmente con plata 925, utilizando técnicas como el repujado, la filigrana y el engaste, todas aprendidas de manera tradicional.

Mi taller se ha convertido en un espacio donde la tradición se encuentra con la innovación. Aunque respeto las técnicas ancestrales, también incorporo elementos de diseño contemporáneo que hacen que mis piezas sean relevantes para las nuevas generaciones.`,
    creativeProcess: `Mi proceso creativo comienza siempre con la meditación y la conexión con la naturaleza. Cada mañana, antes de tocar cualquier herramienta, dedico tiempo a observar las formas orgánicas que me rodean: las hojas, las flores, los patrones que crea la luz al filtrarse entre los árboles.

El diseño nace primero en papel, donde plasmo las formas que han capturado mi atención. Luego viene la selección de la plata, un proceso que requiere paciencia y conocimiento. Cada lámina tiene su propia personalidad y me dice qué quiere convertirse.

El trabajo físico es meditativo: el martilleo rítmico, el calor del soplete, la transformación gradual del metal. Cada golpe es intencional, cada curva tiene un propósito. No hay prisa en mi taller; cada pieza toma el tiempo que necesita para nacer.

Finalmente, el pulido y los acabados son donde la pieza cobra vida. Es el momento más emocionante, cuando veo emerger la joya que había visualizado en mi mente semanas atrás.`,
  },
  "2": {
    shortDescription: "Tejedora wayuu de cuarta generación, preservando la tradición ancestral del tejido a mano.",
    fullStory: `Nací en Uribia, en el corazón de La Guajira, donde el viento susurra historias ancestrales y la tierra árida guarda los secretos de mi pueblo wayuu. Soy la cuarta generación de tejedoras en mi familia, heredera de una tradición que se remonta a cientos de años.

Mi bisabuela me enseñó que cada mochila wayuu es un universo en sí mismo. Los colores no son casuales: representan elementos de nuestra cosmogonía, nuestros sueños, nuestras esperanzas. El rojo es la sangre de la vida, el azul es el cielo infinito, el amarillo es el sol que nos da energía.

Aprendí a tejer cuando tenía 8 años, comenzando con pequeños chinchorros para mis muñecas. Mis dedos eran torpes al principio, pero mi abuela tenía paciencia infinita. "El tejido no se puede apurar", me decía, "cada puntada debe llevar tu alma".

Hoy, cada mochila que tejo toma entre 15 y 30 días, dependiendo de la complejidad del diseño. Trabajo principalmente en las horas frescas del amanecer y el atardecer, cuando la luz es suave y mi mente está en paz.

Mi misión va más allá de crear mochilas hermosas. Quiero que cada persona que lleve una de mis creaciones sienta la conexión con mi tierra, con mi pueblo, con la sabiduría ancestral que fluye a través de cada fibra.`,
    creativeProcess: `El proceso de creación de una mochila wayuu comienza mucho antes de tocar el primer hilo. Primero viene la inspiración, que puede llegar en sueños, en la observación de la naturaleza, o en las historias que me cuentan las ancianas de mi comunidad.

Cada diseño tiene un significado profundo. Los patrones geométricos no son decorativos: son símbolos que cuentan historias, representan animales sagrados, o marcan eventos importantes en la vida de nuestro pueblo.

La selección de colores es un ritual en sí mismo. Cada combinación debe estar en armonía, no solo visualmente, sino energéticamente. Los colores deben "hablar" entre sí, crear una conversación que trascienda lo visual.

El tejido es meditativo y sagrado. Cada puntada es una oración, cada vuelta es un paso en un viaje espiritual. Trabajo en silencio, conectada con mis ancestros, sintiendo sus manos guiando las mías.

El proceso final es la "coronación" de la mochila con la correa. Esta parte requiere técnicas especiales de trenzado que solo las tejedoras más experimentadas dominamos. Es el momento donde la mochila cobra vida y está lista para acompañar a su nuevo dueño en su propio viaje.`,
  },
  "3": {
    shortDescription: "Caficultor de tercera generación, cultivando café orgánico en las montañas del Huila.",
    fullStory: `Mi historia con el café comenzó antes de nacer, en las montañas del Huila donde mi abuelo estableció nuestra finca hace más de 60 años. Crecí entre cafetales, respirando el aroma de los granos maduros y aprendiendo que el café no es solo una bebida, sino una forma de vida.

Mi abuelo, Don Aurelio, era un visionario. Cuando todos usaban químicos, él insistía en métodos naturales. "La tierra nos da todo lo que necesitamos", decía, "solo tenemos que saber escucharla". Esa filosofía se convirtió en el corazón de nuestra operación.

Estudié agronomía en la universidad, pero mi verdadera educación la recibí caminando por los senderos de la finca con mi padre y mi abuelo. Aprendí a leer las señales de la naturaleza: cuándo las cerezas están perfectamente maduras, cómo el clima afecta el sabor, por qué cada planta es única.

Hace 10 años tomé la decisión de certificar nuestra finca como orgánica. Fue un proceso desafiante que requirió cambiar muchas prácticas, pero sabía que era el camino correcto. Hoy, nuestro café no solo es orgánico, sino que también es comercio justo y sostenible.

Cada taza de nuestro café cuenta la historia de tres generaciones de amor por la tierra, respeto por la naturaleza, y pasión por la excelencia. Es más que café: es el legado de una familia que cree en hacer las cosas bien.`,
    creativeProcess: `Mi proceso comienza con el cuidado meticuloso de cada planta de café. Cada árbol es único y requiere atención individual. Observo diariamente el desarrollo de las cerezas, esperando el momento perfecto de maduración.

La cosecha es un arte que requiere paciencia y experiencia. Solo recolecto las cerezas que han alcanzado el punto óptimo de madurez, cuando su color rojo intenso me indica que los azúcares se han desarrollado completamente.

El proceso de beneficio es donde la magia realmente sucede. Utilizo el método de lavado tradicional, fermentando los granos en tanques de agua limpia de montaña durante exactamente 18 horas. Este tiempo de fermentación es crucial para desarrollar los sabores complejos que caracterizan nuestro café.

El secado se hace naturalmente al sol, en patios de concreto donde extiendo los granos en capas delgadas. Los remuevo constantemente para asegurar un secado uniforme, un proceso que puede tomar hasta 15 días dependiendo del clima.

Finalmente, el tostado es donde cada grano revela su personalidad única. Tuesto en pequeños lotes, controlando cuidadosamente la temperatura y el tiempo para resaltar las notas frutales y florales que caracterizan nuestro café de montaña.`,
  },
}

export function getEntrepreneurDetails(entrepreneurId: string): EntrepreneurDetails {
  const entrepreneur = {
    "1": {
      id: "1",
      name: "María González",
      businessName: "Plata y Tradición",
      photo: "/colombian-woman-artisan-smiling.png",
      story:
        "Desde hace 15 años trabajo la plata siguiendo técnicas ancestrales que aprendí de mi abuela. Cada pieza cuenta una historia y lleva el amor de nuestras tradiciones.",
      slug: "maria-gonzalez",
      location: "Bogotá",
      whatsapp: "+573001234567",
    },
    "2": {
      id: "2",
      name: "Carmen Uriana",
      businessName: "Wayuu Auténtico",
      photo: "/wayuu-woman-weaving.png",
      story:
        "Soy tejedora wayuu de cuarta generación. Cada mochila que tejo lleva los símbolos y colores de mi pueblo, preservando nuestra cultura milenaria.",
      slug: "carmen-uriana",
      location: "La Guajira",
      whatsapp: "+573007654321",
    },
    "3": {
      id: "3",
      name: "Carlos Ramírez",
      businessName: "Café de las Montañas",
      photo: "/placeholder.svg?height=400&width=400",
      story:
        "Mi familia cultiva café orgánico en las montañas del Huila desde hace tres generaciones. Cada grano es seleccionado a mano con amor y dedicación.",
      slug: "carlos-ramirez",
      location: "Huila",
      whatsapp: "+573009876543",
    },
  }[entrepreneurId]

  if (!entrepreneur) {
    throw new Error(`Entrepreneur with id ${entrepreneurId} not found`)
  }

  const details = entrepreneurDetails[entrepreneurId]
  if (!details) {
    throw new Error(`Details for entrepreneur ${entrepreneurId} not found`)
  }

  return {
    ...entrepreneur,
    ...details,
  }
}
