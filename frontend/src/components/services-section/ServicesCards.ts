/* Définition de l'interface pour un service */

export interface ServiceItem {
  title: string;
  features: string[];
}

const ServicesCards: ServiceItem[] = [
  {
    title: "UI/UX Design",
    features: [
      "Wireframing and Prototyping",
      "User Research and Analysis",
      "Interaction Design",
      "Visual Design",
    ],
  },
  {
    title: "WEB DEVELOPMENT",
    features: [
      "Frontend Development",
      "Backend API Integration",
      "Database Management",
      "React & Next.js Expert",
    ],
  },
  {
    title: "CONTENT CREATION",
    features: [
      "Technical Writing",
      "Video Editing",
      "Graphic Design",
      "SEO Optimization",
    ],
  },
];

export default ServicesCards;