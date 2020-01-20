import React, { Component } from 'react';
import './ProjectDetails.scss';
import img1 from '../../assets/samples/image1.jpeg';

export default class ProjectDetails extends Component {
  render() {
    return (
      <div className="project-details container">
        <section className="details row">
          <img src={img1} alt="" className="col-md-5" />
          <div className="description col-md-7">
            <h3>Details</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo sit
              voluptate distinctio perspiciatis animi eveniet. Vel vitae harum
              voluptate quisquam quia molestiae mollitia aliquid quaerat,
              reprehenderit facilis veritatis quasi. Magnam.
            </p>
          </div>
        </section>
        <section className="container mt-5">
          <h3 className="text-center">Process</h3>
          <div className="carasel">
            <div className="carasel-img"></div>
            <div className="carasel-details container">
              <div className="">
                <h5>Process</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Officiis quas officia saepe aperiam laboriosam omnis excepturi
                  commodi labore maxime ad quisquam impedit eveniet quam velit
                  tenetur distinctio, deleniti, amet blanditiis!
                </p>
              </div>
              <div className="challenges">
                <h4 className="text-center">Challenges and how I approached them. </h4>
                <div className="">
                  <h6>Challenges</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam ducimus aspernatur, magnam labore quis facere
                    blanditiis sed accusantium voluptates, saepe at mollitia aut
                    praesentium ab laudantium iure consectetur id. Numquam?
                  </p>
                </div>
                <div className="">
                  <h6>Approach</h6>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolor explicabo eaque harum ea, expedita officia ducimus
                    voluptatibus. Cupiditate corrupti, dolor facere, ullam
                    reiciendis possimus qui suscipit et odio, quidem animi!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
