import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaAngleDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdOutlineManageAccounts } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
const Profile = () => {
  const [open, setOpen] = useState(false)

  return (<>

    <div className="profile-conatiner">
      <div className="profile">
        <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <FaAngleDown onClick={() => setOpen(!open)} />
      </div>
      <motion.div animate={{
        width: open ? "130px" : "0px",

        transition: {
          duration: 0.5,
          type: "spring",
          damping: 12,
        },
      }}>
        {
          open && (<div className="logoDetails">
            <ul>
              <div className="item">
                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <div className="profile-details">
                  <h3>John Doe</h3>
                  <p>UI/UX Designer</p>
                </div>
              </div>
              <div className="item"><CgProfile className='log' /> <li>Profile</li></div>
              <div className="item"><MdOutlineManageAccounts className='log' /> <li>Account Seting</li></div>
              <div className="item"><AiOutlineLogout className=' log logout-btn' /> <li>Logout</li></div>
            </ul>
          </div>)
        }
      </motion.div>
    </div>

  </>
  )
}

export default Profile;