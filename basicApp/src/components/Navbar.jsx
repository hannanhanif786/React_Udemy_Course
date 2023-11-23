import '../css/navbar.css'

function Navbar(){
    return(
        <div id="navbar_container">
            <div className="logo">
                <p>LOGO</p>
            </div>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
        </div>
    )
}

export default Navbar