import ChatHistory from "./ChatHistory";
import SendMessage from "./SendMessage";

const Chatroom = ({currentChatroom, messageHistory, message, postMessage}) => {
    return ( 
        <>
            <div className="chatroom_title">
                <h2>Chatroom Name</h2>
            </div>
            <div className="chatroom_container">
                <ChatHistory currentChatroom={currentChatroom} messageHistory={messageHistory}/>
            </div>
            <div className="send_message">
                <SendMessage currentChatroom={currentChatroom} message={message} postMessage={postMessage}/>
            </div>
        </>
        
     );
}
 
export default Chatroom;