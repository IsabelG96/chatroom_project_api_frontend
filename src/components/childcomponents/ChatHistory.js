import MessageComponent from "./MessageComponent";

const ChatHistory = ({messageHistory}) => {

    const displayMessages = messageHistory.map((messageSent) => {
        return <MessageComponent 
                    key={messageSent.id}
                    messageSent={messageSent}/>
    })

    return ( 
        <div>
            <h2>Chat History</h2>
            {displayMessages}
        </div>
     );
}
 
export default ChatHistory;