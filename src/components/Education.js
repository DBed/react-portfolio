import React from "react";
import axios from "axios";

class Education extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            educations: []
        };
    }

    componentDidMount() {
        axios({
            url: "json/educations.json",
            method: "GET"
        })
        .then((res) => {
            this.setState({
                educations: res.data
            });
        });
    }
    
    render() {
        const { educations } = this.state;
        return (
            <div id="education">
                    <h3 id="ed-head">Education</h3>
                    <div id="education-container">
                        {educations.map(e =>(
                        <div key={e.id} className="ed-card"> 
                            <h4 className="ed-degree">{e.degree}</h4>
                            <p className="ed-program">{e.program}</p>
                            <p>{e.school}</p>
                        </div>
                        ))}
                    </div>
            </div>
        );
    }
}
export default Education;