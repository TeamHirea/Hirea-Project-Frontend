import React from "react";
import "./index.css";
import Logo from "../../assets/images/hirea white.png";

function div() {
  return (
    <div>
      This footer
      <footer>
        <div className="footer container-fluid">
          <div className="row col-12">
            <div className="tittle_footer col col-md-2 ">
              <div className="img">
                <img src={Logo} alt="" width={50} height={50} />
              </div>
            </div>
          </div>
          <div className="footer_main_container row col-12">
            <div className="desc_footer col col-md-4 px-0">
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo architecto rerum unde vel ipsum numquam esse error
                inventore magni quae incidunt repellat deleniti eum perspiciatis
                nostrum modi, omnis totam veritatis!
              </h6>
            </div>
          </div>
          <div className="row my-3 col-12">
            <div className="col col-md-10 mx-0 px-0 col-sm-4">
              <h6>2022 Hirea, All right reserved</h6>
            </div>
            <div className="col col-md-1 col-sm-4 px-0 d-flex justify-content-end">
              <h6>Phone</h6>
            </div>
            <div className="col col-md-1 col-sm-4 px-0 d-flex justify-content-end">
              <h6>Email</h6>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default div;
