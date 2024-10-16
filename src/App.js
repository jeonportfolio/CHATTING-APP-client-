import { useEffect, useState } from "react";
import "./App.css";
import socket from "./server";
import InputField from "./components/InputField/InputField";
import MessageContainer from "./components/MessageContainer/MessageContainer";



function App() {
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState('');
    const [messageList, setMessageList] = useState([]);

   
    useEffect(() => {  
      socket.on('message',(message) => {
          setMessageList((prevState) => prevState.concat(message));
      });
      askUserName();
    },[]);

    console.log("message List", messageList);
   
    useEffect (() => {
        socket.on('message', (message)=> {
          console.log("res",message)
        })
    },[]);

    

  const askUserName = () => {
       const userName =prompt("회원번호를 입력하세요");
       console.log("uuu", userName);   
       socket.emit("login", userName, (res) => {
          if(res?.ok){
             setUser(res.data);
          }
       });
   }

  const sendMessage = (event) => {
      event.preventDefault() //onSubmit은 계속 refresh되기 때문에 preventDefault로 막아준다.
      socket.emit("sendMessage", message, (res) => {
        console.log("sendMessage res",res);
      }); 
  };

  return (
      <div>
          <div  className="App">
                <MessageContainer messageList={messageList} user={user}/>
                <InputField 
                    message={message} 
                    setMessage={setMessage} 
                    sendMessage={sendMessage}
                />
          </div>
      </div>
  );
}

export default App;
