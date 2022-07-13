import "./post.css";
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../fakeData";
import { Paper } from "@mui/material";
// import { useState } from "react";
import img1 from "../../assets/img/profileimg.jpg"
import img2 from "../../assets/posts/3.jpg"
import FavoriteIcon from '@mui/icons-material/Favorite';
export default function Post({ post }) {
 
 console.log(post);
  // const [like,setLike] = useState(post.like)
  // const [isLiked,setIsLiked] = useState(false)
  // const likeHandler =()=>{
  //   setLike(isLiked ? like-1 : like+1)
  //   setIsLiked(!isLiked)
  // }

  return (
    <>
    <Paper elevation={3}
    sx={{
      width: '100%',
      margin: '30px 0',

    }}
    >
    <div className="postTop">
      <div className="postTopLeft">
        <img className="postProfileImg"  src={img1} alt="" />
        <span className="postUsername"> Dhrubajit Bhattacharjee </span>
        <span className="postDate">5 hours ago</span>
      </div>
      <div className="PostTopRight">
{/* <MoreVertIcon/> */}
      </div>
      
    </div>
     <div className="postCenter">
     <span className="postText">hi</span>
          <img className="postImg" src={img2} alt="" />
     </div>

     <div className="postBottom">
      <div className="postBottomLeft">
<FavoriteIcon/>
      </div>
      <div className="postBottomRight"></div>

     </div>

    </Paper>
    
    
    
    
    
    </>
  );
}


// https://random-data-api.com/api/address/random_address