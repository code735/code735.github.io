const About = ({textColor})=>{
    return(
        <div id="about" style={{margin:"10% 2%"}} class="about section" >
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"20px"}}>
            <div style={{width:"40%",background:"#171717",height:"400px",borderRadius:"20px"}}>
                <img style={{height:"100%",objectFit:"cover",borderRadius:"20px"}} src="https://cdn.dribbble.com/users/225098/screenshots/16092693/media/35fe493913fa4e2d862a501b6abab57c.png" alt="" />
            </div>
            <div style={{width:"60%"}}>
                <h1 className={textColor} style={{fontSize:"5rem"}}>ABOUT ME</h1>
                <div className="about-text">
                    <h4 style={{fontWeight:"500",margin:"20px 0"}} className={textColor}>
                        Hi I am a highly motivated and dedicated computer engineer with a strong educational background and some experience in the field. I have completed my graduation from Masai School and then pursued my Diploma in Computer Engineering and diploma in UI/UX design from Envision Institute. Through these programs, I have gained a solid foundation in computer engineering, including programming languages, computer architecture, and software development.
                    </h4>
                    <h4 style={{fontWeight:"500",margin:"20px 0"}} className={textColor}>
                    In addition to my formal education, I have also had the opportunity to apply my skills in real-world projects, as I have worked as a freelancer. I have worked on one or two projects, which provided me with valuable experience in project management, problem-solving, and teamwork. These projects have also helped me to develop my technical skills and understanding of the industry.
                    </h4>
                </div>
            </div>
            </div>
        </div>
    );
}

export default About;