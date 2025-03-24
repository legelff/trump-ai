import { useRef, useState, useEffect } from 'react';
import './App.css'
import trumpMain from './assets/img/trumpmain.jpg';
import axios from 'axios';

import TrumpMsg from './components/TrumpMsg/TrumpMsg';
import UserMsg from './components/UserMsg/UserMsg';


interface Message {
  role: string,
  message: string | undefined;
}

function App() {
  const refVal = useRef<HTMLTextAreaElement>(null);
  const [msgs, setMsgs] = useState<Message[]>([]);

  const handleClick = () => {
    sendMessage();
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      if (!e.shiftKey) {
        e.preventDefault(); 

        // only enter is pressed -> send message through api
        sendMessage();
      }
    }
  };

  // useEffect(() => {
  //   console.log(msgs);
  // }, [msgs]);

  const client = axios.create({
    baseURL: "http://localhost:3000"
  })

  const sendMessage = async () => {
    // console.log(refVal.current?.value)
    if (refVal.current && refVal.current.value !== "") {
      const msg = refVal.current?.value;

      const newUserMessage = { role: 'user', message: msg };
      setMsgs((prevMsgs) => [...prevMsgs, newUserMessage]);

      // communicate with api
      const response = await client.post('/chat', {
        message: msg,
      });

      const newTrumpMessage = { role: 'assistant', message: response.data.response };
      setMsgs((prevMsgs) => [...prevMsgs, newTrumpMessage]);

      refVal.current.value = '';
    }
  }

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
            {msgs.map((item, index) => {
              return (
                <div key={index}>
                  {item.role === "user" ? (
                    <UserMsg message={item.message}/>
                  ) : (
                    <TrumpMsg message={item.message}/>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className='input-container'>
          <textarea name="inputField" 
                    id="inputField" 
                    ref={refVal} 
                    placeholder="I'm intelligent. Some people would say I'm very, very, very intelligent."
                    onKeyDown={handleKeyDown}></textarea>
          <button className='submit' onClick={handleClick}>
            <i className='bx bx-up-arrow-alt'></i>
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App