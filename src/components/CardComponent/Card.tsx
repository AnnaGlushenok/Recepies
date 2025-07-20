import styles from "./card.module.css";
import Image from "next/image";
import s from "../../../public/image.svg"

export default function Card() {
    return (
        <div className={styles.card_container}>
            <Image className={styles.img} src={s} alt={"food"}/>
            <h1 className={styles.name}>Рисовая каша</h1>
            <p className={styles.category}>Завтрак</p>
            <p className={styles.ingredients}>Рис, вода, сахар, соль, перец, мука, масло</p>
            <button className={styles.button}>Готовить</button>
        </div>
    );
}