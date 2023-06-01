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

    return ( 
            <form className="send-message-form" onSubmit={handleMessageSubmit}>
                <input type="text" 
                name="message" 
                placeholder="type your message here"
                value={stateMessage.message}
                onChange={handleChange}/>
                <button type="submit">&crarr;</button>
            </form>
     );
}
 
export default SendMessage;