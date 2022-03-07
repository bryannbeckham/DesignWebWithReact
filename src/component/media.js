import React from "react";

export default class Media extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col col-auto">
                    <img src={process.env.PUBLIC_URL+'/assets/'+this.props.image}
                    className="mr-3" width='100px' alt="media" />
                </div>
                <div className="col col-auto text-left">
                    <h4 className="mt-0">{this.props.tittle}</h4>
                    <p>{this.props.children}</p>
                </div>
            </div>
        )
    }
}