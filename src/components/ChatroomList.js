import ChatroomListItem from "./childcomponents/ChatroomListItem";

const ChatroomList = ({ chatroom, chatroomList}) => {
    
    const list = chatroomList.map((chatroom) => <ChatroomListItem key={chatroom.id} chatroom={chatroom}/>)

    return ( 
        <>
            <h2>ChatroomList</h2>
            {list}
        </>
     );
}
 
export default ChatroomList;