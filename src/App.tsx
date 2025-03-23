import './App.css'
import trumpMain from './assets/img/trumpmain.jpg';

import TrumpMsg from './components/TrumpMsg/TrumpMsg';
import UserMsg from './components/UserMsg/UserMsg';

function App() {
  return (
    <>
    <div className='container'>
      <div className='img-container'>
        <img src={trumpMain} alt="trumpMain"/>
      </div>

      <div className='chat-input-container'>
        <div className='chat-container'>
          <h1 className='header'>
            Trump AI
          </h1>

          <div className='txt'>
            <TrumpMsg/>

            <UserMsg/>
          </div>
        </div>

        <div className='input-container'>
          <textarea name="inputField" id="inputField"></textarea>
          <button className='submit'>
            <i className='bx bx-up-arrow-alt'></i>
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App