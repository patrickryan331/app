import './styles/navbar.css'

function Navbar(){
    return(
            <div className='navbar'>
                <header className='header'>
                <div>
                    <label className='headerTitle'>Product Title</label>
                </div>
                <nav>
                    <div className='menu'>
                        <a href="">Log In</a>
                        <a href="">Search</a>
                        <a href="">Subscribe</a>
                        <a href="">Menu</a>
                    </div> 
                </nav>
            </header>
            </div>
    );
}


export default Navbar;