const ChatroomListItem = ({chatroom, chatroomObject, fetchMessageHistoryForChatroom, user, addLoggedInUserToChatroom}) => {

    const handleClick = (e) => {
        fetchMessageHistoryForChatroom(chatroomObject.id);
        // addLoggedInUserToChatroom(user.id, chatroomObject.id)
        
    }


    // check if the chatroomObject.users contains the user - using some function / includes
        //    if(chatroomObject.users.some((userObject) => userObject.id === user.id)){
        //     return ""
        //    }

        // chatroomObject.users.some((userObject) => userObject.id === user.id)) ? ""

    return ( 
        <div>
            <button
                onClick={handleClick}
                className={chatroom == null ? "unselected-chatroom" : chatroom.id == chatroomObject.id ? "selected-chatroom" : chatroomObject.users.some((userObject) => userObject.id === user.id) ? "room-raided" : "unselected-chatroom"}><h3>{chatroomObject.name}</h3></button>
            {chatroomObject.users.some((userObject) => userObject.id === user.id) ? <p>room raided</p> : null}
        </div>
     );
}
 
export default ChatroomListItem;