import { Menu, Switch } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  HomeOutlined
} from "@ant-design/icons";

import "./styles.scss";
import { Logo } from "../Logo";

const { SubMenu } = Menu;

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Logo />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<PieChartOutlined />}>
          Files
        </Menu.Item>
      </Menu>
    </div>
  );
};
