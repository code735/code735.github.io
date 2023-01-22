const Skills =({textColor})=>{
    return <div id="skills" style={{margin:"8% 2%"}}>
        <div style={{display:"flex",alignItems:"center"}}>
            <div className={textColor} style={{width:"50%"}}>
                <h1 style={{fontSize:"5rem"}}>Skills</h1>
                <div style={{display:"flex",alignItems:"center",flexWrap:"wrap"}}>
                    <div className="skill-link">
                        <img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="" />
                    </div>
                    <div className="skill-link">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
                    </div>
                    <div className="skill-link">
                        <img src="https://softprodigy.com/wp-content/uploads/2019/06/nodejs-logo.png" alt="" />
                    </div>
                    <div className="skill-link">
                        <img src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg" alt="" />
                    </div>
                    <div className="skill-link">
                        <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" />
                    </div>
                    <div className="skill-link">
                        <img src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="" />
                    </div>
                    <div className="skill-link">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="" />
                    </div>
                    <div className="skill-link">
                        <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" alt="" />
                    </div>
                    <div className="skill-link">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="" />
                    </div>
                    <div className="skill-link">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className={textColor} style={{width:"50%"}}>
                <img style={{borderRadius:"10px"}} src="https://cdn.dribbble.com/userupload/3166323/file/original-8f391d437402c98d0f0e5b3ed4603489.png?compress=1&resize=1024x576" alt="" srcset="" />
            </div>
        </div>
    </div>;
}

export default Skills;