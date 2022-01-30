import { Divider } from "antd";
import { FiLogOut, FiMail } from "react-icons/fi";

import { Logo } from "../Logo";

import "./styles.scss";



export const Header = () => {
  return (
    <header className="header">
        <Logo />
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
