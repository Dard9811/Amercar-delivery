import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Entrar = () =>
<div className="ml-5">
  <form className="container text-center">
    <div className="form-group ml-5">
      <div className="form-row col-md-6 mt-5">
        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
          <input type="email"className="form-control ml-3" id="inputEmail" placeholder="Email"/>
        </div>
      </div>
      <div className="form-row col-md-6 mt-3">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Contraseña</label>
        <div className="col-sm-10">
          <input type="password"className="form-control" id="inputPassword" placeholder="Contraseña"/>
        </div>
      </div>
    </div>
    <div className="form-group row ml-1 mt-3">
      <div className="col-sm-10">
        <Link to="/"><button type="submit" className="btn btn-primary">Sign in</button></Link>
      </div>
    </div>
  </form>;
</div>
export default Entrar;