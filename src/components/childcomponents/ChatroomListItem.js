const ChatroomListItem = ({chatroom, fetchMessageHistoryForChatroom}) => {

    const handleClick = (e) => {
        fetchMessageHistoryForChatroom(chatroom.id);
    }

    return ( 
        <div>
            <button onClick={handleClick}><h3>{chatroom.name}</h3></button>

        </div>
     );
}
 
export default ChatroomListItem;