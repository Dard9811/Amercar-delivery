import React from "react";


class SignIn extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <form className="container">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">Nombres</label>
            <div className="col-sm-10">
              <input type="name"className="form-control" id="inputName" placeholder="Nombres" ref="nombre" onChange={this.handleNombre}/>
            </div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputApellidos" className="col-sm-2 col-form-label">Apellidos</label>
            <div className="col-sm-10">
              <input type="apellidos"className="form-control" id="inputApellidos" placeholder="Apellidos" ref="apellido"/>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email"className="form-control" id="inputEmail" placeholder="Email" ref="email"/>
            </div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Contraseña</label>
            <div className="col-sm-10">
              <input type="password"className="form-control" id="inputPassword" placeholder="Contraseña" ref="contrasena"/>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputDireccion" className="col-sm-2 col-form-label">Dirección</label>
            <div className="col-sm-10">
              <input type="direccion"className="form-control" id="inputDireccion" placeholder="Dirección"  ref="direccion"/>
            </div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputIdentificacion" className="col-sm-2 col-form-label">C.C</label>
            <div className="col-sm-10">
              <input type="identificacion"className="form-control" id="inputIdentificacion" placeholder="Cédula de Ciudadania" ref="cedula"/>
            </div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputTelefono" className="col-sm-2 col-form-label">Teléfono</label>
            <div className="col-sm-10">
              <input type="telefono"className="form-control" id="inputTelefono" placeholder="Teléfono" ref="telefono"/>
            </div>
          </div>
        </div>
        <div className="form-group row ml-1 mt-3">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">Sign in</button>
      <!-- Se recomienda llamar al metodo del back de crear usuario. -->
          </div>
        </div>
      </form>
    );
  }
}

export default SignIn;
