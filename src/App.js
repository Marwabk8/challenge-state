
import './App.css';
import React from 'react';



class App extends React.Component{
  
state={ todos: [{id:0,task:'manger', done:false},{id:1,task:'dormir', done:false},{id:2,task:'révision', done:false}] ,text:""}

ajouter=()=>{this.setState({  todos: [...this.state.todos, {id: Math.random(), task : this.state.text, done: false} ] })}
supprimer =(id)=>{this.setState({todos: this.state.todos.filter(el=> id!== el.id)})}
afficher = (id) =>{ this.setState({todos: this.state.todos.map ( el=>el.id==id ? {...el, done:! el.done} : el)})}
render() {
console.log (this.state.todos)
   return(
<div>
<h1>My todo list</h1>
 <input onChange={(event)=>this.setState({text: event.target.value})}/>
<buton onClick={()=> this.ajouter() }>Ajouter</buton>
{this.state.todos.map (el => <div> <li style={{textDecoration:el.done?"line-through":null}}> {el.task} </li>

<buton className='aff' onClick={()=>this.afficher(el.id)}>afficher</buton> 
<buton className='sup' onClick={()=>this.supprimer(el.id)}> Supprimer</buton>
</div>
)}
</div>
   )

}
}

export default App
