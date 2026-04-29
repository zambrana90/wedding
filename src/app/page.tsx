"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { EnvelopePage } from "@/views/envelope";
import { HomePage } from "@/views/home";

const ENVELOPE_COOKIE = "envelope_seen";
const COOKIE_EXPIRY_HOURS = 1;

export default function Page() {
  const [showEnvelope, setShowEnvelope] = useState<boolean | null>(null);

  useEffect(() => {
    // eslint-disable-next-line
    setShowEnvelope(!Cookies.get(ENVELOPE_COOKIE));
  }, []);

  const handleEnvelopeOpened = () => {
    const expiryDate = new Date();
    expiryDate.setHours(expiryDate.getHours() + COOKIE_EXPIRY_HOURS);
    Cookies.set(ENVELOPE_COOKIE, "true", { expires: expiryDate });
  };

  if (showEnvelope === null) {
    return null;
  }

  return showEnvelope ? (
    <EnvelopePage onOpen={handleEnvelopeOpened} />
  ) : (
    <HomePage />
  );
}
