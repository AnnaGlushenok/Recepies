import {RecipeType} from "../types/RecipeType";

export class RecipeController {
    private recipes: RecipeType[] = [{
        id: 1,
        name: "Сырный соус",
        category_id: 1,
        imgPath: "images/image.svg",
        ingredients: [
            {name: "Сливочное масло", amount: "2 ч.л."},
            {name: "Мука", amount: "2 ч.л."},
            {name: "Соль", amount: "1/2 ч.л."},
            {name: "Молоко", amount: "350 мл"}],
        technology:
            [
                {item: "Растопите масло в кастрюле на среднем огне."},
                {item: "Добавить муку в растопленное сливочное масло."},
                {item: "Взбейте сливочное масло и муку до однородности, не снимая кастрюльку с огня."},
            ],
        notes: ""
    },
        {
            id: 2,
            name: "Сырный соус2",
            category_id: 2,
            imgPath: "images/image.svg",
            ingredients: [
                {name: "Сливочное масло", amount: "2 ч.л."},
                {name: "Мука", amount: "2 ч.л."},
                {name: "Соль", amount: "1/2 ч.л."},
                {name: "Молоко", amount: "350 мл"}],
            technology:
                [
                    {item: "Растопите масло в кастрюле на среднем огне."},
                    {item: "Добавить муку в растопленное сливочное масло."},
                    {item: "Взбейте сливочное масло и муку до однородности, не снимая кастрюльку с огня."},
                ],
            notes: ""
        }
    ]

    getAll(): RecipeType[] {
        return this.recipes;
    }

    getById(id: number): RecipeType | undefined {
        return this.recipes.find((r) => r.id === id);
    }
}
