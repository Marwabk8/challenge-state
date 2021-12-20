
import './App.css';
import React from 'react';



class App extends React.Component{
  
state={ todos: [{id:0,task:'eat', done:false},{id:1,task:'sleep', done:false},{id:1,task:'repeat', done:false}] ,text:""}

ajouter=()=>{this.setState({  todos: [...this.state.todos, {id: Math.random(), done: false , task : this.state.text} ] })}
supprimer =(id)=>{this.setState({todos: this.state.todos.filter(el=> id!== el.id)})}
afficher = (id) =>{ this.setState({todos: this.state.todos.map ( el=>el===id ? {...el, done:! el.id} : el)})}
render() {
console.log (this.state.todos)
   return(
<div>
 <input onChange={(event)=>this.setState({text: event.target.value})}/>
<buton onClick={()=> this.ajouter() }>Ajouter</buton>
{this.state.todos.map (el =>
<div>
   <li> {el.task} </li>
<buton  onClick={()=>this.supprimer(el.id)}> Supprimer</buton>
<buton on onClick={()=>this.afficher(el.id)}>afficher</buton> 
</div>
)}
</div>
   )

}
}

export default App
