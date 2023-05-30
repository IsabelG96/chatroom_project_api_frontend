import { useState, useEffect } from "react";
const SendMessage = ({message, chatroom, postMessage}) => {

    const [stateMessage, setStateMessage] = useState({
        message: "",
        time: null,
        chatroomId: chatroom.id,
        userId: 2
    });

    useEffect(() => {
        let copiedMessageObject = {...stateMessage};
        copiedMessageObject.chatroomId = chatroom.id;
        setStateMessage(copiedMessageObject);
    }, [chatroom])

    const handleChange = (e) => {
        let messageName = e.target.name;
        let copiedMessageObject = {...stateMessage};
        copiedMessageObject[messageName] = e.target.value;
        setStateMessage(copiedMessageObject);
    }

    const handleMessageSubmit = (e) => {
        e.preventDefault();
        postMessage(stateMessage);
    }

    return ( 
        <>
            <form onSubmit={handleMessageSubmit}>
                <input type="text" 
                name="message" 
                placeholder="type your message here"
                value={stateMessage.message}
                onChange={handleChange}/>
                <button type="submit">Send</button>
            </form>
        </>
     );
}
 
export default SendMessage;