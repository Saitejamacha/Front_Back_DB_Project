import {Link} from 'react-router-dom'
import "./index.css"

const Header = () => (
        <div className="site-header">      
      
             <Link to="/" style={{textDecoration: "none"}}>
                <p className='nav-item'>Home</p>
                </Link>

                <Link to="/Search" style={{textDecoration: "none"}}> 
                   <p className='nav-item'>Search</p>
                </Link>
        </div>
)

export default Header