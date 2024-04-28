import './App.css'
import { Header, FormMemoComponents } from './components';


function App() {
  return (
    <div className="container">
      <h1>React</h1>
      <Header component='App'/>

      {/* Form com renderização comum do React - Inicio
      <FormClassic/>
      Form com renderização comum do React - Fim */}

      {/* 
      Form com renderizacao e referencia - Inicio
      <FormUseref/>
      Form com renderizacao e referencia - Fim
      */}

      {/* Form com lib hook form - Inicio
      <FormHookForm/>
      Form com lib hook form - Fim */}



      {/* 
      Form com lib zod para validação utilizando schemas - Inicio
      <FormHookFormPlusZod/>
      Form com lib zod para validação utilizando schemas - Inicio
      */}

      <FormMemoComponents/>
    </div>
  )
}

export default App
