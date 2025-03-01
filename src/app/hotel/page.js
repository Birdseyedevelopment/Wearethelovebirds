import Link from "next/link";
import styles from "./page.module.css"

export default function Home() {
    return (
        <div className={styles.hotellistings}>
            <h1>Hotel Accommodations</h1>
            <div className={styles.hotel}>      
    <h3>Homewood Suites by Hilton</h3>
    <p>Horsham, Willow Grove</p>
    <p>720 Blair Mill Road
    Horsham, PA 19044</p>
    <p>Contact: +1 215-830-9400</p>
    <Link href='https://www.hilton.com/en/hotels/phlhshw-homewood-suites-horsham-willow-grove/?SEO_id=GMB-AMER-HG-PHLHSHW&y_source=1_MTM0ODEwOTktNzE1LWxvY2F0aW9uLndlYnNpdGU%3D'>Link to Homewood Suites by Hilton website </Link>
        </div>

        <div className={styles.hotel}>
    <h3>Staybridge Suites Philadelphia-Montgomeryville</h3>
       <p> 119 Garden Golf Blvd 
        North Wales, PA 19454</p>
        <p>Contact: +1 833-570-1818</p> 
    <Link href='https://www.ihg.com/staybridge/hotels/us/en/north-wales/phlmg/hoteldetail?cm_mmc=GoogleMaps-_-SB-_-US-_-PHLMG'>Link to Staybridge suites website </Link>
    </div>

    <div className={styles.hotel}>
    <h3>Holiday Inn Express & Suites Ft Washington-Philadelphia</h3>
<p>432 Pennsylvania Avenue
Fort Washington, PA 19034</p>
<p>Contact: 215-591-9000</p>
<Link href="https://www.ihg.com/holidayinnexpress/hotels/us/en/fort-washington/ftspa/hoteldetail?cm_mmc=GoogleMaps-_-EX-_-US-_-FTSPA">Link to Holiday inn express & suites Website</Link>
    </div>
       </div>
        
    );
}


