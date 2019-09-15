import React from "react";

class Footer extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="row mt-5 mb-3">
        <div className="col text-center">
          <a href="http://facebook.com">Facebook</a>
        </div>
        <div className="col text-center">
          <a href="http://instagram.com">Instagram</a>
        </div>
        <div className="col text-center">
          <a href="http://twitter.com">Twitter</a>
        </div>
      </div>
    );
  }
}

export default Footer