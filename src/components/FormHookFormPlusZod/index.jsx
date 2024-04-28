import { Header } from '../Header'
import {useForm} from 'react-hook-form'
import { z } from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

const schema = z.object({
    name: z.string().min(1, 'O campo nome é obrigatório'),
    email: z.string().email("Digite um email válido").min(1, 'O campo email é obrigatório'),
    username: z.string().min(3, "O username deve ter no minimo 3 caracteres").max(10, "O username deve ter no máximo 10 caracteres"),
    telefone: z.string().min(1, 'O campo telefone é obrigatório').refine((el) => /^\d{2} ?\d{9}$/.test(el), {
        message: 'Digite um telefone no formato DDD + 9 números'
    })
})

export function FormHookFormPlusZod() {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(schema)
    })

  
    function handleSave(data){
      console.log(data)
      
    }

  return (
    <>
    <Header component='FormHookFormPlusZod'/>

    <form className="form" onSubmit={handleSubmit(handleSave)}>
      <input
        type="text"
        placeholder="Digite seu nome..."
        className="input"
        {...register('name')}
        id='name'
      />
      {errors.name && <p className='error'>{errors.name.message}</p>}

      <input
        type="text"
        placeholder="Digite seu email..."
        className="input"
        {...register('email')}
        id='email'
      />
      {errors.email && <p className='error'>{errors.email.message}</p>}

      <input
        type="text"
        placeholder="Digite seu username..."
        className="input"
        {...register("username")}
        id='username'
      />
      {errors.username && <p className='error'>{errors.username.message}</p>}

      <input
        type="text"
        placeholder="Digite seu telefone..."
        className="input"
        {...register("telefone")}
        id='telefone'
      />
      {errors.telefone && <p className='error'>{errors.telefone.message}</p>}


      <button className="button" type="submit">
        Enviar
      </button>
    </form>
    </>

    
  );
}
