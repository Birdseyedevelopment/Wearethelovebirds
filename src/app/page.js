import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.frame}>
      <Image className={styles.photo} src= "/images/mainengagement.jpg" alt="loving photo of Bria and Gerard" width={500} height={500}/>
      <div className={styles.ourstory}><p>Gerard and Bria met on Facebook dating in January of 2020. They immediately connected after their first date where they bonded over Gerard ordering a blackberry mojito 
        and receiving it with whole, uncut blackberries. As time went on, the two of them found more things that they had in common such as wanting to further their education. Two months after they started dating, COVID-19 came along and shook up the world.
        During the time of isolation and “shut down”, Gerard and Bria not only liked each other but began to fall in love. In August of 2020, they both began a new educational venture resulting in Gerard’s associate degree in Business Leadership with a certificate in Web Development, and Bria receiving her degree as a Physical Therapist Assistant. 
        Over the last five years, they have experienced wins and losses together but remain strong in their trust in God and love for each other. Growing up with very different backgrounds, they learned a lot from each other and appreciated each other’s differences. They look forward to starting 
        a new chapter in their story filled with more love, continued memories, family, and faith.</p>
      
       </div>
      
    </div>
   
    </div>
  );
}
