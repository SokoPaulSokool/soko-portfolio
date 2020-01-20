import React, { Component } from 'react';
// import { useHistory } from "react-router-dom";
import './WorkDone.scss';
import img1 from '../../../assets/samples/image1.jpeg'
import img2 from '../../../assets/samples/image2.jpeg'
import img3 from '../../../assets/samples/image3.jpeg'
import img4 from '../../../assets/samples/image4.jpeg'
import img5 from '../../../assets/samples/image6.jpeg'
import img6 from '../../../assets/samples/image7.jpeg'



export  function WorkItem({data}) {
  return (
   <div className="work-item ">
      <img src={data} alt=""/>
      <div className="buttons">
      <button className="mybtn-site mybtn">Visit Site</button>
      <button className="mybtn-details mybtn">View Details</button>
        <div className="cover"></div>
      </div>
    </div>
  )
}


export default class WorkDone extends Component {
  constructor(props) {
    super(props);
    this.state = { work: [img1, img2, img3, img4, img5, img6, img4, img1, img5] };
  }

  handleWorkClick = e => { 
    this.props.history.push("/process");
  };

  render() {
    return (
      <div className="work-done container">
        <div className="row text-center mb-5">
          <h2 className="col-12">Work Done</h2>
        </div>
        <div className="row items">
          {this.state.work.map(k => {
            return (
              <div key={k+"s"+Math.random()} onClick={this.handleWorkClick} className="col-md-4 col-12">
                <WorkItem  data={k}/>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
