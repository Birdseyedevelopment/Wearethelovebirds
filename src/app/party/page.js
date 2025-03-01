import styles from './page.module.css';
import Image from 'next/image';



export default function home(){
    return(
        <div className= {styles.partypage}>
            <h1 className= {styles.title}>Wedding Party</h1>
<div className={styles.guysandgirls}>
            <div className={styles.guys}>
                <div className={styles.photoframe}>
                    <Image className={styles.photo} src= "/images/steve.jpg" alt="steve headshot" width={114} height={114}/>
                    <p><strong>Steve</strong></p>
                    <p>Best Man</p>
                </div>
                <div className={styles.photoframe}>
                    <Image className={styles.photo} src= "/images/kesny.jpg" alt="Kesny headshot" width={114} height={114}/>
                    <p><strong>Kesny</strong></p>
                    <p>Groomsman</p>
                </div><div className={styles.photoframe}>
                    <Image className={styles.photo} src= "/images/alex.jpg" alt="alex headshot" width={114} height={114}/>
                    <p><strong>Alex</strong></p>
                    <p>Groomsman</p>
                </div>
                <div className={styles.photoframe}>
                    <Image className={styles.photo} src= "/images/faheem.jpg" alt="faheem headshot" width={114} height={114}/>
                    <p><strong>Faheem</strong></p>
                    <p>Groomsman</p>
                </div>
                <div className={styles.photoframe}>
                    <Image className={styles.photo} src= "/images/justin.jpg" alt="Justin headshot" width={114} height={114}/>
                    <p><strong>Justin</strong></p>
                    <p>Groomsman</p>
                </div>
                <div className={styles.photoframe}>
                    <Image className={styles.photo} src= "/images/brandon.jpeg" alt="Brandon headshot" width={114} height={114}/>
                    <p><strong>Brandon</strong></p>
                    <p>Groomsman</p>
                </div>
                
            </div> 
            <div className={styles.girls}>
                <div className={styles.photoframe}>
                    <Image className={styles.photo} src= "/images/lea.jpg" alt="lea headshot" width={114} height={114}/>
                    <p><strong>Lea</strong></p>
                    <p>Maid of Honor</p>
                </div>
                <div className={styles.photoframe}>
                    <Image className={styles.photo} src=  "/images/alexia.jpg" alt="lexi headshot" width={114} height={114}/>
                    <p><strong>Alexia</strong></p>
                    <p>Matron of Honor</p>
                </div>
                <div className={styles.photoframe}>
                    <Image className={styles.photo} src= "/images/kianna.jpg" alt="kianna headshot" width={114} height={114}/>
                    <p><strong>Kianna</strong></p>
                    <p>Bridesmaid</p>
                </div>
                <div className={styles.photoframe}>
                    <Image className={styles.photo} src= "/images/tati.jpg" alt="Tatyana headshot" width={114} height={114}/>
                    <p><strong>Tatyana</strong></p>
                    <p>Bridesmaid</p>
                </div>
                
                <div className={styles.photoframe}>
                    <Image className={styles.photo} src= "/images/najah.jpg" alt="najah headshot" width={114} height={114}/>
                    <p><strong>Najah</strong></p>
                    <p>Bridesmaid</p>
                </div>
                <div className={styles.photoframe}>
                    <Image className={styles.photo} src= "/images/camille.jpg" alt="camille headshot" width={114} height={114}/>
                    <p><strong>Camille</strong></p>
                    <p>Junior Bridesmaid</p>
                </div>
                
              </div> 
              <div className={styles.photoframeMj}>
                    <Image className={styles.photo} src= "/images/MJ.jpg" alt="MJ headshot" width={114} height={114}/>
                    <p><strong>MJ</strong></p>
                    <p>Ring Bearer</p>
                </div>
            </div>
        </div>
    );
}