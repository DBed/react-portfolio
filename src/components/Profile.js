import React from "react";

class Profile extends React.Component {
    render() {
        
        return (
            <main>
                <div id="head-container">
                    <img id="profile-pic" src="images/dylan-face.jpg"/>
                    <section>
                        <div id="titles"> 
                            <ul id="title-list">
                                <li>Web Developer</li>
                                <li>-</li>
                                <li>Teacher</li>
                                <li>-</li>
                                <li>Lifelong Learner</li>
                            </ul>
                        </div>
                        <div id="about-me">
                            <p className="description-fill"> Hello!</p>
                            <p id="key-desc"> I'm Dylan, a <span className="emphasis"> Web Developer</span> from Toronto.</p>
                            <p className="description-fill"> I employ creative thinking to solve tricky problems and make cool stuff; <br/> <span className="emphasis"><a id="mail-link" href="mailto:dylan@email.com">Let's make something together!</a></span></p>
                        </div> 
                    </section>
                </div>
            </main>
        );
    }
}
export default Profile;