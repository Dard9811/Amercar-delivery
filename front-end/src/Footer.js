import React from "react";

class Footer extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="row mt-5 mb-3">
        <div className="col text-center">
          <span id="face">Facebook</span>
        </div>
        <div className="col text-center">
          <span id="insta">Instagram</span>
        </div>
        <div className="col text-center">
          <span id="twit">Twitter</span>
        </div>
      </div>
    );
  }
}

export default Footer