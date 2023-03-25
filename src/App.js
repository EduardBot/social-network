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
            <Route path='/' element={<Profile
            profilePage={props.appstate.profilePage}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText} />} />
            <Route path='/dialogs/*' element={<Dialogs
            state={props.appstate.messagesPage} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
