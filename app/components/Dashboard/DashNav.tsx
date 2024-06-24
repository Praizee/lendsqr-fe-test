"use client";

import React from "react";
import { Dropdown } from "antd";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoChatboxEllipses, IoNotifications } from "react-icons/io5";
import Link from "next/link";
import NotificationIcon from "@/public/assets/svg/NotificationIcon";
import Image from "next/image";
import Avatar from "@/public/assets/images/image 4.png";
import { BiChevronDown } from "react-icons/bi";
import styles from "@/app/styles/DashNav.module.scss";
import { BsBell } from "react-icons/bs";

const DashNav = () => {
  const messages = [
    {
      key: "1",
      label: <p className="">No messages yet</p>,
    },
  ];

  const notifications = [
    {
      key: "1",
      label: <p className="">(0) notifications</p>,
    },
  ];

  const profile = [
    {
      key: "1",
      label: <Link href="">Settings</Link>,
    },
    {
      key: "2",
      label: <Link href="/">Log Out</Link>,
    },
  ];

  return (
    <>
      <nav className={styles.nav_container}>
        <label htmlFor="my-drawer-2" className={styles.menu_button}>
          <CgMenuRightAlt size="25" className={styles.menuIcon} />
        </label>

        <div className={styles.nav}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className={styles.searchForm}
          >
            <input
              type="text"
              placeholder="Search for anything"
              required
              // className="w-[400px] py-3 px-4 h-[40px] rounded-l-[8px] text-[#545F7D] text-[14px] border border-gray-300 outline-none bg-white"
            />
            <button
              type="button"
              // className="bg-[#39CDCC] p-3 text-white text-[14px] active:scale-95 rounded-r-[8px] flex items-center justify-center w-[56px] h-[40px]"
              title="Search"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.3541 0.000553316C3.94043 0.0214743 2.59056 0.59363 1.5911 1.59554C0.572324 2.6165 0 4.00108 0 5.44478C0 6.88848 0.572324 8.27307 1.5911 9.29402C2.5152 10.2183 3.74056 10.7782 5.04297 10.8714C6.34537 10.9645 7.6377 10.5847 8.68348 9.80138L12.874 14L13.9717 12.9002L9.77963 8.70008C10.5612 7.65258 10.9403 6.35818 10.8476 5.05362C10.7549 3.74905 10.1966 2.52153 9.27477 1.59554C8.76094 1.08047 8.1492 0.673917 7.47576 0.39995C6.80232 0.125984 6.08086 -0.00982865 5.3541 0.000553316ZM5.48903 1.55605C6.49887 1.57093 7.46314 1.97962 8.1771 2.69533C8.9048 3.42458 9.3136 4.41357 9.3136 5.44478C9.3136 6.476 8.9048 7.46498 8.1771 8.19424C7.44925 8.92334 6.46216 9.33293 5.43293 9.33293C4.4037 9.33293 3.41662 8.92334 2.68877 8.19424C1.96107 7.46498 1.55227 6.476 1.55227 5.44478C1.55227 4.41357 1.96107 3.42458 2.68877 2.69533C3.05576 2.32744 3.49268 2.03706 3.97367 1.84137C4.45466 1.64568 4.96995 1.54866 5.48903 1.55605Z"
                  fill="white"
                />
              </svg>
            </button>
          </form>

          <span className={styles.actions}>
            <Link href="" className={styles.docsLink}>
              Docs
            </Link>

            <Dropdown
              menu={{
                items: notifications,
              }}
              placement="bottomRight"
            >
              <button
                type="button"
                title="notifications"
                className={styles.notificationsButton}
              >
                <BsBell className={styles.icon} />
                {/* <NotificationIcon className={styles.icon} /> */}
              </button>
            </Dropdown>

            <Dropdown
              menu={{
                items: profile,
              }}
              placement="bottomRight"
            >
              <button type="button" className={styles.profileButton}>
                <Image alt="avatar" src={Avatar} className={styles.avatar} />
                <p className={styles.username}>Adedeji</p>
                <BiChevronDown className={styles.chevronIcon} />
              </button>
            </Dropdown>
          </span>
        </div>
      </nav>
    </>
  );
};

export default DashNav;
