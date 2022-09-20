function Visitors(props) {
  return(
    <div className="visitors"> 
          <h3> Website visitors</h3>
          <p>{props.number}</p>
          <div className="graphic"></div>
    </div>
  )
}

export default Visitors;