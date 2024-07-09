import { useEffect, useState } from "react";
import "./App.css";
import socket from "./server";
import InputField from "./components/InputField/InputField";
import MessageContainer from "./components/MessageContainer/MessageContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
//    const [user, setUser] = useState(null);
//    const [message, setMessage] = useState('');
//    const [messageList, setMessageList] = useState([]);
//    const [rooms, setRooms] = useState([]);
//
//    console.log("message List", messageList);
//      useEffect(() => {
//
//          socket.on("rooms", (res) => {
//              setRooms(res);
//          });
//
//
//          socket.on('message',(message) => {
//              setMessageList((prevState) => prevState.concat(message));
//          });
//          askUserName();
//      },[]);
//  const askUserName = () => {
//      const userName = prompt("당신의 이름을 입력하세요");
//      console.log("uuu", userName);
//
//      socket.emit("login", userName, (res) => {
//         if(res?.ok){
//            setUser(res.data);
//         }
//      });
//  }
//
//  const sendMessage = (event) => {
//      event.preventDefault()
//      socket.emit("sendMessage", message, (res) => {
//        console.log("sendMessage res",res);
//      }); 
//  };

  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={ <RoomListPage rooms = {rooms} />} />
            <Route exact path="/room/:id" element={ <ChatPage user = {user} />} />

            <Route/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
