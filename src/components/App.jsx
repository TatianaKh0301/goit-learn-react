// -------------------24TH CORE WORLDS COALITION CONFERENCE------------------

// import { PageTitle } from "components/PageTitle/PageTitle";
// import { EventBoard } from "components/EventBoard/EventBoard";
// import upcomingEvents from "upcoming-events.json"



// ----------------RECIPES-------------------------
// import recipes from "recipes.json";
// import {RecipeList} from "components/RecipeList/RecipeList";


// -----------------COUNTER----------------------------
// import {Counter} from 'components/Counter/Counter'


import { Dropdown } from "./Dropdown/Dropdown";

export const App = () => {
  return (
    <div>
      {/*-------------------- 24TH CORE WORLDS COALITION CONFERENCE----------------- */}

      {/* <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents}/> */}



      {/* ----------------RECIPES------------------------- */}
      {/* <RecipeList  recipes={recipes}/> */}


      {/* ---------------------COUNTER----------------------- */}
      {/* <Counter initialValue={10}/> */}

      <Dropdown/>

    </div>
  );
};
