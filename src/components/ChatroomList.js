import { useEffect } from "react";
import ChatroomListItem from "./childcomponents/ChatroomListItem";

const ChatroomList = ({chatroomList, fetchMessageHistoryForChatroom, user, addLoggedInUserToChatroom, postNewChatroom}) => {
    
    const list = chatroomList.map((chatroom) => <ChatroomListItem key={chatroom.id} 
    chatroom={chatroom} 
    addLoggedInUserToChatroom={addLoggedInUserToChatroom}
    fetchMessageHistoryForChatroom={fetchMessageHistoryForChatroom} 
    user={user}/>)


    const handleAddingNewChatroom = () => {
        postNewChatroom();
        console.log("button clicked");
    }

    return ( 
        <>
            <h2>Chatrooms</h2>
            <button onClick={handleAddingNewChatroom}>+</button>
            {list}
        </>
     );
}
 
export default ChatroomList;