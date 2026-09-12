"use client";

import React from "react";

interface RegisterButtonProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const REGISTER_URL = "https://www.veergame14.com/#/register?invitationCode=69548120159";

export default function RegisterButton({
  className = "btn-hero btn-hero-register",
  style,
  children,
}: RegisterButtonProps) {
  return (
    <a
      href={REGISTER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={{ textDecoration: "none", ...style }}
    >
      {children || (
        <>
          <i className="fas fa-user-plus" aria-hidden="true"></i> Register Now
        </>
      )}
    </a>
  );
}
