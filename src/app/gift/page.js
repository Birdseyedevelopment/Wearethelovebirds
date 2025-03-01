import Link from "next/link";
import styles from "./page.module.css";
export default function Home() {
    return (
        <div className={styles.wholepage}>
            <div className={styles.maincontent}>
                <h1>Monetary gifts are highly appreciated and encouraged to contribute to our honeymoon fund as we begin our life together. THANK YOU IN ADVANCE!</h1>
            <ul className={styles.apps}>
                <li><Link className={styles.applink} href="https://www.zellepay.com/">ZELLE</Link> - 267 393 1456</li>
                <li><Link className={styles.applink} href="https://venmo.com/">VENMO</Link> - @bria-miles611</li>
                <li><Link className={styles.applink} href="https://cash.app/">CASH APP</Link> - $birdson3</li>
            </ul>
            <p>Our intimate registry can be found here: <Link className={styles.applink} href="https://www.amazon.com/wedding/share/Reallovebirds25">Amazon Registry</Link></p>
           
            
             </div> 
       </div>
    );
}