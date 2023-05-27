import MessageComponent from "./MessageComponent";

const ChatHistory = ({currentChatroom, messageHistory}) => {

    // const messageHistoryOfSpecificChatroom = messageHistory.filter(specificChatroomMessages => specificChatroomMessages.chatroom.id == chatroom.id);

    const displayMessages = messageHistory.map(sentMessage => <MessageComponent key={sentMessage.id} sentMessage={sentMessage}/>);

    return ( 
        <div>
            {displayMessages}
            {/* {displayMessages ? displayMessages : null} */}
        </div>
     );
}
 
export default ChatHistory;