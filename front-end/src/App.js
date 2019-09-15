import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Producto, {Jumbo,NodoCategoria} from "./Body.js";
import Footer from "./Footer.js";
/* import Categoria from "./Categoria.js"; */
import SignIn from "./SignIn.js";
import NavBar from "./NavBar.js";
import LogIn from "./LogIn.js";

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      productos: [],
      booleanCategoria: true,
    }

    window.AppComponent=this;

}

  componentDidMount(){
    fetch("/data")
      .then(res => res.json())
      .then(productos =>  this.setState({
        productos: productos
      })
    );
  }

  renderProductos(){
    return this.state.productos.map(p => <Producto producto={p}></Producto>);
  };

  render(){
    return (
      <Router>
        <div>
        <NavBar onClick={this.handleBooleanT} isClicked={false}></NavBar>
          <Route exact path="/" component={Catalogo}></Route>
          <div className="container">
          <Route path="/signin" component={SignIn}></Route>
          <Route path="/login" component={LogIn}></Route>
            <Footer></Footer>
          </div>
        </div>
      </Router>
    );
  }
}

function Catalogo(props){
  return(
    <div>
    <Jumbo></Jumbo>
    <div className="container table-responsive">
      <table className="table table-borderless mt-3 ml-3 mr-3 mb-3">
        <tbody>
          <tr>
            <h1>Catalogo</h1>
          </tr>
          <tr>
            <td>{window.AppComponent.renderProductos()}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center mt-5">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
  )
}

export default App;
