import React from "react";
import "./index.css";
import Logo from "../../assets/images/logo6.png";

function div() {
  return (
    <footer>
      <div className="footer">
        <div className="footer_title">
          <div className="tittle_footer px-0">
            <img src={Logo} alt="" width={40} height={40} />
          </div>
          <div className="">Hirea</div>
        </div>
        <div className="footer_main_container row mx-0">
          <div className="desc_footer col col-md-4 px-0">
            <div className="footer_text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo architecto rerum unde vel ipsum numquam esse error
              inventore magni quae incidunt repellat deleniti eum perspiciatis
              nostrum modi, omnis totam veritatis!
            </div>
          </div>
        </div>
        <div className="row my-3 mx-0 col-12">
          <div className="col col-md-10 px-0 col-sm-4">
            <h6>2022 Hirea. All right reserved</h6>
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
  );
}

export default div;
