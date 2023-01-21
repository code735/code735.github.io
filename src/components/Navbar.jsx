const Navbar = ({handleBg,theme})=>{
    
    return <div id="nav-menu" style={{
        height:"100vh",
        width:"5vw",
        display:"flex",
        alignItems:"center",
        padding:"10px 0",
        boxSizing:"border-box"
    }}>
        <div className="theme">
            <button onClick={handleBg}><i class={theme} style={{color:"white",border:"none"}}></i></button>
        </div>
        <nav style={{
            background: "#171717",
            padding: "8px",
            display:"flex",
            alignItems:"center",
            flexDirection:"column",
            width:"50px",
            margin:"auto",
            borderRadius:"10px",
            position:"relative",
        }}>
               <a href="#home" class="nav-link home" style={{background:"blue",borderRadius:"5px"}}><i class="bi bi-house"></i></a>
               <a href="#about" class="nav-link about"><i class="bi bi-person-square"></i></a>
               <a href="" class="nav-link skills"><i class="bi bi-mortarboard-fill"></i></a>
               <a href="" class="nav-link projects"><i class="bi bi-file-earmark-code-fill"></i></a>
               <a href="" class="nav-link contact"><i class="bi bi-phone"></i></a>
               <a href="" class="nav-link resume"><i class="bi bi-file-richtext-fill"></i></a>
        </nav>
    </div>;
}

export default Navbar;