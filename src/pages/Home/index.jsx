import { Table } from "antd";
import Search from "antd/lib/input/Search";

import { useCallback, useEffect, useState } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button } from "../../components/Button";
import { FormModal } from "../../components/FormModal";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { ServiceApiIndexadores } from "../../services/Indexadores";

import "./styles.scss";

const { Column } = Table;

const PAGE_SIZE = 7;

export const Home = () => {
  const [nameFilter, setNameFilter] = useState("");
  const [sizeElements, setSizeElements] = useState(0);
  const [loading, setLoading] = useState(false);
  const [indexadores, setIndexadores] = useState([]);
  const [isVisibleFormModal, setVisibleFormModal] = useState(false);
  const [idIndexador, setIdIndexador] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePaginationChange = (page) => {
    setCurrentPage(page);
  };

  const pagination = {
    current: currentPage,
    defaultPageSize: PAGE_SIZE,
    pageSize: PAGE_SIZE,
    total: sizeElements,
    onChange: handlePaginationChange,
    showSizeChanger: false,
  } || { total: sizeElements };

  const getDataAllIndexadores = useCallback(
    async (PAGE_SIZE, currentPage, nameFilter) => {
      try {
        setLoading(true);

        const { data: responseData, headers: responseHeaders } =
          await ServiceApiIndexadores.getAllIndexadores(
            PAGE_SIZE,
            currentPage,
            nameFilter
          );
        const { data: indexadores } = responseData;
        const { "x-total-count": sizeElements } = responseHeaders;

        setSizeElements(sizeElements);
        setIndexadores(indexadores);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const handleDeleteIndexador = useCallback(async (id) => {
    try {
      const responseData = await ServiceApiIndexadores.deleteIndexador(id);
      const { message } = responseData.data;

      toast.success(message);

      getDataAllIndexadores(PAGE_SIZE, currentPage);
    } catch (error) {
      toast.error(error.message);
      console.error(error.stack);
    }
  }, []);

  const handleOpenEditModal = (id) => {
    setIdIndexador(id);
    setVisibleFormModal(true);
  };

  const handleAddNewIndexador = () => {
    setIdIndexador(0);
    setVisibleFormModal(true);
  };

  const onSearchIndexador = (text) => {
    setCurrentPage(1);
    setNameFilter(text);
  };

  useEffect(() => {
    getDataAllIndexadores(PAGE_SIZE, currentPage, nameFilter);
  }, [currentPage, nameFilter]);

  return (
    <div className="home">
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
      <Header />
      <main className="container">
        <Sidebar />

        <section className="content">
          <div className="content-header">
            <h1>Indexadores</h1>
            <Button title="Cadastrar" onClick={handleAddNewIndexador} />
          </div>

          <Search
            className="search-indexador"
            placeholder="Buscar indexador(es)"
            style={{ width: 200 }}
            onSearch={(value) => onSearchIndexador(value)}
          />

          <Table
            size="small"
            scroll={{ x: 0, y: 320 }}
            rowKey="id"
            dataSource={indexadores}
            loading={loading}
            pagination={pagination}
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
              title="Editar"
              key="4"
              render={(item) => (
                <button
                  onClick={() => handleOpenEditModal(item.id)}
                  className="btn-table btn-edit"
                >
                  <FiEdit2 className="icon-edit" /> <span> Editar </span>
                </button>
              )}
            />
            <Column
              title="Excluir"
              key="5"
              render={(item) => (
                <button
                  onClick={() => handleDeleteIndexador(item.id)}
                  className="btn-table btn-delete"
                >
                  <FiTrash2 className="icon-edit" /> <span> Deletar </span>
                </button>
              )}
            />
          </Table>

          {isVisibleFormModal && (
            <FormModal
              indexadorId={idIndexador}
              isOpen={isVisibleFormModal}
              onRequestClose={() => setVisibleFormModal(false)}
              getDataAllIndexadores={getDataAllIndexadores}
            />
          )}
        </section>
      </main>
    </div>
  );
};
