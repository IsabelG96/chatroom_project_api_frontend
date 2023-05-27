import { useState } from "react";
const SendMessage = ({message, currentChatroom, postMessage}) => {

    const [stateMessage, setStateMessage] = useState({
        message: "",
        userId: 1,
        chatroomId: currentChatroom.id,
    });

    const handleChange = (e) => {
        let message = e.target.name;
        let copiedMessageObject = {...stateMessage};
        copiedMessageObject[message] = e.target.value;
        // console.log(copiedMessageObject.chatroomId)
        copiedMessageObject.chatroomId = currentChatroom.id;
        setStateMessage(copiedMessageObject);
        console.log(copiedMessageObject)
    }

    const handleMessageSubmit = (e) => {
        e.preventDefault();
        postMessage(stateMessage);
        // console.log(stateMessage);
    }

    return ( 
        <form onSubmit={handleMessageSubmit}>
            <input type="text" 
                name="message" 
                placeholder="type your message here"
                value={stateMessage.message}
                onChange={handleChange}/>
            <button type="submit" id="send-button">Send</button>
        </form>
     );
}
 
export default SendMessage;