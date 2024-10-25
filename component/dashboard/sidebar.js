import React, { useState } from "react";
import Link from "next/link"; // Import Link from next/link
import { GiHamburgerMenu } from "react-icons/gi";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
import Module from "./module";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard"); // State for active page

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (page) => {
    setActivePage(page); // Set the active page
    setIsOpen(false); // Close the sidebar when an item is clicked
  };

  return (
    <nav className="position-relative">
      {/* Sidebar */}
      <div
        className={`bg-light h-100 p-3 position-fixed top-0 transition sidebar ${
          isOpen ? "sidebar-open" : "sidebar-collapsed"
        }`}
        style={{ width: isOpen ? "250px" : "80px", zIndex: "1000" }}
      >
        <div className="d-flex justify-content-between">
          <p className="text-center border-bottom pb-3">
            {isOpen ? "Dashboard" : ""}
          </p>
          <GiHamburgerMenu className="cursor" size={24} onClick={toggleSidebar} />
        </div>

        {/* Menu items */}
        <ul className="nav flex-column">
          <li className="nav-item mb-2 cursor">
              <p onClick={() => handleMenuClick("Dashboard")} className="nav-link d-flex align-items-center text-dark">
                <MdOutlineSpaceDashboard size={24} className="me-2" />
                {isOpen && "Dashboard"}
              </p>
          </li>
          <li className="nav-item mb-2 cursor">
              <p onClick={() => handleMenuClick("Module")} className="nav-link d-flex align-items-center text-dark">
                <CgProfile size={24} className="me-2" />
                {isOpen && "Module"}
              </p>
          </li>
          <li className="nav-item mb-2 cursor">
              <p onClick={() => handleMenuClick("Comments")} className="nav-link d-flex align-items-center text-dark">
                <FaRegComments size={24} className="me-2" />
                {isOpen && "Comments"}
              </p>
          </li>
          <li className="nav-item mb-2 cursor">
              <p onClick={() => handleMenuClick("Analytics")} className="nav-link d-flex align-items-center text-dark">
                <MdOutlineAnalytics size={24} className="me-2" />
                {isOpen && "Analytics"}
              </p>
          </li>
          <li className="nav-item mb-2 cursor">
              <p onClick={() => handleMenuClick("Messages")} className="nav-link d-flex align-items-center text-dark">
                <BiMessageSquareDots size={24} className="me-2" />
                {isOpen && "Messages"}
              </p>
          </li>
          <li className="nav-item mb-2 cursor">
              <p onClick={() => handleMenuClick("Integration")} className="nav-link d-flex align-items-center text-dark">
                <MdOutlineIntegrationInstructions size={24} className="me-2" />
                {isOpen && "Integration"}
              </p>
          </li>
        </ul>

        {/* Settings and logout */}
        <ul className="nav flex-column mt-auto">
          <li className="nav-item mb-2 cursor">
              <p onClick={() => handleMenuClick("Settings")} className="nav-link d-flex align-items-center text-dark">
                <MdOutlineSettings size={24} className="me-2" />
                {isOpen && "Settings"}
              </p>
          </li>
          <li className="nav-item mb-2 cursor">
              <p onClick={() => handleMenuClick("More")} className="nav-link d-flex align-items-center text-dark">
                <MdOutlineMoreHoriz size={24} className="me-2" />
                {isOpen && "More"}
              </p>
          </li>
          <li className="nav-item mb-2 cursor">
          
              <p onClick={() => handleMenuClick("Logout")} className="nav-link d-flex align-items-center text-dark border border-dark rounded">
                <MdOutlineLogout size={24} className="me-2" />
                {isOpen && "Logout"}
              </p>
          </li>
        </ul>
      </div>

      {/* Main content area */}
      <div className={`container main-content ${isOpen ? "expanded" : "collapsed"}`}>
        {/* Render content based on active page */}
        {activePage === "Dashboard" && <h2>Dashboard Content</h2>}
        {activePage === "Module" && <Module/> }
        {activePage === "Comments" && <h2>Comments Content</h2>}
        {activePage === "Analytics" && <h2>Analytics Content</h2>}
        {activePage === "Messages" && <h2>Messages Content</h2>}
        {activePage === "Integration" && <h2>Integration Content</h2>}
        {activePage === "Settings" && <h2>Settings Content</h2>}
        {activePage === "More" && <h2>More Content</h2>}
        {activePage === "Logout" && <h2>Logout Content</h2>}
      </div>

      {/* Custom styles */}
      <style jsx>{`
        .sidebar {
          transition: all 0.3s ease;
          z-index: 1000;
          position: fixed;
          top: 0;
        }

        .sidebar-collapsed {
          width: 80px;
        }

        .sidebar-open {
          width: 250px;
        }

        .nav-link:hover {
          background-color: #e9ecef;
          border-radius: 5px;
        }

        .main-content {
          padding-left: ${isOpen ? "250px" : "80px"};
          transition: padding-left 0.3s ease;
        }

        @media (max-width: 768px) {
          .main-content {
            padding-left: auto;
          }
              .main-content {
          padding-left: ${isOpen ? "0px" : "80px"};
          transition: padding-left 0.3s ease;
        }

        }
      `}</style>
    </nav>
  );
}

export default Sidebar;
