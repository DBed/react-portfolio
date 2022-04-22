import React from "react";
import axios from "axios";

class Projects extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        axios({
            url: "json/projects.json",
            method: "GET"
        })
        .then((res) =>{
            this.setState({
                projects: res.data
            });
        });
    }
    
    render() {
        
        const { projects } = this.state;
        return (
            <aside>
                <h2 id="project-head">Projects</h2>

                <section id="project-area">
                    {projects.map(p =>(
                        <div key={p.id} className="project-container">
                            <img className="project-image popout" src={p.image}/>
                            <div className="proj-text">
                                <h3 className="proj-title">{p.title}</h3>
                                <p className="proj-desc">{p.description}</p>
                            </div>
                        </div>
                    ))}
                </section>

            </aside>
        );
    }
}
export default Projects;