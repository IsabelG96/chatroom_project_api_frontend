import ChatHistory from "./childcomponents/ChatHistory";
import SendMessage from "./childcomponents/SendMessage";

const Chatroom = ({chatroom, messageHistory, message, postMessage, user, chatroomUserList}) => {
    
    const list = chatroomUserList.map((chatroomUser, index) => <p key={index}>{chatroomUser.name}</p>);
    
    return ( 
        <>
            <div className="chatroom_title">
                <h2>Chatroom Name</h2>
                {list}
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