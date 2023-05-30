import { useEffect } from "react";
import ChatroomListItem from "./childcomponents/ChatroomListItem";

const ChatroomList = ({chatroomList, fetchMessageHistoryForChatroom, addLoggedInUserToChatroom, user}) => {
    
    const list = chatroomList.map((chatroom) => <ChatroomListItem key={chatroom.id} chatroom={chatroom} fetchMessageHistoryForChatroom={fetchMessageHistoryForChatroom} addLoggedInUserToChatroom={addLoggedInUserToChatroom} user={user}/>)

    return ( 
        <>
            <h2>ChatroomList</h2>
            {list}
        </>
     );
}
 
export default ChatroomList;