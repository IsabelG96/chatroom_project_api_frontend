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

    const [message, setMessage] = useState({});
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

    useEffect(() => {
        fetchChatroomList();
        fetchUserList();
        // console.log(userList);
        // console.log(chatroomList);
    }, [])

    return ( 
        <div>
            <User/>
            <ChatroomList chatroom={chatroom} chatroomList={chatroomList}/>
            <Chatroom/>
        </div>

     );
}
 
export default Container;


