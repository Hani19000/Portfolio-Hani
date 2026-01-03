import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
const contactData = [
  {
    id: 1,
    icon: <MdEmail className="contact__option-icon" />,
    title: "Email",
    value: "hanider27@gmail.com",
    link: "mailto:hanider27@gmail.com",
  },
  {
    id: 2,
    icon: <FaWhatsapp  className="contact__option-icon" />,
    title: "WhatsApp",
    value: "(+33)7 65 74 94 02",
    link: "https://wa.me/33765749402",
  },
];
export default contactData;