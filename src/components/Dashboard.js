import Reviews from "./Reviews";
import Rating  from "./Rating";
import Analysis from "./Analysis";

function Dashboard(){
  return(
    <div className="wireframe">
      <div className="dashboard">
         <Reviews/>
         <Rating/>
         <Analysis/>
      </div>

      </div>
  )
}

export default Dashboard;