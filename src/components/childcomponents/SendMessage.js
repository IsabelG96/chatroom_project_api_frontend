const SendMessage = ({message}) => {
    return ( 
        <>
            <form>
                <input type="text" name="message" placeholder="type your message here" value={message}/>
                <button type="submit">Send</button>
            </form>
        </>
     );
}
 
export default SendMessage;