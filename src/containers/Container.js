import { useState, useEffect } from "react";
import Chatroom from "../components/Chatroom";
import ChatroomList from "../components/ChatroomList";
import logo from "../images/roundededgeswhite.png";
const SERVER_URL = 'http://localhost:8080';


const Container = () => {

    const [chatroom, setChatroom] = useState(null);
    const [chatroomList, setChatroomList] = useState([]);

    const [user, setUser] = useState({});
    const [userList, setUserList] = useState([]);

    const [message, setMessage] = useState("");
    const [messageHistory, setMessageHistory] = useState([]);

    const [newChatroomID, setNewChatroomID] = useState(null);
    const [newChatroomName, setNewChatroomName] = useState("");

    const [notificationMessage, setNotificationMessage] = useState(false);

    const fetchChatroomList = async() => {
        const response = await fetch(`${SERVER_URL}/chatrooms`);
        const jsonData = await response.json();
        setChatroomList(jsonData);
    };
    const fetchUserList = async() => {
        const response = await fetch(`${SERVER_URL}/users`);
        const jsonData = await response.json();
        setUserList(jsonData);
        setUser(jsonData[0]);
    };

    // const fetchMessageHistory = async() => {
    //     const response = await fetch(`${SERVER_URL}/messages/1`);
    //     const jsonData = await response.json();
    //     setMessageHistory(jsonData);
    // }

    const fetchMessageHistoryForChatroom = async (chatroomId) => {
        const response = await fetch(`${SERVER_URL}/messages/${chatroomId}`);
        const jsonData = await response.json();
        setMessageHistory(jsonData);
        const response2 = await fetch(`${SERVER_URL}/chatrooms/${chatroomId}`);
        const jsonData2 = await response2.json();
        setChatroom(jsonData2);
        // fetchChatroomUsers(chatroomId);
        
    }

    useEffect(()=>{
        if(chatroom){
            addLoggedInUserToChatroom(user.id, chatroom.id);
        }
    }, [chatroom])


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
        setNotificationMessage(false);        
    };

    const addLoggedInUserToChatroom = async (userId, chatroomId) => {
        if(chatroom){
            if(chatroom.users.some((user) => user.id === userId)){
                return
            }
        }
        const response = await fetch(`${SERVER_URL}/chatrooms/${chatroomId}/users/${userId}/add`, {
                method: "PATCH",
                headers: {"Content-type" : "application/json"},
        })
        //change on the client side
        const response2 = await fetch(`${SERVER_URL}/chatrooms/${chatroomId}`);
        const jsonData2 = await response2.json();
        setChatroom(jsonData2);
        const updatedChatroomList = chatroomList.map((chatroom)=>{
            if(chatroom.id === jsonData2.id){
                return jsonData2;
            }
            return chatroom;
        })
        setChatroomList(updatedChatroomList);
        const userResponse = await fetch(`${SERVER_URL}/users/${userId}`);
        const userDataUpdated = await userResponse.json();
        setUserList([...userList,userDataUpdated])
        // const raidedMessage = {message: "room raided successfully", time: null, chatroomId: chatroomId}
        // setmessageHistory([...messageHistory, raidedMessage])
        // const response3 = await fetch(`${SERVER_URL}/messages`, {
        //     method: "POST",
        //     headers: {"Content-type" : "application/json"},
        //     body : JSON.stringify({message: "room raided successfully >:)", time: null, userId: userId, chatroomId: chatroomId})
        // })
        // send to client-side
        // const savedMessage = await response3.json();
        // setMessageHistory([...messageHistory, savedMessage]);
        // setNotificationMessage(true);
        if (chatroom.users.length != 0) {
            alert(`Room raided successfully by ${user.name}`)};
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
    },[])



    const postNewChatroom = async () => {
        // send to db
        const response = await fetch(`${SERVER_URL}/chatrooms`, {
            method: "POST",
            headers: {"Content-type" : "application/json"},
            body : JSON.stringify({name: "New chatroom"})
        });
        // send to client-side
        const savedChatroom = await response.json();
        setChatroomList([...chatroomList, savedChatroom]);

        // find id of chatroom
        setNewChatroomID(chatroomList.length);


        // add user to this new chatroom
        // addLoggedInUserToChatroom(user.id, newChatroomID);
    }

    const postNewChatroomName = async (chatroomName, chatroomId) => {
        // send to db
        const response = await fetch (`${SERVER_URL}/chatrooms/${chatroomId}`, {
            method: "PUT",
            headers: {"Content-type" : "application/json"},
            body: JSON.stringify({name: chatroomName})
        })
        // setNewChatroomName(response);
        const data = await response.json();
        console.log(data);
        // update active chatroom
        setChatroom(data);
        // update the overall list of chatrooms
        const updatedChatroomList = chatroomList.map((chatroom)=>{
            if(chatroom.id === data.id){
                return data;
            }
            return chatroom;
        })
        setChatroomList(updatedChatroomList);
    }

    // useEffect(() => {
    //     const response = await fetch (`${SERVER_URL}/chatrooms/${chatroomId}/edit`, {
    //         method: "GET",
    //         headers: {"Content-type" : "application/json"},
    //         body: JSON.stringify({name: chatroomName})
    //     })

    // }, [postNewChatroomName])
    return ( 
        <div className="mainContainer">
            <div className="user_and_logo">
                <img src={logo} style={{height:"105%"}}/>
                {/* <User/> */}
            </div>
            {chatroom ? <Chatroom 
                chatroom={chatroom} 
                messageHistory={messageHistory} 
                message={message} 
                postMessage={postMessage} 
                user={user} 
                chatroomUserList={chatroom.users}
                postNewChatroomName={postNewChatroomName}
                notificationMessage={notificationMessage}
                /> 
                : <h3 className={"chatroom_container_before"} >Hello {user.name}. Pick a chatroom.</h3>}
                
            <div className="chatroomList_container">
            
            <ChatroomList 
                chatroom={chatroom} 
                chatroomList={chatroomList} 
                fetchMessageHistoryForChatroom={fetchMessageHistoryForChatroom}  
                addLoggedInUserToChatroom={addLoggedInUserToChatroom}
                user={user}
                postNewChatroom={postNewChatroom}/>
            </div>
        </div>

     );
}
 
export default Container;