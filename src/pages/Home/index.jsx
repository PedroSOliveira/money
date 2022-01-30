import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Table, Tooltip } from "antd";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

import { useState, useEffect, useCallback } from "react";

import "./styles.scss";
import { Button } from "../../components/Button";
import Search from "antd/lib/input/Search";

import { FiEdit2, FiTrash2 } from "react-icons/fi";

import { SearchColumn } from "../../components/SearchColumn";
import { ServiceApiIndexadores } from "../../services/Indexadores";
import { FormModal } from "../../components/FormModal";

const { Column } = Table;

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
  const [loading, setLoading] = useState(false);
  const [indexadores, setIndexadores] = useState([]);
  const [isVisibleFormModal, setVisibleFormModal] = useState(false);
  const [idIndexador, setIdIndexador] = useState(0);

  const getDataAllIndexadores = useCallback(async () => {
    try {
      setLoading(true);

      const responseData = await ServiceApiIndexadores.getAllIndexadores();
      const { data: indexadores } = responseData;

      setIndexadores(indexadores);

      // const comicSend = responseData.results[0];
      // setComicSend(comicSend);

      // console.log(responseData);
      console.log(indexadores);
      // console.log(comicSend.thumbnail.path);
      // setTotal(responseData.total);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }, [ServiceApiIndexadores]);

  const handleDeleteIndexador = useCallback(
    async (id) => {
      try {
        const responseData = await ServiceApiIndexadores.deleteIndexador(id);
        toast.success("Tudo certo!!!");

        console.log(responseData);
      } catch (error) {
        alert(error.message);
      } finally {
      }
    },
    [ServiceApiIndexadores]
  );

  const handleOpenEditModal = (id) => {
    setIdIndexador(id);
    setVisibleFormModal(true);
  }

  const handleAddNewIndexador = () => {
    setIdIndexador(0);
    setVisibleFormModal(true);
  }

  useEffect(() => {
    getDataAllIndexadores();
    // console.log("state" + indexadores)
  }, [getDataAllIndexadores, handleDeleteIndexador]);

  return (
    <div className="home">
      {/* <Header /> */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Sidebar />
      <main className="container">
        <Header />

        <section className="content">
          {/* <form action="onSubmit" className="form"> */}
          <div className="content-header">
            <h1>Indexadores</h1>
            {/* <h1>Indexadores</h1> */}

            <Button
              title="Cadastrar"
              onClick={handleAddNewIndexador}
            />
          </div>
          <Search placeholder="Buscar indexador" style={{ width: 200 }} />
          <Table
            // columns={columns}
            // style={{borderRadius: "1rem", padding: "1rem"}}
            // size="large"
            rowKey="id"
            dataSource={indexadores}
            loading={loading}
          >
            <Column
              title="Título"
              dataIndex="nome"
              key="0"
              render={(data) => <span>{data}</span>}
            />
            <Column
              title="Símbolo"
              dataIndex="simbolo"
              key="1"
              render={(data) => <span>{data}</span>}
            />
            <Column
              title="Data de cadastro"
              dataIndex="dataCadastro"
              key="2"
              render={(data) => <span>{data}</span>}
            />
            <Column
              title="Data de alteração"
              dataIndex="dataAlteracao"
              key="3"
              render={(data) => <span>{data}</span>}
            />
            <Column
              title="Editar"
              // dataIndex="dataAlteracao"
              key="4"
              render={(item) => (
                <button
                  onClick={() => handleOpenEditModal(item.id)}
                  className="btn-table btn-edit"
                >
                  <FiEdit2 className="icon-edit" /> Editar
                </button>
              )}
            />
            <Column
              title="Excluir"
              // dataIndex="dataAlteracao"
              key="5"
              render={(item) => (
                <button
                  onClick={() => handleDeleteIndexador(item.id)}
                  className="btn-table btn-delete"
                >
                  <FiTrash2 className="icon-edit" /> Deletar
                </button>
              )}
            />
          </Table>
          {isVisibleFormModal && (
            <FormModal
              indexadorId={idIndexador}
              isOpen={isVisibleFormModal}
              onRequestClose={() => setVisibleFormModal(false)}
            />
          )}
        </section>
      </main>
    </div>
  );
};
