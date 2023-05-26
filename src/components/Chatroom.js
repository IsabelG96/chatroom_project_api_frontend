import ChatHistory from "./childcomponents/ChatHistory";
import SendMessage from "./childcomponents/SendMessage";

const Chatroom = ({messageHistory, message}) => {
    return ( 
        <>
            <div className="chatroom_title">
                <h2>Chatroom Name</h2>
            </div>
            <div className="chatroom_container">
                <ChatHistory messageHistory={messageHistory}/>
            </div>
            <div className="send_message">
                <SendMessage message={message}/>
            </div>
        </>
        
     );
}
 
export default Chatroom;