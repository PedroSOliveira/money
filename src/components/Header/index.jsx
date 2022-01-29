import { Divider } from "antd";
import { Logo } from "../Logo";

import { FiMail, FiLogOut } from "react-icons/fi";

import "./styles.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <FiMail />
        <Divider className="divider" type="vertical" />
        <h2 className="name-user">Pedro Oliveira</h2>
        <Divider className="divider" type="vertical" />
        <FiLogOut />
      </div>
    </header>
  );
};
