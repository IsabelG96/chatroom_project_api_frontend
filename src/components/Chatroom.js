import ChatHistory from "./childcomponents/ChatHistory";
import SendMessage from "./childcomponents/SendMessage";

const Chatroom = ({chatroom, messageHistory, message, postMessage}) => {
    return ( 
        <>
            <div className="chatroom_title">
                <h2>Chatroom Name</h2>
            </div>
            <div className="chatroom_container">
                <ChatHistory messageHistory={messageHistory}/>
            </div>
            <div className="send_message">
                <SendMessage chatroom={chatroom} message={message} postMessage={postMessage}/>
            </div>
        </>
        
     );
}
 
export default Chatroom;