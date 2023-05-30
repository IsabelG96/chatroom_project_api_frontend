const ChatroomListItem = ({chatroom, fetchMessageHistoryForChatroom, addLoggedInUserToChatroom, user}) => {

    const handleClick = (e) => {
        fetchMessageHistoryForChatroom(chatroom.id);
        addLoggedInUserToChatroom(user.id, chatroom.id);
    }

    return ( 
        <div>
            <button onClick={handleClick}><h3>{chatroom.name}</h3></button>

        </div>
     );
}
 
export default ChatroomListItem;