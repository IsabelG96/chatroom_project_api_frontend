import ChatHistory from "./childcomponents/ChatHistory";
import SendMessage from "./childcomponents/SendMessage";

const Chatroom = ({chatroom, messageHistory, message, postMessage, user, chatroomUserList}) => {
   
    const userList = chatroom.users;
    const list = chatroomUserList.map((chatroomUser, index) => <p key={index}>{chatroomUser.name}</p>);
    // const list = chatroom ? userList.map((chatroomUser, index) => <p key={index}>{chatroomUser.name}</p>) : null;
    
    return ( 
        <>
            <div className="chatroom_title">
                <h2>{chatroom.name}</h2>
                <div className="display_of_users">{list}</div>
                {/* {chatroom ? userList.map((chatroomUser, index) => <p key={index}>{chatroomUser.name}</p>) : null} */}
            </div>
            <div className="chatroom_container">
                <ChatHistory messageHistory={messageHistory}/>
            </div>
            <div className="send_message">
                <SendMessage chatroom={chatroom} message={message} postMessage={postMessage} user={user}/>
            </div>
        </>
        
     );
}
 
export default Chatroom;