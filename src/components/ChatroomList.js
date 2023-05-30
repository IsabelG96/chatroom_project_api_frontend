import { useEffect } from "react";
import ChatroomListItem from "./childcomponents/ChatroomListItem";

const ChatroomList = ({chatroomList, fetchMessageHistoryForChatroom, user, addLoggedInUserToChatroom}) => {
    
    const list = chatroomList.map((chatroom) => <ChatroomListItem key={chatroom.id} 
    chatroom={chatroom} 
    addLoggedInUserToChatroom={addLoggedInUserToChatroom}
    fetchMessageHistoryForChatroom={fetchMessageHistoryForChatroom} 
    user={user}/>)

    return ( 
        <>
            <h2>ChatroomList</h2>
            {list}
        </>
     );
}
 
export default ChatroomList;