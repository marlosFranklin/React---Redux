import styles from "./home.module.css";
import { Header } from "../../components/header";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

import { useSelector } from "react-redux";
import { deleteAddress, fetchUsers } from "../../redux/user/slice";

export function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector((rootReducer) => rootReducer.user);

  function handleDeleteAddress() {
    toast.success("Endereço deletado com sucesso!");
    dispatch(deleteAddress());
  }

  function handleFetchUsers() {
    dispatch(fetchUsers());
  }
  return (
    <>
      <Header />
      <Toaster />
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>
            Login
          </Link>
          <Link to="/painel" className={styles.link}>
            Painel
          </Link>
          <Link to="/address" className={styles.link}>
            Meus endereços
          </Link>
        </nav>

        <main className={styles.content}>
          <div className={styles.message}>
            <h1 className={styles.title}>
              Olá {user ? user.name : "Visitante"}, bem vindo!
            </h1>

            {user && <span>Email:{user.email}</span>}

            {user && user.address && (
              <>
                <strong className={styles.addressLabel}>Endereço atual:</strong>
                <div className={styles.address}>
                  <p>
                    Rua:{user.address.location}, n {user.address.number}
                  </p>

                  <button onClick={handleDeleteAddress}>
                    Deletar endereço
                  </button>
                </div>
              </>
            )}

            <hr />
            <br />
            <h2>Lista de usuários</h2>
            <button onClick={handleFetchUsers}>Buscar usuários</button>
            <br />
          </div>
        </main>
      </div>
    </>
  );
}
