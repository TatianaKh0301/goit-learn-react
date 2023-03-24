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
// import items from "date.json";
import { TodoList } from "./TodoList";
import { TodoEditor } from "./TodoEditor";
import { TodoFilter } from "./TodoFilter";
import { IconButton } from "./IconButton";
import {ReactComponent as Icon} from "images/Vector.svg";
// import { Modal } from "./Modal";
// import { Clock } from "./Clock";
// import { Tabs } from "./Tabs";


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
    showModal: false,
    // name: '',
    // surname: '',
  };

  toggleModal = () => {
    this.setState( ({ showModal }) => ({showModal: !showModal}))
  }

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

  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);
    if (parsedTodos) {
      this.setState({todos: parsedTodos});
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }    
  }

  // formSubmitHandler = data => {
  //   console.log(data);
  // }

  render() {
    const { filter } = this.state;
    // const {showModal} = this.state;
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
        {/* <Tabs items={items}/> */}
        {/* <Clock /> */}
        {/* <button type="button" onClick={this.toggleModal}>Open modal</button> */}
        {/* {showModal && 
        <Modal onClose={this.toggleModal}>
          <h1>Hello this is content modal window as children</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis praesentium repellendus accusamus beatae earum dolore, iure ut. Earum dignissimos eum veritatis non ea, reiciendis debitis minus voluptatem, ipsum porro perferendis?
          </p>
          <button type="button" onClick={this.toggleModal}>Close</button>
        </Modal>  
        } */}
        <IconButton>
          <Icon width="40" height="40" />
        </IconButton>
        <TodoEditor onSubmit={this.addTodo}/>
        <TodoFilter value={filter} onChange={this.changeFilter}/>
        <TodoList todos={visibleTodos} onDeleteTodo={this.deleteTodo} onToggleCompleted={this.toggleCompleted}/>
        
        {/* <Form onSubmit={this.formSubmitHandler}/> */}
      </>      
    );
  }
}
