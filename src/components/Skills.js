import React from "react";
import axios from "axios";

class Skills extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            skills: []
        };
    }

    componentDidMount() {
        axios({
            url: "json/skills.json",
            method: "GET"
        })
        .then((res) => {
            this.setState({
                skills: res.data
            });
        });
    }
    
    render() {
        
        const { skills } = this.state;
        return (
            <div id="skills">
                    <h3>Skills and Languages</h3>
                    <ul id="skill-list">
                        {skills.map(s =>(
                            <li key={s.id}>
                                <i className={s.icon}></i>
                            </li>
                        ))}
                    </ul>
            </div>
        );

        // const { skills } = this.state;
        // return(
        //     <ul>
        //         {skills.map(s =>(
        //             <li>
        //                 <i className={s.icon}></i>
        //             </li>
        //         ))}
        //     </ul>
        // );
    }
}
export default Skills;