import ChatroomListItem from "./childcomponents/ChatroomListItem";

const ChatroomList = ({ chatroom, chatroomList}) => {
    
    const list = chatroomList.map((chatroom) => <ChatroomListItem 
    chatroom={chatroom}/>)

    return ( 
        <div>
            <h2>ChatroomList</h2>
            {list}
        </div>
     );
}
 
export default ChatroomList;