import Image from "next/image";
import style from "./style.module.css"
import {RecipeController} from "@/data/ReceiptController";

const recipeController = new RecipeController();

interface recipe {
    params: { id: string };
}

export default function Receipt({params}: recipe) {
    const {id} = params;
    const recipe = recipeController.getById(+id)
    if (!recipe)
        return <p>Рецепт ещё не придумали(</p>;

    return (
        <div>
            <h1 className={style.center}>{recipe.name}</h1>
            <div className={style.container}>
                <Image className={style.img} src={recipe.imgPath} width={340} height={200} alt={recipe.name}/>
                <div className={style.ingredients}>
                    <table className={style.table}>
                        <thead className={style.caption}>
                        <tr>
                            <th colSpan={2}>Ингредиенты</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            recipe.ingredients.map((item, index) => (
                                <tr key={index}>
                                    <td className={style.left_col}> {item.name}</td>
                                    <td className={style.right_col}> {item.amount}</td>
                                </tr>
                            ))
                        }</tbody>
                    </table>
                </div>
            </div>
            <h2 className={style.center}>Технология</h2>
            <ol className={style.list}>
                {
                    recipe.technology.map((item, index) =>
                        <li key={index}>{item.item}</li>
                    )
                }</ol>
        </div>
    );
}
