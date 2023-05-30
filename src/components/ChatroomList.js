import ChatroomListItem from "./childcomponents/ChatroomListItem";

const ChatroomList = ({chatroomList, fetchMessageHistoryForChatroom}) => {
    
    const list = chatroomList.map((chatroom) => <ChatroomListItem key={chatroom.id} chatroom={chatroom} fetchMessageHistoryForChatroom={fetchMessageHistoryForChatroom}/>)

    return ( 
        <>
            <h2>ChatroomList</h2>
            {list}
        </>
     );
}
 
export default ChatroomList;