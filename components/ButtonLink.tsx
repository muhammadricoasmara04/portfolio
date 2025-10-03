"use client";
import React, { ReactNode } from "react";
import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  label: string;
  download?: boolean;
  target?: "_blank" | "_self";
  rel?: string;
  className?: string;
  icon?: ReactNode;
};

const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  label,
  download = false,
  target = "_self",
  rel,
  className = "",
  icon,
}) => {
  return (
    <Link
      href={href}
      target={target}
      rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
      download={download}
      className={`inline-flex px-4 py-2 bg-[#04aa97] text-white rounded hover:bg-blue-900 transition ${className}`}
    >
      {icon && <span className="">{icon}</span>}
      {label}
    </Link>
  );
};

export default ButtonLink;
