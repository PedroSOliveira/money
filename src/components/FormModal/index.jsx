import { useCallback, useEffect, useState } from "react";
import Modal from "react-modal";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import closeImg from "../../assets/close.svg";

import { ServiceApiIndexadores } from "../../services/Indexadores";
import { Button } from "../Button";

import "./styles.scss";

export const FormModal = ({
  isOpen,
  onRequestClose,
  getDataAllIndexadores,
  indexadorId,
}) => {
  const [nome, setNome] = useState("");
  const [simbolo, setSimbolo] = useState("");

  const handleAddNewIndexador = useCallback(async (nome, simbolo) => {
    if (nome && simbolo) {
      try {
        const responseData = await ServiceApiIndexadores.createIndexador(
          nome,
          simbolo
        );
        const { message } = responseData.data;

        toast.success(message);

        onRequestClose();
        getDataAllIndexadores();
      } catch (error) {
        toast.error(error.message);
        console.log(error.stack);
      }
    } else {
      toast.warning("Campos vazios!!!");
    }
  }, []);

  const handleUpdateIndexador = useCallback(
    async (indexadorId, simbolo, nome) => {
      if (nome && simbolo) {
        try {
          const responseData = await ServiceApiIndexadores.editIndexador(
            indexadorId,
            nome,
            simbolo
          );

          const { message } = responseData.data;
          toast.success(message);
          onRequestClose();
          getDataAllIndexadores();
        } catch (error) {
          toast.error(error.message);
          console.log(error.stack);
        }
      } else {
        toast.error("Campos vazios!!!");
      }
    },
    []
  );

  const getDataIndexador = useCallback(async (indexadorId) => {
    if (indexadorId !== 0) {
      try {
        const responseData = await ServiceApiIndexadores.getIndexador(
          indexadorId
        );
        const { simbolo, nome } = responseData;

        setSimbolo(simbolo);
        setNome(nome);
      } catch (error) {
        alert(error.message);
        console.error(error.stack);
      }
    }
  }, []);

  const onChangeNome = (text) => {
    setNome(text);
  };

  const onChangeSimbolo = (text) => {
    const simbolo = text.toUpperCase();
    setSimbolo(simbolo);
  };

  useEffect(() => {
    getDataIndexador(indexadorId);
  }, []);

  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <div className="container-modal">
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
        <header className="header-modal">
          {indexadorId === 0 ? (
            <h1>Cadastrar indexador</h1>
          ) : (
            <h1>Atualizar indexador</h1>
          )}
          <button
            type="button"
            onClick={onRequestClose}
            className="react-modal-close"
          >
            <img src={closeImg} alt="Close" />
          </button>
        </header>

        <main className="content-modal">
          <label htmlFor="">Nome</label>
          <input
            value={nome}
            type="text"
            placeholder="Nome"
            onChange={(event) => onChangeNome(event.target.value)}
          />
          <label htmlFor="">S??mbolo</label>
          <input
            value={simbolo}
            type="text"
            placeholder="S??mbolo"
            onChange={(event) => onChangeSimbolo(event.target.value)}
          />
          <Button
            title="Confirmar"
            onClick={() =>
              indexadorId === 0
                ? handleAddNewIndexador(nome, simbolo)
                : handleUpdateIndexador(indexadorId, nome, simbolo)
            }
          />
        </main>
      </div>
    </Modal>
  );
};
