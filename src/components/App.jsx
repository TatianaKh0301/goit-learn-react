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
import shortid from "shortid";
import { TodoList } from "./TodoList";
import { TodoEditor } from "./TodoEditor";
import { TodoFilter } from "./TodoFilter";


// import { Form } from "./Form";

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
    filter: '',
    // name: '',
    // surname: '',
  };

  addTodo = text => {
    console.log(text);

    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({todos}) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }))
  }

  toggleCompleted = todoId => {
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed
    //       }
    //     }
    //     return todo;
    //   }),
    // }));

    this.setState(({todos}) => ({
      todos: todos.map(todo => 
        todo.id === todoId ? {
            ...todo, completed: !todo.completed, } : todo,
      ),
    }));
  };    

  changeFilter = event => {
    this.setState({filter: event.currentTarget.value});
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLocaleLowerCase().includes(normalizedFilter),  
    );
    
  };

  // formSubmitHandler = data => {
  //   console.log(data);
  // }

  render() {
    const { filter } = this.state;
    const visibleTodos = this.getVisibleTodos();
    // const completedTodo = todos.reduce(
    //   (acc, todo) => (todo.completed ? acc + 1 : acc),
    //   0,
    // );

    
    return(
      <>
        {/* <div>
          <p>Общее количество: {todos.length} </p>
          <p>Количество выполненных: {completedTodo} </p>
        </div> */}
        <TodoEditor onSubmit={this.addTodo}/>
        <TodoFilter value={filter} onChange={this.changeFilter}/>
        <TodoList todos={visibleTodos} onDeleteTodo={this.deleteTodo} onToggleCompleted={this.toggleCompleted}/> 
        {/* <Form onSubmit={this.formSubmitHandler}/> */}
      </>      
    );
  }
}
