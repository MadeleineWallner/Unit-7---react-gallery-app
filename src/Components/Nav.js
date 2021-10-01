import {NavLink} from 'react-router-dom';


const Nav = () => {

    return(
        <nav className="main-nav">
            <ul>
                <li>
                    <NavLink to="/Cats">Cats</NavLink>
                </li>
                <li>
                    <NavLink to="/Dogs">Dogs</NavLink>
                </li>
                <li>
                    <NavLink to="/Cows">Cows</NavLink>  
                </li>
        
            </ul>
        </nav>
    )
}


export default Nav;