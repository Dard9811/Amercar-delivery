import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function ButtonSignInDisabled(props){
    return (
    <button className="nav-link btn btn-dark text-light mx-2 my-2 disabled" onClick={props.signIn}>{props.txt}</button>
    )
}

function ButtonSignIn(props){
  return(
      <button className="nav-link btn btn-dark text-light mx-2 my-2" onClick={props.logOut}>{props.txt}</button>
  )
}

class NavBar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let isClicked = this.props.isClicked;
    let link;
    if (isClicked) {
      link = <ButtonSignInDisabled signIn={this.props.onClick} txt="Sign in" isClicked={true}></ButtonSignInDisabled>
    } else {
      link = <ButtonSignIn logOut={this.props.onClick} txt="Sign In" ></ButtonSignIn>
    }
    return(
      <div className="sticky-top">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="index.html">
            <Link to="/"><img className="img-fluid" src="images/Logo.PNG" alt="Logo" width="200" heigth="50"></img></Link>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <form className="form-inline">
                <input type="search" className="form-control mr-sm-2" placeholder="Just type to search" aria-label="Search"/>
              </form>
              <li className="nav-item my-1">
                <Link to="/signin">{link}</Link>
              </li>
              <li className="nav-item my-1">
                <Link to="/login"><ButtonSignIn txt="Log In" ></ButtonSignIn></Link>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav mr-5">
          </ul>
        </nav>
      </div>
    )
  }
}

export default NavBar;