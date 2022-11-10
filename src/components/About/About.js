import classes from './About.module.css';

function About() {
    return ( 
        <div className={classes.aboutBG}>
        <div className={classes.About}>
            <div className={classes.Container}>
                <h1 className={classes.aboutMe}>About Me</h1>
                <p>I am an...</p>
            </div>
            {/* <img className={classes.aboutImage} src={aboutBG} alt="highway"></img> */}
        </div>
        </div>
     );
}
 
export default About;