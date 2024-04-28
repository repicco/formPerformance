import { useRef } from 'react'
import { Header } from '../Header'

export function FormUseref() {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const usernameRef = useRef(null)
    const descriptionRef = useRef(null)
    const typeRef = useRef('user')
  
    function handleSave(e){
      e.preventDefault();
  
      console.log({
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        username: usernameRef.current?.value,
        description: descriptionRef.current?.value,
        type: typeRef.current?.value,
      })
    }

  return (
    <>
    <Header component='FormUseRef'/>

    <form className="form" onSubmit={handleSave}>
      <input
        type="text"
        placeholder="Digite seu nome..."
        className="input"
        ref={nameRef}
      />

      <input
        type="text"
        ref={emailRef}
        placeholder="Digite seu email..."
        className="input"
      />

      <input
        type="text"
        ref={usernameRef}
        placeholder="Digite seu username..."
        className="input"
      />

      <textarea
        type="text"
        ref={descriptionRef}
        placeholder="Digite sua descriçao..."
        className="input"
      ></textarea>

      <select
        className="select"
        ref={typeRef}
      >
        <option value="user">user</option>
        <option value="admin">admin</option>
      </select>

      <button className="button" type="submit">
        Enviar
      </button>
    </form>
    </>

    
  );
}
