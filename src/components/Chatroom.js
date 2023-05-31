import ChatHistory from "./childcomponents/ChatHistory";
import SendMessage from "./childcomponents/SendMessage";
import { useState } from "react";

const Chatroom = ({chatroom, messageHistory, message, postMessage, user, chatroomUserList, postNewChatroomName}) => {

    const [currentlyEditing, setCurrentlyEditing] = useState(false);
   
    const userList = chatroom.users;
    const list = chatroomUserList.map((chatroomUser, index) => <p key={index}>{chatroomUser.name}</p>);
    // const list = chatroom ? userList.map((chatroomUser, index) => <p key={index}>{chatroomUser.name}</p>) : null;
    
    const changeCurrentlyEditingBoolean = () => {
        // change currentlyEditing variable --> true
        setCurrentlyEditing(true);
    }

    const handleEditChatroomName = () => {
        // change currentlyEditing variable --> false
        setCurrentlyEditing(false);

        // change the chatroom name
        postNewChatroomName(chatroom.name, chatroom.id);
    }

    return ( 
        <>
            <div className="chatroom_title">
                {currentlyEditing ? <form><input placeholder="new chatroom name"/> <button onClick={handleEditChatroomName}>Submit</button></form> : <h2>{chatroom.name}</h2>}
                <button onClick={changeCurrentlyEditingBoolean}>Edit</button> 
                <div className="display_of_users">{list}</div>
                {/* {chatroom ? userList.map((chatroomUser, index) => <p key={index}>{chatroomUser.name}</p>) : null} */}
            </div>
            <div className="chatroom_container">
                <ChatHistory messageHistory={messageHistory}/>
            </div>
            <div className="send_message">
                <SendMessage chatroom={chatroom} message={message} postMessage={postMessage} user={user}/>
            </div>
        </>
        
     );
}
 
export default Chatroom;