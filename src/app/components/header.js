import CountdownTimer from "./countdown";
import "./countdown.module.css";
import Link from "next/link";
import {Monsieur_La_Doulaise} from "next/font/google";
import styles from './header.module.css';
const monsieurLaDoulaise = Monsieur_La_Doulaise({
  subsets:["latin"],
  weight:"400",
});

const header = () => {
return (
<header className={styles.header}>
       <ul className={styles.nav}>
        <li><Link className={styles.navlink} href="/"><strong>Home</strong></Link></li>
        <li><Link className={styles.navlink} href="/gallery"><strong>Gallery</strong></Link></li>
        <li><Link className={styles.navlink} href="/songs"><strong>Songs</strong></Link></li>
        <li><Link className={styles.navlink} href="/hotel"><strong>Hotels</strong></Link></li>
        <li><Link className={styles.navlink} href="/party"><strong>Party</strong></Link></li>
        <li><Link className={styles.navlink} href="/gift"><strong>Gifts</strong></Link></li>
        <li><Link className={styles.navlink} href="/rsvp"><strong>RSVP</strong></Link></li>
      </ul>
      <div className= {styles.titleinfo}>
      <div className={styles.ourNames}><h1 className={monsieurLaDoulaise.className} >Gerard & Bria</h1></div>
      <p>AUGUST 9, 2025</p>
      <p>Two o'clock in the afternoon</p>
      <p>LOCATION:</p>
      <p className={styles.address}>230 West Coulter Street Philadelphia PA, 19144</p>
      </div>
      <div className= {styles.timer}> <CountdownTimer/></div>
      </header>
);
};
export default header;
