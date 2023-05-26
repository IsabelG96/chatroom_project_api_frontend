import ChatHistory from "./childcomponents/ChatHistory";
import SendMessage from "./childcomponents/SendMessage";

const Chatroom = () => {
    return ( 
        <>
            <div className="chatroom_title">
                <h2>Chatroom Name</h2>
            </div>
            <div className="chatroom_container">
                <ChatHistory/>
            </div>
            <div className="send_message">
                <SendMessage/>
            </div>
        </>
        
     );
}
 
export default Chatroom;