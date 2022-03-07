import React from "react";

export default class Card extends React.Component{
    render(){
        return(
            <div className="col-lg-6 col-sm-12 p-2">
                <div className="card">
                    <div className="card-body row">
                    <div className="col-5">
                            <img src={this.props.foto} className="img" height="150" />
                        </div>
                        <div className="col-7">
                            <h5 className="text-secondary">
                                {this.props.nama}
                            </h5>
                            <h6 className="text-dark">
                                Alamat: {this.props.alamat}
                            </h6>
                            <h6 className="text-dark">
                                Telepon: {this.props.telp}
                            </h6>
                            <button className="btn btn-sm btn-primary m-1" onClick={this.props.onEdit}>View</button>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}