"use client";

import Image from "next/image";
import Logo from "@/public/assets/images/logo.png";
import { useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "antd";
import {
  activeKeys,
  sidebarData1,
  sidebarData2,
  sidebarData3,
  sidebarData4,
} from "./MenuData";
import CustomDropdown from "./CustomDropdown";
import styles from "@/app/styles/DashboardSider.module.scss";

const DashboardSider = () => {
  const pathName = usePathname();
  const [activePath, setActivePath] = useState("");
  useLayoutEffect(() => {
    setActivePath(activeKeys.filter((value) => pathName.includes(value))[0]);
  }, [pathName]);

  return (
    <div className={styles.drawer_side}>
      <label htmlFor="my-drawer-2" className={styles.drawer_overlay} />
      <aside className={styles.drawer_content}>
        <span className={styles.logo_container}>
          <Image src={Logo} alt="logo" />
        </span>

        <div className={styles.menu_items}>
          <div className="pb-8">
            <CustomDropdown />
          </div>

          <Menu
            selectedKeys={[activePath]}
            items={sidebarData1}
            className={styles.menu}
            mode="inline"
          />

          <p className={styles.menu_title}>Customers</p>

          <Menu
            selectedKeys={[activePath]}
            items={sidebarData2}
            className={styles.menu}
            mode="inline"
          />

          <p className={styles.menu_title}>Business</p>

          <Menu
            selectedKeys={[activePath]}
            items={sidebarData3}
            className={styles.menu}
            mode="inline"
          />

          <p className={styles.menu_title}>Settings</p>

          <Menu
            selectedKeys={[activePath]}
            items={sidebarData4}
            className={styles.menu}
            mode="inline"
          />
        </div>
      </aside>
    </div>
  );
};

export default DashboardSider;
