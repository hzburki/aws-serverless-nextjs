import React, { Component } from 'react';

// Including Gradient Background
import '../utils/animated-gradient';

class HomePage extends Component {
    render(){
        return (
            <React.Fragment>
                <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
                <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous" />

                <div id="main-container">
                    <img id="full-logo" src="/static/assets/full-logo.png" alt="Ideamappers - GIS & Software Solutions" />
                
                    <div className="container">
                        <div className="row work">
                            <div className="col-md-4">Geogrphical Information Systems</div>
                            <div className="col-md-4">Web & Mobile Development</div>
                            <div className="col-md-4">Cloud Hosting & Amazon Web Services</div>
                        </div>

                        <div className="row details">
                            <div className="col-md-4">
                                <i class="far fa-envelope"></i> haseeb.burki@ideamappers.com
                            </div>
                            <div className="col-md-4">
                                <i class="fas fa-phone"></i> +92-312-5207790
                            </div>
                            <div className="col-md-4">
                                <i class="fas fa-map-marker-alt"></i> Office # 2, 2 Floor, Al-Hameed Plaza, G-11 Markaz, Islamabad
                            </div>
                        </div>
                    </div>
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
                    .work{
                        color: #545554;
                        font-size: 1.2em;
                        font-weight: bold;
                        padding-bottom: 1%;
                        text-align: center;
                        font-family: 'Roboto', sans-serif;
                        border-bottom: 2px solid #545554;
                    }
                    .details{
                        font-size: 1em;
                        padding-top: 1%;
                        color: #545554;
                        font-weight: bold;
                        text-align: center;
                        font-family: 'Roboto', sans-serif;
                    }
                `}</style>
            </React.Fragment>
        )
    }
}

export default HomePage; 