import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

export default class first extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className='alert alert-info text-center'>
                    <h3 className='text-danger'>Praktik Bootstrap di React</h3>
                    <p>Belajar React dan Bootstrap itu mudah</p>
                    <button className='btn btn-success'>siap</button>
                    <button className='btn btn-info'>setuju</button>
                </div>
            </div>
        )
    }
}
