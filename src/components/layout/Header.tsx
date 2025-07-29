"use client"

import React from "react";
import styles from "./Header.module.css";
import Avatar from "./Avatar";
import Navbar from "./Navbar";
import NavMenu from "./NavMenu";
import type { PageLink } from "../../types/PageLink.type";
import { useBreakpoint } from "@amen24/ui";

const Header: React.FC = () => {
  const { isLargePhone } = useBreakpoint();

  const links: PageLink[] = [
    { to: "/", label: "Home", match: "/" },
    { to: "/what-i-use", label: "What I Use", match: "/what-i-use" },
    {
      to: "/qualifications",
      label: "Qualifications",
      match: "/qualifications",
    },
    { to: "/quotes", label: "Quotes", match: "/quotes" },
    { to: "/blogs", label: "Blogs", match: "/blogs" },
  ];

  return (
    <header className={styles.container}>
      {isLargePhone ? <NavMenu links={links} /> : <Navbar links={links} />}
      <Avatar />
    </header>
  );
};

export default Header;
