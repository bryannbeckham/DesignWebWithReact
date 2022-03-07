import React from "react";
import Media from "../component/media"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

export default class Fourth extends React.Component{
    render(){
        return(
            <div className="container">
                <Media image="logo_react.png" tittle="React Js" type="info">
                    Framework untuk bagian frontEnd Development
                </Media>
                <Media image="logo_node.png" tittle=" Node js" type="success">
                    Framework untuk bagian backEnd Development
                </Media>
            </div>
        )
    }
} 