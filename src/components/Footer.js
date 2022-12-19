import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.rodape}>
      <footer>
        <h3>Saiba Mais</h3>
        <p>Endereço: Avenida Fulano de tal, n° 999 - Conjunto Jardim Rosa</p>
        <p>Telefone: +55 99 99999-9999</p>
      </footer>
    </div>
  );
}

export default Footer;
