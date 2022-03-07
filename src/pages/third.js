import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import AlertProps from "../component/alert_props";

export default class Third extends React.Component{
    render(){
        return(
            <div className="container">
                <AlertProps type="danger" tittle="fatal Error">
                    ini adalah alert type danger
                </AlertProps>
                <AlertProps type="warning" tittle="Warning">
                    ini adalah alert type Warning
                </AlertProps>
                <AlertProps type="success" tittle="Success">
                    ini adalah alert type success
                </AlertProps>
            </div>
        )
    }
}