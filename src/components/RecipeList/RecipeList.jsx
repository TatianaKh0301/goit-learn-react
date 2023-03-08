import {Recipe} from "components/Recipe/Recipe";
export const RecipeList = ({recipes}) => {
    console.log("recipes", recipes);
    return ( 
        <ul>
            {
                recipes.map(recipe => (
                    <li key={recipe.id}>
                        <Recipe recipe={recipe}/>
                    </li>
                ))}
        </ul>
    );
};