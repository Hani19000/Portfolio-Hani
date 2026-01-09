import React from "react";
import contactData, { ContactOption } from "../../Data/contact/ContactData";

const ContactExt: React.FC = () => (
  <div className="contact__options">
    {contactData.map(({ id, icon, title, value, link }: ContactOption) => (
      <article className="contact__option" key={id}>
        {icon}
        <h4>{title}</h4>
        <h5>{value}</h5>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Send a message
        </a>
      </article>
    ))}
  </div>
);

export default ContactExt;