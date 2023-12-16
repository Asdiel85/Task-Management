import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { AuthProvider } from "./context/AuthContext"
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { Navigation } from './components/Navigation/Navigation';


export const App =() => {

  return (
    <AuthProvider>
      <Navigation />
      <main className={styles.container}>
    <Routes>
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    </Routes>
    </main>
    </AuthProvider>
  )
}


