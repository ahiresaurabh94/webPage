import React from "react";
import "./register.css";

const Register = (props) => {
    const data = props.value;

    return (
        <div className="main">  

            <div className="blackBox"></div>
            <div className="r-cancel" onClick={()=>{props.getData(!data)}}>
                <img src="/icons/cancel.png" alt="" />
            </div>
            <div className="box">
                <div className="r-heading">
                    <div className="r-headText">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</div>
                </div>
                <div className="r-create">Create Account</div>
                <div className="r-already">Already have an account? <span style={{ color: "#2F6CE5" }}>Sign In</span></div>
                <aside>
                    <div className="r-sideImage">
                        <img src="/icons/sideImage.png" alt="sideImage" />
                    </div>
                    <div className="r-policy">
                        By signing up, you agree to our Terms & conditions, Privacy policy
                    </div>
                </aside>

                <div className="inp1">
                    <input type="text" placeholder="First Name" id="first" />
                    <input type="text" placeholder="Last Name" id="last" />
                </div>
                <div className="r-email">
                    <input type="text" placeholder="Email" />
                </div>
                <div className="r-password">
                    <input type="password" placeholder="Password" />
                </div>
                <div className="r-confirm">
                    <input type="password" placeholder="Confirm Password" />
                    <img src="/icons/eye.svg" alt="eye" />
                </div>

                <button className="r-button">Create Account</button>

                <div className="signup">
                    <img src="/icons/fb.png" alt="fb" />
                    <div>Sign up with Facebook</div>
                </div>

                <div className="signup signup1">
                    <img src="/icons/google.png" alt="google" />
                    <div>Sign up with Google</div>
                </div>
            </div>
        </div>
    )
}

export default Register;