import { RecipeInfo } from 'components/RecipeInfo/RecipeInfo';
import {RecipeDifficulty} from 'components/RecipeDifficulty/RecipeDifficulty';
import {Wrapper, Title} from 'components/Recipe/Recipe.styled';
export const Recipe = ({recipe: {name, time, servings, calories, difficulty}}) => {
   
    return (
        <Wrapper>
            <Title>{name}</Title>
            <RecipeInfo 
                time={time}
                servings={servings}
                calories={calories}
            />
            <RecipeDifficulty difficulty={difficulty}/>
        </Wrapper>
    );
};