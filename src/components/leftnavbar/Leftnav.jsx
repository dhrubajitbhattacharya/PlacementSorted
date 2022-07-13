import { Paper } from "@mui/material"
import "./leftnav.css"
import img from '../../assets/img/person1.jpg'
import img1 from '../../assets/posts/2.jpg'

export default function Leftnav() {
  return (
   
   <div className="leftnav-container">
   <Paper 
   sx={{
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    width: '80%',
    marginTop: '35px',
    
    ml:'40px'
   }}
   >
    <div className="leftnavTop">
      <img className="leftnavBgimg" src={img1} alt="" />
    <img className="leftnavpimg" src={img} alt="" />
    <span>Dhrubajit Bhattacharya</span>
    <span>dhrubajitb@gmail.com</span>
    </div>
<div className="leftnavStat">
  <span>Who viewed you</span>
  <span>39</span>
</div>
<div className="leftnavBottom"></div>


   </Paper>
    </div>

  )
}
