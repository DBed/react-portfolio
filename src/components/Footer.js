import React from "react";

class Footer extends React.Component {
    render() {
        let copy = String.fromCharCode(0x00a9);
        return (
            <footer id="footer">
                <div>{copy} Dylan Bednar, 2022</div>
                <div>
                    <ul id="social-icons">
                        <li><a href="https://github.com/DBed" target="_blank"><i className =" social fa-brands fa-github-square"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/dylan-bednar/" target="_blank"><i className=" social fa-brands fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </footer>
        );
    }
}
export default Footer;