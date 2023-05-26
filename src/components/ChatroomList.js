import ChatroomListItem from "./childcomponents/ChatroomListItem";

const ChatroomList = ({ chatroom, chatroomList}) => {
    
    const list = chatroomList.map((chatroom) => <ChatroomListItem 
    chatroom={chatroom}/>)

    return ( 
        <div>
            ChatroomList
            {list}
        </div>
     );
}
 
export default ChatroomList;