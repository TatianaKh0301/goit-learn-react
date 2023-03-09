import { BsAlarm } from "react-icons/bs";
import {HiOutlineChartPie, HiOutlineChartBar} from "react-icons/hi";
import {RecipeInformation, InfoBlock} from 'components/RecipeInfo/RecipeInfo.styled';

export const RecipeInfo = ({time, servings, calories}) => {
   return (
        <RecipeInformation>
            <InfoBlock>
                <BsAlarm />
                {time} mins
            </InfoBlock>
            <InfoBlock>
                <HiOutlineChartPie />
                {servings} servings
            </InfoBlock>
            <InfoBlock>
                <HiOutlineChartBar />
                {calories} calories
            </InfoBlock>
        </RecipeInformation>
   );
}