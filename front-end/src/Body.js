import React from "react";

function Jumbo() {
  return(
    <div className="jumbotron text-center">
      <h1>Amercar Domicilios</h1>
      <p>Sirviendote para facilitar tu mercado!</p>
    </div>
  );
}

function NodoCategoria(props){
  return(
    <a href="" className="">
      <table className="table table-borderless">
        <tbody>
          <tr>
            <td><img className="img-fluid" src="images/No_Disponible.png" alt="Imagen Producto"/></td>
          </tr>
          <tr>
            <td>{props.producto.Nombre}</td>
          </tr>
          <tr>
            <td> $ {props.producto.PRECIO}</td>
          </tr>
        </tbody>
      </table>
    </a>
  );
}

class Producto extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <tr>
        <td>{this.props.producto.Nombre}</td>
        <td>{this.props.producto.Cantidad}</td>
      </tr>
    );
  }
}

export default Producto;
export {Jumbo};
export {NodoCategoria};