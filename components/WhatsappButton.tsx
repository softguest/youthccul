"use client";
import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/237 678 078 246" // replace with your WhatsApp number (with country code, no + or spaces)
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsappButton;
