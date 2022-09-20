import Reviews from "./Reviews";
import Rating  from "./Rating";
import Analysis from "./Analysis";
import Sidebar from "./Sidebar";

function Dashboard(){
  return(
    <div className="wireframe">
      <div className="dashboard">
         <Reviews/>
         <Rating/>
         <Analysis/>
         <Sidebar/>
      </div>

      </div>
  )
}

export default Dashboard;