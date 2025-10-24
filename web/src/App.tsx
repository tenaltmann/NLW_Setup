import { Habit } from "./components/Habit";

function App() {
  return(
    <div>
      <Habit completed={3}/>  
      <Habit completed={3}/>  
      <Habit completed={3}/>  
      <Habit completed={3}/>  
    </div>
    
  )
}

export default App

// Componente: Reaproveitar / Isolar
//Propriedade: Uma informação enviada pra modificar um copmponente visual ou comportamentalmente