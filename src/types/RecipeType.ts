export type RecipeType = {
    id: number,
    category_id: number,
    name: string,
    imgPath: string,
    ingredients: { name: string, amount: string }[],
    technology: { item: string }[],
    notes?: string,
};