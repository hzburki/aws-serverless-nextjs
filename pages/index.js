import React, { Component } from 'react';

// including gradient background
// import '../utils/animated-gradient';

class HomePage extends Component {
    render(){
        return (
            <div>
                <image 
                    src="/static/full-logo.png" 
                    height="300" 
                    width="900" 
                    id="full-logo" 
                    alt="Ideamappers GIS & Software Solutions" 
                />
                
                {/* <div id="main-container">
                </div> */}
                
                {/* Style */}
                {/* <style jsx>{`
                    html, body{
                        margin: 0;
                        height: 100%;
                    }
                    #main-container{
                        // position: absolute;
                        // left: 0;
                        // top: 0;
                        // right: 0;
                        // bottom: 0;
                        // background: #f5fcff;
                    }
                    #full-logo{
                        height: auto;
                        width: 100%;
                    }
                `}</style> */}
            </div>
        )
    }
}

export default HomePage; 