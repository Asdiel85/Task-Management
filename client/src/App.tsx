import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { AuthProvider } from "./context/AuthContext"
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { Navigation } from './components/Navigation/Navigation';
import { Home } from './components/Home/Home';
import { TasksTable } from './components/TasksTable/TasksTable';


export const App =() => {

  return (
    <AuthProvider>
      <Navigation />
      <main className={styles.container}>
    <Routes>
    <Route path="/" element={<Home />} /> 
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path ='/tasks' element = {<TasksTable/>} />
    </Routes>
    </main>
    </AuthProvider>
  )
}


