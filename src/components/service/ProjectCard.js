// import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ title, description, description1, description2, description3, imgUrl, more }) => {
  return (

    <div className="proj-imgbx">
      <img src={imgUrl} alt="img" className="imgurl" />
      <div className="proj-txtx">
        <h4 className="hop4">{title}</h4>
        <span className="span1">{description}</span><br></br><br></br>
        <span className="span1">{description1}</span><br></br><br></br>
        <span className="span1">{description2}</span><br></br><br></br>
        <span className="span1">{description3}</span><br></br><br></br>
        <button className="bitt"><Link to={more} className="serve-link">Read More</Link></button>
      </div>
    </div>

  )
};
export const ProjectCard1 = ({ title, description, description1, description2, description3, imgUrl1, more }) => {
  return (

    <div className="proj-imgbx">
      <img src={imgUrl1} alt="img" className="imgurl1" />
      <div className="proj-txtx">
        <h4 className="hop4">{title}</h4>
        <span className="span1">{description}</span><br></br><br></br>
        <span className="span1">{description1}</span><br></br><br></br>
        <span className="span1">{description2}</span><br></br><br></br>
        <span className="span1">{description3}</span><br></br><br></br>
        <button className="bitt"><Link to={more} className="serve-link">Read More</Link></button>
      </div>
    </div>

  )
}