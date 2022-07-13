import Post from "../post/Post"
import Postbox from "../postbox/Postbox"
import "./feed.css"
import { Posts } from "../../fakeData";


export default function Feed() {
  return (
    <div className="feed-container">
    <div className="feeditems">
      <Postbox/>
     
      
      {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}


    </div>    
    </div>
  )
}
