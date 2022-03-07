import React from "react";
import Card from "../component/card";
import './final.css'

export default class Final extends React.Component{
    constructor(){
        super()
        this.state = {
            coffe : [
                {
                    nama: "Robbuca",
                    alamat: " Ijen Nirwana, Jl. Raya No.1A, Bareng, Kec. Klojen, Kota Malang, Jawa Timur 65116",
                    telp: "0812345",
                    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrU5NqyJwxBtkTYfhsrmISc65nxhTIQGgroA&usqp=CAU"
                },
                {
                    nama: "Nakoa Cafe Bondowoso",
                    alamat: "Jl. Bondowoso No.14, Gading Kasri, Kec. Klojen, Kota Malang, Jawa Timur 65115",
                    telp: "0823456",
                    foto: "https://s1.oomph.co.id/img/thumb/8_20210222111701_nakoa.jpg"
                },
                {
                    nama: "Ancala Coffee & Bistro",
                    alamat: "Jl. Mawar Putih No.85, Sidomulyo, Kec. Batu, Kota Batu, Jawa Timur 65317",
                    telp: "0813456",
                    foto: "https://drive.google.com/uc?id=13LDQDE2Y8IkZfPN98bBgpvOwdaMznDO6"
                },
                {
                    nama: "Latar Ijen Resto & Cafe",
                    alamat: "Jl. Besar Ijen No.79, Oro-oro Dowo, Kec. Klojen, Kota Malang, Jawa Timur 65119",
                    telp: "0826789",
                    foto: "https://drive.google.com/uc?id=1iY4CuMuUFk8iSn7F2eYBP_oLncinAYiN"
                },
            ],
            
            nama: "",
            alamat: "",
            telp: "",
            foto: "",

        }
    }
    render(){
        return(
            // <div>
            //     <h1>test</h1>
            // </div>
            <div className="body">
            <div className="container">
                <h1 className="text-center">Gallery</h1> 
                <div className="row">
                    {this.state.coffe.map((item,index) => (
                        <Card foto={item.foto}
                        nama={item.nama}
                        alamat={item.alamat}
                        telp={item.telp}
                        onEdit={() => this.edit(item)}
                        onDrop={() => this.drop(item)}
                    />
                    ))}
                </div>
            </div>
            </div>
        )
    }
}