import styles from "./page.module.css";
import SwiperComponent from "../components/swipercomponent";

export default function Home() {
  return (
    <div className={styles.page}>
        <div className={styles.gallerytitle}><h1>The Times of Our Lives</h1>
        
    <div className={styles.SwiperComponent}>
      <SwiperComponent/>
    </div></div>
    </div>
  );
}
