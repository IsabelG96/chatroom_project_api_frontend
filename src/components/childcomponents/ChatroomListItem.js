const ChatroomListItem = ({chatroom, fetchMessageHistoryForChatroom, addLoggedInUserToChatroom}) => {

    const handleClick = (e) => {
        fetchMessageHistoryForChatroom(chatroom.id);
        addLoggedInUserToChatroom(1, chatroom.id);
    }

    return ( 
        <div>
            <button onClick={handleClick}><h3>{chatroom.name}</h3></button>

        </div>
     );
}
 
export default ChatroomListItem;