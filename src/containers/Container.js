import { useState, useEffect } from "react";
import Chatroom from "../components/Chatroom";
import ChatroomList from "../components/ChatroomList";
import User from "../components/User";
const SERVER_URL = 'http://localhost:8080';


const Container = () => {

    const [chatroom, setChatroom] = useState({});
    const [chatroomList, setChatroomList] = useState([]);

    const [user, setUser] = useState({});
    const [userList, setUserList] = useState([]);

    const [message, setMessage] = useState("");
    const [messageHistory, setMessageHistory] = useState([]);

    const fetchChatroomList = async() => {
        const response = await fetch(`${SERVER_URL}/chatrooms`);
        const jsonData = await response.json();
        setChatroomList(jsonData);
    };
    const fetchUserList = async() => {
        const response = await fetch(`${SERVER_URL}/users`);
        const jsonData = await response.json();
        setUserList(jsonData);
    };

    const fetchMessageHistory = async() => {
        const response = await fetch(`${SERVER_URL}/messages/1`);
        const jsonData = await response.json();
        setMessageHistory(jsonData);
    }



    const postMessage = async (newMessage) => {
        // send to db
        const response = await fetch(`${SERVER_URL}/messages`, {
            method: "POST",
            headers: {"Content-type" : "application/json"},
            body : JSON.stringify(newMessage)
        })
        // send to client-side
        const savedMessage = await response.json();
        setMessageHistory([...messageHistory, savedMessage]);
        
    };

    // const getChatroomById = async(chatroomID) => {
    //     // send to db
    //     const response = await fetch(`${SERVER_URL}/chatrooms/${chatroomID}`);
    //     const jsonData = await response.json();
    //     setChatroom(jsonData);
    //     // send to cli
    // }
    

   

    useEffect(() => {
        fetchChatroomList();
        fetchUserList();
        fetchMessageHistory();

        // console.log(userList);
        // console.log(chatroomList);
    },[])



    
    return ( 
        <div className="mainContainer">
            <div className="user_and_logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Chat_icon_new_message.svg/1200px-Chat_icon_new_message.svg.png" style={{width:"100px"}}/>
                <User/>
            </div>
            <Chatroom chatroom={chatroom} messageHistory={messageHistory} message={message} postMessage={postMessage}/>
            <div className="chatroomList_container">
            <ChatroomList chatroom={chatroom} chatroomList={chatroomList}/>
            </div>
        </div>

     );
}
 
export default Container;


