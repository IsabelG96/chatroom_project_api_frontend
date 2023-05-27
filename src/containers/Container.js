import { useState, useEffect } from "react";
import Chatroom from "../chatroom_display/Chatroom";
import ChatroomList from "../sidebar/ChatroomList";
import User from "../sidebar/User";
const SERVER_URL = 'http://localhost:8080';


const Container = () => {

    const [currentChatroom, setCurrentChatroom] = useState({});
    const [chatroomList, setChatroomList] = useState([]);

    // const [user, setUser] = useState({});  // commented-out after group work
    const [userList, setUserList] = useState([]);

    const [loggedInUser, setLoggedInUser] = useState({}); // added after group work

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

    const fetchMessageHistoryForChatRoom = async(chatroomID) => {
        const response = await fetch(`${SERVER_URL}/messages/${chatroomID}`);
        const jsonData = await response.json();
        jsonData.sort((a,b) => (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0))
        setMessageHistory(jsonData);
        const current = chatroomList.find(chatroom => chatroom.id == chatroomID);
        setCurrentChatroom(current);
    }

    const postMessage = async (newMessage) => {
        // send to db
        const response = await fetch(`${SERVER_URL}/messages`, {
            method: "POST",
            headers: {"Content-type" : "application/json"},
            body : JSON.stringify(newMessage)
        });
        // send to client-side
        const savedMessage = await response.json();
        // console.log(savedMessage);
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
        // fetchMessageHistory();

        // console.log(userList);
        // console.log(chatroomList);
    },[])



    
    return ( 
        <div className="mainContainer">
            <div className="user_and_logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Chat_icon_new_message.svg/1200px-Chat_icon_new_message.svg.png" style={{width:"100px"}}/>
                <User/>
            </div>
            <Chatroom currentChatroom={currentChatroom} messageHistory={messageHistory} message={message} postMessage={postMessage}/>
            <div className="chatroomList_container">
            <ChatroomList currentChatroom={currentChatroom} chatroomList={chatroomList} fetchMessageHistoryForChatRoom={fetchMessageHistoryForChatRoom}/>
            </div>
        </div>

     );
}
 
export default Container;


