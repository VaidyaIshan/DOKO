class Navbar extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <nav class="navbar">
        <a href="index.html" class="logo">
            <img src="icons/doko_logo.png" alt="Logo"/>
        </a>
        <div class="menu">
            <a href="index.html">Home</a>
            <div class="dropdown">
                <a href="#">CSIT</a>
                <div class="dropdown-content">
                    <a href="">Batch of 2028</a>
                    <a href="#">Batch of 2027</a>
                </div>
            </div>
            <div class="dropdown">
                <a href="#">BCA</a>
                <div class="dropdown-content">
                    <a href="#">Batch of 2028</a>
                    <a href="#">Batch of 2027</a>
                </div>
            </div>
             <div class="dropdown">
                <a href="#">Clubs</a>
                <div class="dropdown-content">
                    <a href="#">Software Club</a>
                    <a href="#">Hiking Club</a>
                    <a href="#">Literaturex Club</a>
                </div>
            </div>
            <a href="#dwit-papers">DWIT Papers</a>
            <a href="#tu-papers">TU Papers</a>
            <a href="login.html">Login</a>
            <a href="#forms">Forms</a>
            <a href="aboutus.html">About Us</a>
        </div>
    </nav>`;
    }
}
customElements.define("navbar-component",Navbar);