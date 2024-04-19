import React from "react";
import { NavLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";

export default function About() {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <>
           
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
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
                                    <button className="btn">Connect Now</button>
                                </NavLink>
                                <button className="btn">Learn More</button>
                            </div>
                                
                                {/* <animated.div style={props}> */}
                                    <NavLink to="/recruiter" className="recruiter-link">
                                        Recruiter
                                    </NavLink>
                                {/* </animated.div> */}
                        </div>
                        <div className="image-slider">
                            {/* Your image slider content */}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
