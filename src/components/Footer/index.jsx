import React from "react";
import "./index.css";
import Logo from "../../assets/images/hirea white.png";

function div() {
  return (
    <div>
      This footer
      <footer>
        <div className="footer container-fluid">
          <div className="row">
            <div className="tittle_footer col col-md-2 mx-5 mt-5">
              <div className="img">
                <img src={Logo} alt="" width={150} height={150} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="desc_footer col col-md-4 mx-5 ">
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo architecto rerum unde vel ipsum numquam esse error
                inventore magni quae incidunt repellat deleniti eum perspiciatis
                nostrum modi, omnis totam veritatis!
              </h6>
            </div>
          </div>
          <div className="row">
            <div className="col mt-3">
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col col-md-8">
              <h6>2022 Hirea,All right reserved</h6>
            </div>
            <div className="col col-md-2 text-center">
              <h6>Phone</h6>
            </div>
            <div className="col col-md-2 text-center">
              <h6>Email</h6>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default div;
