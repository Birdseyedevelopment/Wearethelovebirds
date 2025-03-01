import Image from "next/image";
import styles from "./monogram.module.css";
const monogram = () => {
    return (
        <Image className={styles.photo2} src= "/images/monogram.jpg" alt="G&B Monogram" width={100} height={100}/>
      
    );
    };
    export default monogram;