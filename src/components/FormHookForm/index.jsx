import { Header } from '../Header'
import {useForm} from 'react-hook-form'

export function FormHookForm() {
    const {register, handleSubmit} = useForm()

  
    function handleSave(data){
      console.log(data)
      
    }

  return (
    <>
    <Header component='FormHookForm'/>

    <form className="form" onSubmit={handleSubmit(handleSave)}>
      <input
        type="text"
        placeholder="Digite seu nome..."
        className="input"
        {...register('name', {required: true})}
        id='name'
        onChange={(e) => console.log(e.target.value)}
      />

      <input
        type="text"
        placeholder="Digite seu email..."
        className="input"
        {...register('email',{required: true, })}
        id='email'
      />

      <input
        type="text"
        placeholder="Digite seu username..."
        className="input"
        {...register("username", {required: true})}
        id='username'
      />


      <button className="button" type="submit">
        Enviar
      </button>
    </form>
    </>

    
  );
}
