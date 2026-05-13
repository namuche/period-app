import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import CalendarView from './CalendarView' // El componente que crearemos

function App() {
  const [session, setSession] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session))
    supabase.auth.onAuthStateChange((_event, session) => setSession(session))
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) alert(error.message)
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) alert("Revisa tu correo para confirmar registro")
  }

  if (!session) {
    return (
      <div className="login-container">
        <h1>Mi Control de Salud</h1>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
          <button type="submit">Entrar</button>
          <button onClick={handleSignUp}>Registrarse</button>
        </form>
      </div>
    )
  }

  return <CalendarView session="{session}"/>
  export default App;
}