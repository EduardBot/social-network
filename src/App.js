import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Pages/Dialogs/Dialogs';
import './styles/main.css';

function App(props) {
  return (
    <Router>
      <div className="App grid">
        <Header />
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Profile state={props.Appstate.profilePage} addPost={props.addPost} />} />
            <Route path='/dialogs/*' element={<Dialogs state={props.Appstate.messagesPage} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
