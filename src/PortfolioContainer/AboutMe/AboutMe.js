import React, { useEffect } from "react";
import "./AboutMe.css";
import Aos from "aos";
import "aos/dist/aos.css"

function AboutMe() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <>
      <div className="aboutMeContainer" id="about">
        <div className="heading" data-aos="fade-right">WHAT WE DO</div>
        <div data-aos="fade-up" className="aboutMeParagraph ">
          <p >
            {" "}
            From React to Java, Angular to Node, Vue to Next, and all
             the way to blockchain, our proficiency covers an expansive 
             spectrum of technologies that drive the modern IT world. 
             Our seasoned team of developers possesses a deep understanding 
             of these frameworks and languages, enabling us to craft tailor-made 
             solutions that align with your unique business needs.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
