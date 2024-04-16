import React from 'react'
import {BrowserRouter as Router ,Routes,Route,Link } from 'react-router-dom'
import User from './Components/User/User'
import Customer from './Components/Customer/Customer'

const App = () => {
  return (
    <Router>

        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/user">USER</Link>
                    </li>
                    <li>
                        <Link to="/customer" > Customer</Link>
                    </li>
                        
                    
                </ul>
            </nav>
        </div>
        <Routes>
            <Route path='/user' element={<User/>} />
            <Route path='/Customer' element={<Customer/>} />

        </Routes>

    </Router>
    
    
  )
}

export default App