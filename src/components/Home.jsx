import React from "react";
import src from "../images/hero.jpg";

const Home = ({textColor})=>{
    return <div id="home" style={{border:"10px solid #171717",borderRadius:"40px",margin:"10px",backdropFilter:"blur(10px)"}}>
                <div style={{display:"flex",height:"100%"}}>
                    <div style={{width:"50%",boxSizing:"border-box",padding:"30px"}}>
                        <h1 style={{fontFamily:"Inter, sans-serif",fontSize:"4.3rem"}} className={textColor} id="user-detail-name">
                            Hi, I’am Prathmesh Kumbhar
                        </h1>
                        <h3 style={{fontSize:"2rem",padding:"10px 0"}} id="user-detail-intro" className={textColor}>FullStack Developer</h3>
                        <button style={{
                            background:"#171717",
                            color:"white",
                            fontSize:"1.3rem",
                            padding:"10px 10px",
                            margin:"15px 0", 
                            borderRadius:"10px",
                            border:"none",
                            display:"flex",
                            justifyContent:"space-between",
                            gap:"10px"
                            }}>Resume <i class="bi bi-arrow-right-circle"></i></button>
                    </div>
                    <div style={{width:"50%"}}>
                        <img src={src} style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"30px"}} alt="" />
                    </div>
                </div>
            </div>;
}

export default Home;