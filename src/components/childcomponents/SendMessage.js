import { useState, useEffect } from "react";
const SendMessage = ({message, chatroom, postMessage, user}) => {

    const [stateMessage, setStateMessage] = useState({
        message: "",
        time: null,
        chatroomId: chatroom.id,
        userId: user.id
    });

    useEffect(() => {
        let copiedMessageObject = {...stateMessage};
        copiedMessageObject.chatroomId = chatroom.id;
        copiedMessageObject.userId = user.id;
        setStateMessage(copiedMessageObject);
    }, [chatroom, user])

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

    useEffect(() => {
        const messageToSend = document.getElementById("sending_message")
        messageToSend.value = "";
    }, [handleMessageSubmit])

    return ( 
            <form className="send-message-form" onSubmit={handleMessageSubmit}>
                <input type="text" 
                id="sending_message"
                name="message" 
                placeholder="type your message here"
                value={stateMessage.message}
                onChange={handleChange}
                autoComplete="off"/>
                <button type="submit">&crarr;</button>
            </form>
     );
}
 
export default SendMessage;