import './App.css';
import { AuthContextProvider } from './context/AuthContext.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SignIn from './pages/signIn.js'
import SignUp from './pages/signUp.js'
import Home from './pages/home.js'
import Membership from './pages/membership.js'
import ProgramsLessons from './pages/programsLessons.js'

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<SignIn/>}/>
            <Route
              path="/sign-in"
              element={<SignIn/>}
            />

            <Route
              path="/sign-up"
              element={<SignUp/>}
            />

            <Route
              path="/home"
              element={<Home/>}
            />

            <Route
              path="/memberships"
              element={<Membership/>}
            />

            <Route
              path="/programs/lessons"
              element={<ProgramsLessons/>}
            />

          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
