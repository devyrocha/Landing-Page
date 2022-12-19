import styles from "./Form.module.css";

function Form() {
  function Enviar() {
    alert("Enviado com sucesso!");
  }
  return (
    <div className={styles.container}>
      <h3>Entre em contato conosco</h3>

      <div>
        <form action="" className={styles.form}>
          <label htmlFor="">Nome:</label>
          <input type="text" />

          <label htmlFor="">Email:</label>
          <input type="email" />

          <label htmlFor="">Telefone:</label>
          <input type="text" />
        </form>

        <button onClick={Enviar} className={styles.btn}>
          Enviar
        </button>
      </div>
    </div>
  );
}

export default Form;
