import styles from "./card.module.css";
import Image from "next/image";
import {RecipeType} from "@/types/RecipeType";
import Link from "next/link";

type Props = {
    recipe: RecipeType;
};
export default function Card({recipe}: Props) {
    return (
        <div className={styles.card_container}>
            <Image className={styles.img} width={340} height={200} src={recipe.imgPath} alt={recipe.name}/>
            <h1 className={styles.name}>{recipe.name}</h1>
            <p className={styles.category}>{recipe.category_id}</p>
            <p className={styles.ingredients}>{recipe.ingredients.map(r => r.name).join(", ")}</p>
            <Link className={styles.button} href={`/recepie/${recipe.id}`}>Готовить</Link>
        </div>
    );
}