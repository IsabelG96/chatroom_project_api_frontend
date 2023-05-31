const MessageComponent = ({messageSent, notificationMessage}) => {


    return ( 
        // <>
        // {notificationMessage ? <><h5> User raided the room</h5></> :
            <div className="message_Sent">
            <h5>{messageSent.user.name}</h5>
            {messageSent.message}
            <h5>{messageSent.time.substring(0, 5)}</h5>
            </div>
            // }
            // </>
      // PLAN A
      //wrap 5 and 7 in a turnery operator
      //if it's a notification we only add the messageSent.message
      //otherwise do it 
     );
}
 
export default MessageComponent;