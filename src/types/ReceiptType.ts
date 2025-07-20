export type ReceiptType = {
    id: number,
    name: string;
    imgPath: string,
    ingredients: { name: string, amount: string }[],
    technology: { item: string }[],
};