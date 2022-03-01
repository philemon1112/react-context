
import './App.css';
// import MyCounter from './components/MyCounter';
// import CounterContextProvider from './Cointexts/CounterContext';
// import CompA from './components/CompA';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import { GlobalProvider } from './context/GlobalState';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  
  return (
    // <CounterContextProvider>
    // <div className="App">
    //   <MyCounter />
    //   <CompA />
    // </div>
    // </CounterContextProvider>
    <div style={{maxWidth: "30rem", margin:"4rem auto"}}>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/add' element={<AddUser />} />
            <Route path='/edit/:id' element={<EditUser />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;
