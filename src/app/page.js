import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.frame}>
      <Image className={styles.photo} src= "/images/mainengagement.jpg" alt="loving photo of Bria and Gerard" width={500} height={500}/>
      <div className={styles.ourstory}><p>Love is a journey, and Gerard and Bria’s story began in the most modern of ways: through Facebook Dating in January of 2020. From the very first date, sparks flew when Gerard ordered a blackberry mojito, only to receive it with whole, uncut blackberries. It was a small moment, but one that brought them closer. As time passed, they found so many more shared interests, particularly their mutual desire to continue growing through education.

Just two months into their relationship, the world was hit by the COVID-19 pandemic, bringing everything to a standstill. But for Gerard and Bria, this time of isolation became an opportunity to deepen their bond, and they fell in love amidst the uncertainty. In August 2020, they each embarked on their own educational paths—Gerard earned an associate degree in Business Leadership along with a certificate in Web Development, and Bria achieved her degree as a Physical Therapist Assistant.

Through the highs and lows, they have stood by each other’s side for five years, remaining strong in their love, faith, and trust in God. Despite growing up with very different backgrounds, Gerard and Bria have come to appreciate and learn from each other’s differences, making their relationship even more beautiful.

As they step into this next chapter of their lives, Gerard and Bria are filled with excitement for the future—one filled with even more love, shared memories, family, and faith. They are so grateful to have you here to celebrate with them!

Join us in celebrating the union of Gerard and Bria as they begin this beautiful new chapter together.</p>
      
       </div>
      
    </div>
   
    </div>
  );
}
