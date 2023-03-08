// -------------------24TH CORE WORLDS COALITION CONFERENCE------------------

// import { PageTitle } from "components/PageTitle/PageTitle";
// import { EventBoard } from "components/EventBoard/EventBoard";
// import upcomingEvents from "upcoming-events.json"

import recipes from "recipes.json";
import {RecipeList} from "components/RecipeList/RecipeList";

export const App = () => {
  return (
    <div>
      {/*-------------------- 24TH CORE WORLDS COALITION CONFERENCE----------------- */}

      {/* <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents}/> */}
      <RecipeList  recipes={recipes}/>
    </div>
  );
};
