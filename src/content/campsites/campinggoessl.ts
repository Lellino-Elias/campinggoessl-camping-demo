import type { CampsiteConfig } from "../types";

const IMG = "/campsites/campinggoessl";

const campinggoessl: CampsiteConfig = {
  name: "Camping Gößl",
  shortName: "Gößl",
  slug: "campinggoessl",
  ort: "Grundlsee",
  region: "Steiermark",
  brandKind: "Camping am Grundlsee",
  see: "Grundlsee",
  regionLong: "Ausseerland · Salzkammergut · Steiermark",

  heroVariant: "center",

  claim: "Dein Sommer direkt am Grundlsee",
  claimEmphasis: "am Grundlsee",
  emailDetail: "eure Lage direkt am Ostufer des Grundlsees",
  intro:
    "Ein kleiner, ruhiger Familienplatz am Ostufer des Grundlsees — durchwegs Grasboden, freier Seezugang und gepflegte Sanitäranlagen mit ADAC-Bestnote, dein Naturplatz zwischen Wiesen, Wäldern und dem Toten Gebirge.",

  logo: { src: `${IMG}/logo-1e33d9458b.png`, alt: "Camping Gößl am Grundlsee Logo" },

  statement: {
    text: "Vom Stellplatz zum Seeufer sind es nur wenige Schritte — der Grundlsee liegt fast vor dem Vorzelt.",
    emphasis: "wenige Schritte",
  },

  pillars: [
    {
      title: "Direkt am Grundlsee",
      text: "Der Platz liegt am Ostufer des Grundlsees — zum Schwimmen, Tauchen und Bootfahren gehst du einfach hinunter ans Wasser.",
      image: { src: `${IMG}/gallery-0b7d2cdb04.webp`, alt: "Badegäste am Seeufer des Grundlsees bei Camping Gößl" },
    },
    {
      title: "Gepflegte Sanitäranlagen",
      text: "Einzelwaschkabinen, Fußbodenheizung und Babybadewanne — die Sanitäranlagen sind im ADAC-Campingführer mit der Bestnote ausgezeichnet.",
      image: { src: `${IMG}/gallery-d5d79105c4.webp`, alt: "Das Sanitärgebäude von Camping Gößl vor den Bergen des Toten Gebirges" },
    },
    {
      title: "Zwischen See und Bergen",
      text: "Eingebettet zwischen dem Grundlsee und den Bergen des Toten Gebirges, ringsum nur Wiesen, Wälder und klare Bergluft.",
      image: { src: `${IMG}/gallery-7668463392.webp`, alt: "Camping Gößl am Ufer des Grundlsees aus der Vogelperspektive" },
    },
  ],

  usps: [
    "Direkt am Grundlsee",
    "ADAC-Bestnote Sanitär",
    "Warmwasser inklusive",
    "Hunde willkommen",
    "Familiär geführt",
    "Längster Naturbadestrand",
  ],

  trust: {
    heading: "Darauf ist am Grundlsee Verlass",
    headingEmphasis: "Verlass",
    intro:
      "Familie Bischof führt den kleinen Platz am Ostufer persönlich — gepflegte Sanitäranlagen mit ADAC-Bestnote, freier Seezugang und ein ruhiger Naturplatz zwischen Wiesen, Wäldern und dem Toten Gebirge.",
  },

  awards: [{ label: "ADAC-Bestnote für die Sanitäranlagen" }],

  saison: { von: "Mai", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/gallery-0786cd62c1.webp`, alt: "Luftaufnahme: Camping Gößl direkt am Grundlsee" },
  },

  breather: {
    image: { src: `${IMG}/gallery-ff53689a91.webp`, alt: "Der Grundlsee zwischen den Bergen des Toten Gebirges" },
    line: "Der Grundlsee, eingebettet zwischen den Bergen des Toten Gebirges.",
  },

  camping: {
    heading: "Camping am Ostufer des Grundlsees",
    intro:
      "Grasebene Stellplätze, ruhige Lage und alles, was den Campingtag leicht macht — eingebettet zwischen See, Wiesen und den Bergen des Toten Gebirges.",
    features: [
      {
        title: "Komfort-Sanitär mit ADAC-Bestnote",
        text: "Die Sanitäranlagen wurden im ADAC-Campingführer mit der Bestnote ausgezeichnet: Einzelwaschkabinen, Fußbodenheizung und Babybadewanne.",
        image: { src: `${IMG}/gallery-843e77c6be.webp`, alt: "Sanitärbereich mit Einzelwaschbecken bei Camping Gößl" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Rund um den Grundlsee",
    intro:
      "Schwimmen, Tauchen und Bootfahren auf dem Grundlsee — das Wasser liegt direkt vor dem Platz, das Ausseerland bietet noch viel mehr.",
    items: [
      {
        title: "Schwimmen & Tauchen",
        text: "Der Grundlsee hat den längsten Naturbadestrand Österreichs — frei zugänglich zum Schwimmen, Schnorcheln und Tauchen (Flaschenfüllung 100 m).",
        image: { src: `${IMG}/gallery-1d81fad776.webp`, alt: "Badegäste im klaren Wasser des Grundlsees" },
      },
      {
        title: "Aufs Wasser",
        text: "Rudern, Segeln, Elektroboot oder Stand-up-Paddeln — Boote bekommst du bei der Bootsvermietung Hillbrand am Anfang des Sees.",
        image: { src: `${IMG}/gallery-3f1ab56d68.webp`, alt: "Stand-up-Paddler auf dem Grundlsee" },
      },
    ],
  },

  anreise: {
    heading: "Anfahrt ins Ausseerland",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A9 Pyhrn-Autobahn und die B145 ins Ausseerland nach Grundlsee, dann am Ostufer entlang bis nach Gößl 17 — der Platz ist beschildert.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhof Bad Aussee an der Salzkammergutbahn, von dort weiter mit Bus oder Taxi nach Grundlsee-Gößl.",
      },
      {
        title: "Lage",
        text: "Rund 80 km von Salzburg und 25 km von Bad Ischl entfernt — mitten im Salzkammergut.",
      },
    ],
  },

  galerie: {
    heading: "Bilder vom Grundlsee",
    headingEmphasis: "Grundlsee",
    intro: "Der Grundlsee, das Toten Gebirge und der Platz in Gößl — weitere Eindrücke folgen.",
    tag: "1. Mai – 31. Oktober",
    images: [],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Grundlsee",
    headingEmphasis: "am Grundlsee",
    intro: "Wähle Zeitraum und Personen — Familie Bischof meldet sich persönlich mit deiner Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreise pro Nacht für 2 Personen — Stellplatz inkl. Wohnwagen, Pkw & Strompauschale (€ 7,50 pro Erw., € 3 pro Kind 2–14 J., Strom € 4) — zzgl. Ortstaxe € 3 pro Person. Saison 1. Mai – 31. Oktober, bitte bestätigen.",
    highlight: {
      title: "Reservierung lohnt sich",
      text: "Ein reservierter Stellplatz ist immer von Vorteil — im Juli und August ab 3 Nächten.",
    },
    categories: [
      { id: "wohnwagen", label: "Stellplatz Wohnwagen", perNight: 24, perExtraGuest: 7.5 },
      { id: "zelt", label: "Zeltplatz", perNight: 20, perExtraGuest: 7.5 },
      { id: "mietwohnwagen", label: "Mietwohnwagen", perNight: 50, perExtraGuest: 7.5 },
    ],
  },

  kontakt: {
    tel: "+43 (0) 3622 20155",
    telHref: "tel:+43362220155",
    mail: "office@campinggoessl.com",
    facebook: "https://www.facebook.com/Camping-G%C3%B6%C3%9Fl-Familie-Bischof-194252234289682/",
    adresse: "Gößl 17 · 8993 Grundlsee · Steiermark",
    coords: { lat: 47.638059, lng: 13.904089 },
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Sanitär", href: "#camping" },
      ],
    },
    { label: "Aktiv am See", href: "#aktivitaeten" },
    {
      label: "Preise & Anreise",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default campinggoessl;
