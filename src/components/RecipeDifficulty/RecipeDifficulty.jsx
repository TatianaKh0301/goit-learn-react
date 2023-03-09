import {Wrapper, Title, WrapperList, Item} from "components/RecipeDifficulty/RecipeDifficulty.styled";

export const RecipeDifficulty = ({difficulty}) => {
    return (
        <Wrapper>
            <Title>Difficulty</Title>
            <WrapperList>
                <Item active={difficulty === 'easy'}>Easy</Item>
                <Item active={difficulty === 'medium'}>Medium</Item>
                <Item active={difficulty === 'hard'}>Hard</Item>
            </WrapperList>
        </Wrapper>
    );    
}