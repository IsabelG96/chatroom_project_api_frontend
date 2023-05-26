import ChatHistory from "./childcomponents/ChatHistory";
import SendMessage from "./childcomponents/SendMessage";

const Chatroom = () => {
    return ( 
        <div>
            Chatroom
            <ChatHistory/>
            <SendMessage/>
        </div>
        
     );
}
 
export default Chatroom;