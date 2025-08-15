'use client';
import Navbar from "@/components/NavbarComponent/Navbar";
import {useState} from "react";
import {RecipeController} from "@/data/RecipeController";
import Card from "@/components/CardComponent/Card";
import style from "./main.module.css";

export default function Main() {
    const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
    const recipes = new RecipeController().getAll()
    const filteredRecipes =
        selectedCategories.length === 0
            ? recipes
            : recipes.filter(r => selectedCategories.includes(r.id));

    return (
        <>
            <header>
                <Navbar selected={selectedCategories} setSelected={setSelectedCategories}/>
            </header>
            <main className={style.container}>
                {filteredRecipes.map(recipe =>
                    <Card key={recipe.id} recipe={recipe}/>)}
            </main>
        </>
    );
}