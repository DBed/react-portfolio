import React from "react";

class Header extends React.Component {
    render(){
        return (
            <header id="header">
                    <div>
                        <h2 id="site-name">Dylan Bednar</h2>
                    </div>
                    <div>
                        <ul>
                            <li className="header-link">About</li>
                            <li className="header-link">Work</li>
                            <li className="header-link">Contact</li>
                        </ul>
                    </div>
            </header>
        );
    }
}
export default Header;