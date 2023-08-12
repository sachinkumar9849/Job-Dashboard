import { Link } from "react-router-dom";
import img from "../assets/images/notfound.jpg";

const Error = () => {
  return (
    <section>
      <div className="row">
        <div className="col-12">
          <div className="page_notfound-img">
            <img src={img} alt="not found" />
          </div>

          <div className="back_to-homt">
            <Link to="/" className="btn_theme">
              back home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Error;
