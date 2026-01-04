/* Définition de l'interface pour un service */

export interface ServiceItem {
  title: string;
  features: string[];
}

const ServicesCards: ServiceItem[] = [
  {
    title: "UI/UX Design",
    features: [
      "Conception de maquettes simples (landing pages, sites vitrines)",
      "Design moderne (dark / light mode)",
      "Hiérarchie visuelle claire",
      "Navigation fluide et logique",
      "Responsive design",
    ],
  },
  {
    title: "WEB DEVELOPMENT",
    features: [
      "Sites vitrines modernes sur mesure",
      "Développement front-end avec React",
      "Responsive complet (desktop, tablette, mobile)",
      "Intégration front-end / back-end",
      "Déploiement et mise en ligne",
    ],
  },
  {
    title: "Maintenance & Accompagnement",
    features: [
      "Maintenance technique",
      "Corrections de bugs",
      "Support technique",
    ],
  },
];

export default ServicesCards;