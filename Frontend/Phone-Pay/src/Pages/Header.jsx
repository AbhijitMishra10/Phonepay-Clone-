import { Link, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate()
    return(
        <div>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
            <Link to='/home'>Home</Link>
            <Link to='/redux'>Reduxx</Link>
            <Link to='/transaction'>Transaction</Link>
        </div>
    )
}
export default Header