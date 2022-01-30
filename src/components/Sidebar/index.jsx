import {
  DesktopOutlined,
  HomeOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Menu } from "antd";

import "./styles.scss";

const { SubMenu } = Menu;

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Enfeite
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="Enfeite">
          <Menu.Item key="3">Enfeite</Menu.Item>
          <Menu.Item key="4">Enfeite</Menu.Item>
          <Menu.Item key="5">Enfeite</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Enfeite">
          <Menu.Item key="6">Enfeite </Menu.Item>
          <Menu.Item key="8">Enfeite</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<PieChartOutlined />}>
          Enfeite
        </Menu.Item>
      </Menu>
    </div>
  );
};
