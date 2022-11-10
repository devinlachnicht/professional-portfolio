import classes from './Nav.module.css';

function Nav () {
    return ( 
        <div className={classes.Nav}>
            <h1 className={classes.Name}>DEVIN LACHNICHT</h1>
            <nav>
                <ul>
                    <li>
                        <a href="/#about">ABOUT ME</a>
                    </li>
                    <li>
                        <a href="/#portfolio">PORTFOLIO</a>
                    </li>
                    <li>
                        <a href="/#contact">CONTACT ME</a>
                    </li>
                    <li>
                        <a href="/#resume">RESUME</a>
                    </li>
                </ul>
            </nav>
        </div>
     );
}

export default Nav;