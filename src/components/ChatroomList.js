import ChatroomListItem from "./childcomponents/ChatroomListItem";

const ChatroomList = ({chatroomList, fetchMessageHistoryForChatroom, addLoggedInUserToChatroom}) => {
    
    const list = chatroomList.map((chatroom) => <ChatroomListItem key={chatroom.id} chatroom={chatroom} fetchMessageHistoryForChatroom={fetchMessageHistoryForChatroom} addLoggedInUserToChatroom={addLoggedInUserToChatroom}/>)

    return ( 
        <>
            <h2>ChatroomList</h2>
            {list}
        </>
     );
}
 
export default ChatroomList;