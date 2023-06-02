import * as React from 'react';
// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

const CreateNewChatroom = ({handleAddingNewChatroom}) => {
  const [open, setOpen] = React.useState(false);

  const [chatroomName, setChatroomName] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    setOpen(false);
    handleAddingNewChatroom(chatroomName);
  };

//   const handleEditChatroomName = (e) => {
//     e.preventDefault();
//     // change the chatroom name
//     postNewChatroomName(stateChatroomName, chatroom.id);
// }
  
const handleChange = (e) => {
    // let messageName = e.target.name;
    // let copiedMessageObject = {...stateMessage};
    let copiedChatroomName = e.target.value;
    // setStateMessage(copiedMessageObject);
    setChatroomName(copiedChatroomName);
}
    return ( 
        <>
            <button onClick={handleClickOpen}>+</button>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle style={{backgroundColor: "rgb(12, 27, 35)", color: "white"}}>Edit chatroom name</DialogTitle>
                <DialogContent style={{backgroundColor:"rgb(56, 207, 207)"}}>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Chatroom name"
                    fullWidth
                    variant="standard"
                    value={chatroomName}
                    onChange={handleChange}
                    style={{color: "white"}}
                />
                </DialogContent>
                <DialogActions style={{backgroundColor: "rgb(56, 207, 207)", color: "white"}}>
                {/* <Button variant="contained" onClick={handleClose}>Confirm</Button> */}
                <button onClick={handleClose}>Confirm</button>
                </DialogActions>
                {/* <form onSubmit={handleClose}>
                    <input type="text" 
                        id="sending_message"
                        
                        name="message" 
                        placeholder="type your message here"
                        onChange={handleChange}
                        autoComplete="off"value={chatroomName} />
                    <button type="submit"></button>
                </form> */}
            </Dialog>
        </>
     );
}
 
export default CreateNewChatroom;