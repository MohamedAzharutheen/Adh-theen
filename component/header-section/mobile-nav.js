import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoMdCloseCircle } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { FcBusinessman } from "react-icons/fc";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
const SidebarMenu = ({ toggleMenu, isMenuOpen }) => {
  const variants = {
    open: {
      x: 0, // Slide in from the left
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      x: "-100%", // Slide out to the left
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  const Menu = [
    { color: "#D0AB17", icon: <IoHome size={24}/>, name: "Home" },
    { color: "#D0AB17", icon: <BiSolidOffer size={24}/>, name: "Packages" },
    { color: "#D0AB17", icon: <MdOutlineFlightTakeoff size={24}/>, name: "Services" },
    { color: "#D0AB17", icon: <FaUserLarge size={24}/>, name: "Guidance" },
    { color: "#D0AB17", icon: <FaHeadphonesAlt size={24}/>, name: "Contact Us" },
  ];

  return (
    <>
      <div className="dn mdb" style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "300px",
            height: "100%",
            backgroundColor: "#fff",
            padding: "20px",
            boxShadow: "2px 0 5px rgba(0,0,0,0.2)",
            zIndex: 1000,
            overflowY: "auto",
          }}>
        {/* Logo */}
        <div className="df fac fjsb " style={{borderBottom: '1px solid #000'}}>
          <Image
            src={"/assets/images/logos/logo.svg"}
            width={60}
            height={80}
            alt="Logo"
            loading="lazy"
            quality={100}
          />
          <IoMdCloseCircle size={24} onClick={toggleMenu}/>
        </div>

        {/* Motion UL (Menu container) */}
        <motion.ul
          className="pdl0 mt40"
          variants={variants}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          
        >
          {Menu.map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="df  fac  cursor mt20"

            >
              <div
                className="icon-placeholder df fac fjc"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  flex: "40px 0",
                  marginRight: "20px",
                  border: `2px solid ${item.color}`,
                }}
              >
                {item.icon}
              </div>
              <div
                className="text-placeholder df fac fjc"
                style={{
                  borderRadius: "5px",
                  width: "100px",
                  height: "40px",
                  flex: "1",
                  border: `2px solid ${item.color}`,
                }}
              >
                {item.name}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <style jsx>{`

      `}</style>
    </>
  );
};

export default SidebarMenu;
