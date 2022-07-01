import "./postbox.css"
// import Paper from '@mui/material/Paper';
import img1 from "../../assets/img/profileimg.jpg"
import FilePresentIcon from '@mui/icons-material/FilePresent';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import Button from '@mui/material/Button';

export default function Postbox() {
  return (
    <div className="postbox-container">
        <div className="postbox">
            <div className="postbox-top">
              <img src={img1} alt="" className="postbox-profile-img"/>
              <input
              placeholder="What's in your mind?"
              className="postcard-input"
              />
            </div>
            <hr className="postbox-hr"/>
            <div className="postbox-bottom">
               <div className="postbox-options">

                <div className="postbox-icons">
                
                <div className="postbox-icon">
                <FilePresentIcon/>
                <span className="postbox-icontext">Photo/Video</span>
                </div>

                <div className="postbox-icon">
                <AddLocationAltIcon/>
                <span className="postbox-icontext">Location</span>
                </div>

                <div className="postbox-icon">
                <AddReactionIcon/>
                <span className="postbox-icontext">Feeling</span>
                </div>
               
              
                </div>
               </div>

               <Button className="postbox-submitbtn"  variant="contained">Submit</Button>
            </div>
        </div>
    </div>
  )
}
