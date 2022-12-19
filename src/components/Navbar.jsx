import styles from './Navbar.module.css';
import Y from '../img/y.png'

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={Y} alt="" />
        <h3>Yuri Code</h3>
      </div>

      <div className={styles.menu}>
        <a href="#">Login</a>
      </div>
    </div>
  );
}

export default Navbar;
