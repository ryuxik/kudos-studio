import './About.css';
import profile from './assets/danqi.jpg';

const About = () => {

    const aboutMeDescritpion = 'I am an independent designer building bridges between users and digital spaces. Let\'s have a fun ride together.'

    return (
        <div className="about-container">
            <div className='about-picture'>
                <img src={profile} alt='danqi profile'/>
            </div>
            <div className='about-summary'>{aboutMeDescritpion}</div>
        </div >
    )

}

export default About;