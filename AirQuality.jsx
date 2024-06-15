import styles from "./AirQuality.module.css";
import scale from "./media/image/table.jpg";


function AirQuality() {
    return (
        <>
        <div className={styles.container}>
        <div className={styles.content}>
            <span className={styles.heading}>Air Status</span>
            <span className={styles.def}>AQI tells you how clean or polluted<br/> your air is, and what associated<br/> health effects might be a <br/>concern for you. </span><br/>
            <div className={styles.btn}>
            <button className={styles.btn1}>Fetch Location</button>
            <button className={styles.btn2}>Air Status</button>
            </div>
            <img src={scale} className={styles.img}/>
        </div>
        <div className={styles.collage}></div>
    </div>
        </>
    )
}
export default AirQuality