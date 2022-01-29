import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Table, Tooltip } from "antd";

import "./styles.scss";
import { Button } from "../../components/Button";
import Search from "antd/lib/input/Search";

import { FiEdit2, FiTrash2 } from "react-icons/fi";

import { SearchColumn } from "../../components/SearchColumn";

const columns = [
  {
    title: "Título",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
    // width: 150,
  },
  {
    title: "Símbolo",
    dataIndex: "age",
    key: "age",
    // width: 80,
  },
  {
    title: "Actions",
    dataIndex: "address",
    key: "address 1",
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      // <Tooltip placement="topLeft" title={address}>
      //   {address}
      // </Tooltip>
      <div className="actions-table">
        <button className="btn-table btn-edit">
          <FiEdit2 className="icon-edit" /> Editar
        </button>
        <button className="btn-table btn-delete">
          <FiTrash2 className="icon-edit" /> Deletar
        </button>
        {/* <FiTrash2 className="icon-delete" /> */}
      </div>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "Sistema Especial de Liquidação e Custódia",
    age: "Selic",
    address: "New York No. 1 Lake Park, New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Sistema Especial de Liquidação e Custódia",
    age: "Selic",
    address: "London No. 2 Lake Park, London No. 2 Lake Park",
  },
  {
    key: "3",
    name: "Sistema Especial de Liquidação e Custódia",
    age: "Selic",
    address: "Sidney No. 1 Lake Park, Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Sistema Especial de Liquidação e Custódia",
    age: "Selic",
    address: "New York No. 1 Lake Park, New York No. 1 Lake Park",
  },
  {
    key: "5",
    name: "Sistema Especial de Liquidação e Custódia",
    age: "Selic",
    address: "London No. 2 Lake Park, London No. 2 Lake Park",
  },
  {
    key: "6",
    name: "Sistema Especial de Liquidação e Custódia",
    age: "Selic",
    address: "New York No. 1 Lake Park, New York No. 1 Lake Park",
  },
  {
    key: "7",
    name: "Sistema Especial de Liquidação e Custódia",
    age: "Selic",
    address: "London No. 2 Lake Park, London No. 2 Lake Park",
  },
];

export const Home = () => {
  return (
    <div className="home">
      {/* <Header /> */}
      <Sidebar />
      <main className="container">
        <Header />

        <section className="content">
          {/* <form action="onSubmit" className="form"> */}
          <div className="content-header">
            {/* <h1>Indexadores</h1> */}

            <h1>Indexadores</h1>
            <Search placeholder="Buscar indexador" style={{ width: 200 }} />
            <Button title="Cadastrar" />
          </div>
          <Table columns={columns} dataSource={data} />
          {/* </form> */}
        </section>
      </main>
    </div>
  );
};
