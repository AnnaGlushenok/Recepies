import {CategoryType} from "@/types/CategoryType";

export class CategoryController {
    private categories: CategoryType[] = [
        {id: 1, name: "Завтрак"},
        {id: 2, name: "Обед"},
        {id: 3, name: "Ужин"},
        {id: 4, name: "Десерт"},
    ];

    getAll(): CategoryType[] {
        return this.categories
    }
}