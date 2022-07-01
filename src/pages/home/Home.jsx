import Feed from "../../components/feed/Feed";
import Leftnav from "../../components/leftnavbar/Leftnav";
import Rightnav from "../../components/rightnavbar/Rightnav";
import Topnav from "../../components/topnavbar/Topnav";
import "./home.css";

function home() {
  return (
    <div>
      <div className="topnav">
        <Topnav />
      </div>

      <div className="home-container">
       
          <Leftnav />
          <Feed />
          <Rightnav />
       
      </div>
    </div>
  );
}

export default home;
