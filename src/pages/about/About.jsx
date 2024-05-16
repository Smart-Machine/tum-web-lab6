import './About.css';

const About = () => {
    return (
        <div className="about">
            <h3>About Bloggy</h3>
            <span>Bloggy is a platform for everyone with a voice and a story to share. We believe that the internet thrives on the free exchange of ideas and perspectives. Whether you're a seasoned writer or just starting out, Bloggy is your space to create, connect, and be heard.</span>
            <span>Here's what makes Bloggy special:</span>
            <ul className="aboutList">
                <li className="aboutListItem">
                    <h4>Free and Open:</h4>
                    <span>Sign up for free and start sharing your thoughts with the world. No barriers, no gatekeepers, just your voice and an audience waiting to be engaged.</span>
                </li>
                <li className="aboutListItem">
                    <h4>Your Voice Matters:</h4>
                    <span>We value your unique perspective. Share your passions, experiences, and knowledge with the world and connect with others who share your interests.</span>
                </li>
                <li className="aboutListItem">
                    <h4>Simple and Easy-to-Use:</h4>
                    <span>No coding required! Our user-friendly interface makes creating beautiful and engaging blog posts a breeze.</span>
                </li>
            </ul>
        </div>
    );
}

export default About;