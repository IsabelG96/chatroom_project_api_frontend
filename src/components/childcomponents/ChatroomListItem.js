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
        <div className="room-button-div">
            <button
                title={!chatroomObject.users ? null :  
                    chatroomObject.users.some((userObject) => userObject.id === user.id) ? "Already raided" 
                     : "Raid! >:)"}
                onClick={handleClick}
                className={!chatroomObject.users ? null :  
                    chatroomObject.users.some((userObject) => userObject.id === user.id) ? "room-raided" 
                     : null}
                id={chatroom == null || chatroomObject == null ? null : chatroom.id == chatroomObject.id ? "selected-chatroom-id" : null}>
                <h3>{chatroomObject.name}</h3>
                {/* {chatroomObject.users.some((userObject) => userObject.id === user.id) ? <p>room raided</p> : null} */}
            </button>
            
        </div>
     );
}
 
export default ChatroomListItem;