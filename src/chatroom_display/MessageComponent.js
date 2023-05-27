const MessageComponent = ({sentMessage}) => {

    // const userResponse = <div className="other_user_blank"></div>
    // const otherResponse = <><div className="other_user_response"><h5>{sentMessage.user.name}</h5>{sentMessage.message}<h5>{sentMessage.time.substring(0, 5)}</h5></div><div className="loggedin_user_blank"></div></>
    
    // const responseArea = <><h5>{sentMessage.user.name}</h5>{sentMessage.message}<h5>{sentMessage.time.substring(0, 5)}</h5></>
    // const blankArea = <div>.</div>

    return ( 
        // <div className="message-sent">
            <>{sentMessage.user.id == 1 ? <div className="message-sent"><div className="blank-bit"></div><div className="response-bit"><h5>{sentMessage.user.name}</h5>{sentMessage.message}<h5>{sentMessage.time.substring(0, 5)}</h5></div></div> : <div className="message-sent"><div className="response-bit"><h5>{sentMessage.user.name}</h5>{sentMessage.message}<h5>{sentMessage.time.substring(0, 5)}</h5></div><div className="blank-bit"></div></div>}</>
        // </div>
        
    
     );
}
 
export default MessageComponent;







