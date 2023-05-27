import ChatroomListItem from "./ChatroomListItem";

const ChatroomList = ({chatroomList, fetchMessageHistoryForChatRoom}) => {
    
    const list = chatroomList.map((chatroom) => <ChatroomListItem key={chatroom.id} chatroom={chatroom} fetchMessageHistoryForChatRoom={fetchMessageHistoryForChatRoom}/>)

    // console.log(list);
    return ( 
        <>
            <h2>ChatroomList</h2>
            {list}
        </>
     );
}
 
export default ChatroomList;