import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [navbarColor, setNavbarColor] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    console.log("useEffect started");

    let navbarHeight = document.getElementById("navbar");
    setNavbarHeight(navbarHeight);
    console.log(navbarHeight.offsetHeight);
  }, []);

  useEffect(() => {
    console.log("useEffect2 started");
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    console.log("handleScroll started");
    const navbar = document.getElementById("navbar");
    const navbarColor = navbar.offsetTop;

    if (window.scrollY >= navbarColor) {
      setNavbarColor(true);
      console.log(`scrollY=${window.scrollY}`);
    } else {
      setNavbarColor(false);
    }
  };

  return (
    <div id="navbar" className={`navbar ${navbarColor ? "navbarColor" : ""}`}>
      navbarColor{" "}
    </div>
  );
}
