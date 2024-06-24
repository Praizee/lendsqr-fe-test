"use client";

import React, { useState, useEffect, useRef } from "react";
import ArrowDownIcon from "@/public/assets/svg/ArrowDownIcon";
import BriefcaseIcon from "@/public/assets/svg/BriefcaseIcon";
import styles from "@/app/styles/CustomDropdown.module.scss";

const CustomDropdown = () => {
  const [selected, setSelected] = useState("Switch Organization");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className={styles.dropdown}>
      <button
        className={styles.dropdown__button}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <BriefcaseIcon className={styles.dropdown__icon} />
          {selected}
        </div>
        <span className={styles.dropdown__arrow}>
          <ArrowDownIcon />
        </span>
      </button>
      {isOpen && (
        <ul className={styles.dropdown__menu}>
          <li
            className={styles.dropdown__item}
            onClick={() => handleSelect("Switch Organization")}
          >
            Switch Organization
          </li>
          <li
            className={styles.dropdown__item}
            onClick={() => handleSelect("Organization 1")}
          >
            Organization 1
          </li>
          <li
            className={styles.dropdown__item}
            onClick={() => handleSelect("Organization 2")}
          >
            Organization 2
          </li>
          <li
            className={styles.dropdown__item}
            onClick={() => handleSelect("Organization 3")}
          >
            Organization 3
          </li>
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
