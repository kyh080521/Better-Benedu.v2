import React from "react";
import '../style/Nav.css';

function Nav() {
    let minute = 0;
    let second = 0;
    let score = 0;
    let ranking = 0;

    return (
        <div>
            <div className="navbar">
                <div className="stateContainer">
                    <a className="navbarState"> {minute}분 {second}초</a>
                    <a className="navbarState">포인트:{score}점</a>
                    <a className="navbarState">순위:{ranking}위</a>
                </div>
                <div className="userContainer">
                    <button className="loginButton">
                        로그인
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Nav;
