import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Profile from "../Profile";
import SidebarMenu from "./SidebarMenu";

import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { PiUsersThreeLight } from "react-icons/pi";
import { TbUserDollar, TbDeviceDesktopAnalytics } from "react-icons/tb";
import { RxDashboard } from "react-icons/rx";
import { RiPresentationFill, RiPresentationLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { AiTwotoneFileExclamation } from "react-icons/ai";
import { BiBuildingHouse } from "react-icons/bi";
import { VscFeedback } from "react-icons/vsc";
import { FcLeave } from "react-icons/fc";
import { SlCalender } from "react-icons/sl";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { AiOutlineLogout } from "react-icons/ai";

const routes = [
  {
    path: "/",
    name: "",
    icon: <RxDashboard />,
    subRoutes: [
      {
        path: "/settings/dashboard",
        name: "Dashboard ",
        icon: <TbDeviceDesktopAnalytics />,
      },
      {
        path: "/settings/feedback",
        name: "Feedback",
        icon: <VscFeedback />,
      },
      {
        path: "/settings/leaves",
        name: "Leaves",
        icon: <FcLeave />,
      },
      {
        path: "/settings/attendance",
        name: "Attendance",
        icon: <RiPresentationLine />,
      },
      {
        path: "/settings/present",
        name: "Daily Timesheet",
        icon: <SlCalender />,
      },
      {
        path: "/settings/worklog",
        name: "Work Log",
        icon: <RiPresentationLine />,
      },
      {
        path: "/settings/Reimbursements",
        name: "Reimbursements",
        icon: <LiaMoneyCheckAltSolid />,
      },

    ],
  },

  {
    path: "/project",
    name: "",
    icon: <BiBuildingHouse />,
  },

  {
    path: "/users",
    name: "",
    icon: <PiUsersThreeLight />,
    subRoutes: [
      {
        path: "/settings/dashboard",
        name: "Dashboard ",
        icon: <TbDeviceDesktopAnalytics />,
      },
      {
        path: "/settings/feedback",
        name: "Feedback",
        icon: <VscFeedback />,
      },
      {
        path: "/settings/leaves",
        name: "Leaves",
        icon: <FcLeave />,
      },
      {
        path: "/settings/attendance",
        name: "Attendance",
        icon: <RiPresentationLine />,
      },
      {
        path: "/settings/present",
        name: "Daily Timesheet",
        icon: <SlCalender />,
      },
      {
        path: "/settings/worklog",
        name: "Work Log",
        icon: <RiPresentationLine />,
      },
      {
        path: "/settings/Reimbursements",
        name: "Reimbursements",
        icon: <LiaMoneyCheckAltSolid />,
      },

    ],
  },
  {
    path: "/attendance",
    name: "",
    icon: <SlCalender />,
  },
  {
    path: "/file-manager",
    name: "",
    icon: <AiTwotoneFileExclamation />,
  },
  {
    path: "/analytics",
    name: "",
    icon: <TbUserDollar />,
  },

  {
    path: "/saved",
    name: "",
    icon: <RiPresentationFill />,
  },
  {
    path: "/settings",
    name: "",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/dashboard",
        name: "Dashboard ",
        icon: <TbDeviceDesktopAnalytics />,
      },
      {
        path: "/settings/feedback",
        name: "Feedback",
        icon: <VscFeedback />,
      },
      {
        path: "/settings/leaves",
        name: "Leaves",
        icon: <FcLeave />,
      },
      {
        path: "/settings/attendance",
        name: "Attendance",
        icon: <RiPresentationLine />,
      },
      {
        path: "/settings/present",
        name: "Daily Timesheet",
        icon: <SlCalender />,
      },
      {
        path: "/settings/worklog",
        name: "Work Log",
        icon: <RiPresentationLine />,
      },
      {
        path: "/settings/Reimbursements",
        name: "Reimbursements",
        icon: <LiaMoneyCheckAltSolid />,
      },

    ],

  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="container">
        <div className="conatiner1">
          <div className="main-container">
            <motion.div
              animate={{
                width: isOpen ? "240px" : "45px",
                transition: {
                  duration: 0.5,
                  type: "spring",
                  damping: 10,
                },
              }}
              className={`sidebar `}
            >
              <div className="top_section">
                <AnimatePresence>
                  {isOpen && (
                    <motion.h1
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="logo"
                    >
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwL92NsU3sNJOhlc_xCWron6EhQn4uy87kdA&s" alt="" />
                      <div className="search">
                        <AnimatePresence>\
                          {isOpen && (
                            <motion.input
                              initial="hidden"
                              animate="show"
                              exit="hidden"
                              variants={inputAnimation}
                              type="text"
                              placeholder="Search"
                            />
                          )}
                        </AnimatePresence>
                      </div>


                    </motion.h1>
                  )}
                </AnimatePresence>

                <div className="bars">
                  <FaBars onClick={toggle} />
                </div>
              </div>

              <section className="routes">
                {routes.map((route, index) => {
                  if (route.subRoutes) {
                    return (
                      <SidebarMenu
                        setIsOpen={setIsOpen}
                        route={route}
                        showAnimation={showAnimation}
                        isOpen={isOpen}
                      />
                    );

                  }

                  return (
                    <NavLink
                      to={route.path}
                      key={index}
                      className="link"
                      activeClassName="active"
                    >
                      <div className="icon">{route.icon}</div>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            variants={showAnimation}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="link_text"
                          >
                            {route.name}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </NavLink>
                  );
                })}
                <div className="logouIcon">
                  <AiOutlineLogout />
                </div>
              </section>
            </motion.div>
            <main>{children}</main>
          </div>
        </div>
        {/* Profile Compon */}
        <Profile />
      </div>

    </>
  );
};

export default SideBar;
