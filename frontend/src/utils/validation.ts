// src/utils/validation.ts
import type { ContactData } from "../hooks/ContactEmail";

const isValid = ({ name, email, message }: ContactData) =>
  !!name.trim() && !!email.trim() && !!message.trim();

export default isValid