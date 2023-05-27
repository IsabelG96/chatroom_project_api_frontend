const ChatroomListItem = ({chatroom, fetchMessageHistoryForChatRoom}) => {

    const handleClick = (e) => {
        e.preventDefault();
        fetchMessageHistoryForChatRoom(chatroom.id);
    }

    return ( 
        <div className="list-item">
            <button id={chatroom.id} onClick={handleClick}><h3>{chatroom.name}</h3></button>
        </div>
     );
}
 
export default ChatroomListItem;