"use client";
import React, { FC } from "react";

import { SwitchButtonProps } from "./SwitchButton.type";
import styles from "./SwitchButton.module.scss";

const SwitchButton: FC<SwitchButtonProps> = ({
  classNames,
  name,
  checked,
  handleChange,
}) => {
  return (
    <label className={`${styles["switch"]} ${classNames} switch-t`}>
      <input
        onChange={handleChange}
        type="checkbox"
        checked={checked}
        name={name}
        id={name}
      />
      <i></i>
    </label>
  );
};

export default SwitchButton;
