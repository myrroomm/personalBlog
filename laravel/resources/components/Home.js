import React from 'react';
import ReactDOM from 'react-dom';
import Button from "react-bootstrap/Button";

function Home() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                        <Button variant="outline-primary">Button Test</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;