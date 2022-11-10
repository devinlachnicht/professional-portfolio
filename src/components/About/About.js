import classes from './About.module.css';

function About() {
    return ( 
        <div className={classes.aboutBG}>
        <div className={classes.about}>
            <div className={classes.container}>
                <h1 className={classes.aboutMe}>About Me</h1>
                <p>
                    I am a novice Full Stack Developer, with experience in building and creating Web Applications.
                    I am working on receiving a Certificate in Full Stack Web Development from Rutgers University,
                    where I have gained proficiency in both front-end and back-end development. 
                </p>
                <p className={classes.paragraph}>
                    I am well organized and extremely detail-oriented, which allows me to focus
                    on the task at hand and get the job done efficiently and professionally. 
                </p>
            </div>
        </div>
        </div>
     );
}
 
export default About;