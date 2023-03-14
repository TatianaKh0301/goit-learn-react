// -------------------24TH CORE WORLDS COALITION CONFERENCE------------------

// import { PageTitle } from "components/PageTitle/PageTitle";
// import { EventBoard } from "components/EventBoard/EventBoard";
// import upcomingEvents from "upcoming-events.json"



// ----------------RECIPES-------------------------
// import recipes from "recipes.json";
// import {RecipeList} from "components/RecipeList/RecipeList";


// -----------------COUNTER----------------------------
// import {Counter} from 'components/Counter/Counter'


// import { Dropdown } from "./Dropdown/Dropdown";

// import { ColorPicker } from './ColorPicker/ColorPicker';
// import colorOptions from 'coloroptions.json';

import React, {Component} from "react";
import { TodoList } from "./TodoList";

// export const App = () => {
//   return (
//     <div>
      // -------------------- 24TH CORE WORLDS COALITION CONFERENCE----------------- 

      // <PageTitle text="24th Core Worlds Coalition Conference" />
      // <EventBoard events={upcomingEvents}/> 



      // ----------------RECIPES------------------------- 
      // <RecipeList  recipes={recipes}/> 


      //  ---------------------COUNTER-----------------------
      // <Counter initialValue={10}/>


      // -------------DROPDOWN ----------------
      // <Dropdown/>


      // <ColorPicker options = {colorOptions}/>

    // </div> 

export class App extends Component {
  state = {
    todos: [
      {id: 'id-1', text: 'Выучить основы React', completed: true},
      {id: 'id-2', text: 'Разобраться с React Router', completed: false},
      {id: 'id-3', text: 'Пережить Redax', completed: false},
    ],
  };

  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }))
  }

  render() {
    const { todos } = this.state;
    const completedTodo = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );

    return(
      <>
        <div>
          <p>Общее количество: {todos.length} </p>
          <p>Количество выполненных: {completedTodo} </p>
        </div>
              <TodoList todos={todos} onDeleteTodo={this.deleteTodo}/>
      </>      
    );
  }
}
