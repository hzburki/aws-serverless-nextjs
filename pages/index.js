import React, { Component } from 'react';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css';

// Including Gradient Background
import '../utils/animated-gradient';

class HomePage extends Component {
    render(){
        return (
            <React.Fragment>
                <div id="main-container">
                    <img id="full-logo" src="/static/full-logo.png" alt="Ideamappers - GIS & Software Solutions" />
                </div>
                
                {/* Style */}
                <style jsx>{`
                    html, body{
                        margin: 0;
                        height: 100%;
                    }
                    #main-container{
                        position: absolute;
                        left: 0;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        background: #f5fcff;
                    }
                    #full-logo{
                        height: auto;
                        width: 100%;
                        margin-top: 5%;
                    }
                `}</style>
            </React.Fragment>
        )
    }
}

export default HomePage; 