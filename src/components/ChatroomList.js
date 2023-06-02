import { useEffect } from "react";
import ChatroomListItem from "./childcomponents/ChatroomListItem";
import CreateNewChatroom from "../popups/CreateNewChatroom";

const ChatroomList = ({chatroom, chatroomList, fetchMessageHistoryForChatroom, user, addLoggedInUserToChatroom, postNewChatroomName2}) => {
    
    const list = chatroomList.map((chatroomObject) => <ChatroomListItem key={chatroomObject.id} 
    chatroom={chatroom}
    chatroomObject={chatroomObject} 
    addLoggedInUserToChatroom={addLoggedInUserToChatroom}
    fetchMessageHistoryForChatroom={fetchMessageHistoryForChatroom} 
    user={user}/>)


    const handleAddingNewChatroom = (chatroomName) => {
        // postNewChatroom();
        postNewChatroomName2(chatroomName);
        console.log("button clicked");
    }

    return ( 
        <>
            <div className="add-new-chatroom" style={{position: "fixed", backgroundColor: "rgb(23, 45, 57)", width: "17%"}}>
                <h2>Chatrooms</h2>
                {/* <button onClick={handleAddingNewChatroom}>+</button> */}
                <CreateNewChatroom handleAddingNewChatroom={handleAddingNewChatroom}/>
            </div>
            <><br/><br/><br/><br/>{list}</>
        </>
     );
}
 
export default ChatroomList;