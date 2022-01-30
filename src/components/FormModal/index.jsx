import Modal from "react-modal";

import { useCallback, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import closeImg from "../../assets/close.svg";

import "./styles.scss";
import { Button } from "../Button";
import { ServiceApiIndexadores } from "../../services/Indexadores";

export const FormModal = ({ isOpen, onRequestClose, indexadorId }) => {
  const [nome, setNome] = useState("");
  const [simbolo, setSimbolo] = useState("");
  //   const [comic, setComic] = useState(null);

  const handleAddNewIndexador = useCallback(
    async (nome, simbolo) => {
      if (nome && simbolo) {
        try {
          const responseData = await ServiceApiIndexadores.createIndexador(
            nome,
            simbolo
          );
          console.log(responseData);
          toast.success("Indexador cadastrado!!!");
          onRequestClose();
        } catch (error) {
          alert(error.message);
        }
      } else {
        toast.error("Campos vazios!!!");
      }
    },
    [ServiceApiIndexadores]
  );

  const handleUpdateIndexador = useCallback(
    async (indexadorId, simbolo, nome) => {
      if (nome && simbolo) {
        try {
          const responseData = await ServiceApiIndexadores.editIndexador(
            indexadorId,
            nome,
            simbolo
          );
          console.log(responseData);
          toast.success(" Atualizado!!!");
          onRequestClose();
        } catch (error) {
          alert(error.message);
        }
      } else {
        toast.error("Campos vazios!!!");
      }
    },
    []
  );

  const getDataIndexador = useCallback(
    async (indexadorId) => {
      if (indexadorId !== 0) {
        try {
          const responseData = await ServiceApiIndexadores.getIndexador(
            indexadorId
          );
          const { simbolo, nome } = responseData;

          setSimbolo(simbolo);
          setNome(nome);
          console.log(simbolo, nome);
          //   setComic(responseData);
          //   console.log(responseData);
        } catch (error) {
          alert(error.message);
        }
      }
    },
    [ServiceApiIndexadores]
  );

  const teste = () => {};

  const onChangeNome = (text) => {
    setNome(text);
  };

  const onChangeSimbolo = (text) => {
    const simbolo = text.toUpperCase();
    setSimbolo(simbolo);
  };

  useEffect(() => {
    getDataIndexador(indexadorId);
  }, [getDataIndexador]);

  return (
    <Modal
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
          <h1>Cadastrar indexador</h1>
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
          <label htmlFor="">Símbolo</label>
          <input
            value={simbolo}
            type="text"
            placeholder="Símbolo"
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
