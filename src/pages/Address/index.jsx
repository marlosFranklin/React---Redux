import { useState } from "react";
import styles from "./address.module.css";
import { Header } from "../../components/header";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAddsress, deleteAddress } from "../../redux/user/slice";
import toast, { Toaster } from "react-hot-toast";

export function Address() {
  const { user } = useSelector((rootReducer) => rootReducer.user);
  const dispatch = useDispatch();
  const [addressName, setAddressName] = useState(user?.address?.location ?? "");
  const [addressNumber, setAddressNumber] = useState(
    user?.address?.number ?? "",
  );
  const navigate = useNavigate();

  function handleRegisterAddress() {
    if (user === null) {
      toast.error('"Usuário não logado "');
      navigate("/");
      return;
    }
    dispatch(
      addAddsress({
        location: addressName,
        number: addressNumber,
      }),

      navigate("/painel"),
    );
  }

  const handleDeleteAddress = () => {
    setAddressName("");
    setAddressNumber("");
    dispatch(deleteAddress());
    toast.success("Endereço deletado com sucesso!");
  };

  return (
    <>
      <Header />
      <Toaster />
      <div className={styles.container}>
        <main className={styles.content}>
          <div>
            <Link to="/painel">Voltar para o painel</Link>
          </div>

          <section className={styles.address}>
            <h2>
              Meu endereço
              {user && user.address && (
                <button
                  onClick={handleDeleteAddress}
                  className={styles.btnDelete}
                >
                  Deletar endereço
                </button>
              )}
            </h2>

            <input
              type="text"
              className={styles.input}
              placeholder="Ex: Rua centro, x"
              value={addressName}
              onChange={(e) => setAddressName(e.target.value)}
            />
            <input
              type="text"
              className={styles.input}
              placeholder="Numero"
              value={addressNumber}
              onChange={(e) => setAddressNumber(e.target.value)}
            />

            <button className={styles.button} onClick={handleRegisterAddress}>
              Salvar Alteração
            </button>
          </section>
        </main>
      </div>
    </>
  );
}
