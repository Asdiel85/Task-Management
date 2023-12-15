import { AuthProvider } from "./context/AuthContext"


export const App =() => {

  return (
    <AuthProvider>
    <h1>Hello From App</h1>
    </AuthProvider>
  )
}


