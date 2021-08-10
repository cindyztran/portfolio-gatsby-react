import React from "react"
import Layout from "../layout/Layout"
import headshot from '../images/headshot-photo.png';

export default function Blog() {

  
  return (
    <Layout>
      <div className="headshot-container">
        <img className="headshot" src={headshot} alt=""/>
      </div>
      <h1 className="index-heading-name">C I N D Y<span>&nbsp;&nbsp;</span> T R A N</h1>
      <h2 className="index-heading" style={{fontSize:16}}>Software Engineer and Full-Stack Developer</h2>
      <h4 style={{fontWeight: "normal"}}className="index-heading"> HTML | CSS | JavaScript | jQuery | ReactJS | NodeJS | MongoDB/Mongoose | Express | SQL | Ruby | Rails | Python</h4>
    <div className="index-container-1">
      <h3 className="about-header">ABOUT CINDY</h3>
      <div className="index-container-2">
        <div className="index-item">

          Software developer with a background in the healthcare industry, business development and housing. 
          I use my experience in patient care along with time management and active listening in combination with programming to approach each project with a level of prioritization, and deliver efficient results. I bring my passion for problem solving into each project to assess the impact of alternative solutions, and make choices that lead to desirable changes to interact with the business environment. <br/><br/>
          
        </div>
    </div>
        <div style={{textAlign: "center"}}>
          <h3 className="hobbies-header" style={{fontWeight: "normal", marginBottom: 10}}>HOBBIES:</h3>
            <div>Weight lifting, running, painting, baking and trying out new restaurants.</div>
        </div>
        <h3 className="connect-header" style={{marginBottom: 20, marginTop:20}}>LET'S CONNECT</h3>
        <div className="form-container">
          <form type="hidden" name="contact" method="POST" data-netlify="true">
            <p>
            <label>Name: </label> <input type="text" name="name"/>
            </p>
            <p>
              <label>Email: </label><input type="email" name="email"/>
            </p>
            <p>
              <label>Message: </label><textarea name="message" rows="4" cols="50" style={{width:300, height:200}}/>
            </p>
            <button className="submit-btn" type="submit">Send</button>
          </form>

        </div>
        

      </div>
    </Layout>
  )
}
