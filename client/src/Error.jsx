import { NavLink } from "react-router-dom";
import "./index.css"

export default function Error(){

    return(
        <>
        <div id="error-page">
            <div className="content">
                <img src="src/assets/6363147.jpg" width="500px" height="500px"alt="Error 404"/>
                  <h2 className="header">Error 404</h2>
              <h4>Sorry! Page not found</h4>
              <p>Oops! It semms like the page you're trying to acess doesn't exist
                if you believe there's an issue,feel free to report it,and we'll look into it.
              </p>
              <div className="btns">
                <NavLink to="/">return home</NavLink>
                <NavLink to="/contact">Report Problem</NavLink>
              </div>
            </div>
        </div>
        </>

    )
}