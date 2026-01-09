export interface FooterLink {
  id: number;
  href: string;
  text: string;
}

const footerLinks: FooterLink[] = [
  { id: 1, href: "#", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#experience", text: "experience" },
  { id: 4, href: "#services-section", text: "services" },
  { id: 5, href: "#portfolio", text: "portfolio" },
  { id: 7, href: "#contact", text: "contact" },
];

export default footerLinks;