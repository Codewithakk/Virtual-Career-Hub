import Analytics from "./components/Analytics";
import { NavLink } from "react-router-dom";
//import { useAuth } from "../store/auth";
// import {User} from "../../server/models/user-model";
export default function About()
{
    return(
        <>
       <main>
        <section className="section-hero">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                 //   {
                    //    <p>Welcome
                    //        ,{User ? ` ${User.username}to Placement Cell Portal`:`to our placement cell portal`}{""}
                    //        </p>
                    }
                    <h1>Why choose Us?</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem sit ullam officiis dicta unde sequi labore dolorem, blanditiis illo odit sint pariatur. Minus eum magni aspernatur dignissimos. Ipsa, libero fugit!
                        We are a team of passionate developers who have been working together to create this platform.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia incidunt deserunt atque est enim aperiam officiis corporis ipsam, ea optio deleniti repellat dolor quia molestiae magnam odio reprehenderit, velit facilis.
                        We are a team of passionate developers and designers who have come together to create an

                    </p>
                    <div className="btn-group">
                        <NavLink to="/contact">
                            <button className="btn">Connet Now</button>
                        </NavLink>
                        <button className="btn">Learn More</button>
                    </div>
                </div>
                <div className="image-slider">
                    
                </div>
            </div>
        </section>
       </main>
       <Analytics/>
       </>
    );
    // <img src="" alt="placement Cell And Training" width="400" height="500" />
}