import React, {useState} from "react";
import styles from '../style/loginPage.module.css';

const items = [
    {
        title : '학생'
    },
    {
        title : '학부모'
    },
    {
        title : '교사'
    },
    

];

function statusClick() {
    const loginButton = document.querySelector('#loginButton');
    const parentButton = document.querySelector('#parentButton');
    const teacherButton = document.querySelector('#teacherButton');


}


function login(){
    console.log("login 함수")
    let username = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    fetch('http://172.16.4.172:407/login_proc', { //서버에 로그인 요청
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            username,
            password
        })
    })
    .then(response => response.json())
    .then(data => {
            console.log(data);
            localStorage.setItem('token',data.accessToken)
            localStorage.setItem('Refresh',data.refreshToken)
    })
}

const LoginPage = () => {
    const [userState, setUserState] = useState('학생');

    const handleLogin = () => {
        login(); // 로그인 함수 호출
    };

    const statusChange = () => {
        statusClick();
    };

    return (
        <div className={styles.loginPage} style = {{ backgroundImage: `url("https://i.ibb.co/y63WZdv/image.jpg")`}}>
            <div className={styles.container} style = {{ backgroundImage: `url("https://i.ibb.co/rwyqKdt/hex.png")`}}>

                <div className={styles.logoContainer}>
                    <div>
                       
                        <img style={{ width : '80px', left : '80px'}} //베네듀 로고
                                src="https://i.ibb.co/kHB3t3s/2024-03-27benedu-logo.png" alt="2024-03-27benedu-logo" border="0" />
                        
                    </div>
                    <div> 
                            <img  style={{ width : '320px', left : '160px' }} //BENEDU 베너
                                    src="https://i.ibb.co/s2qXGYY/image.png"  alt="2024-03-26-145248" border="0" /> 

                    </div>
                </div>
                <div className={styles.functionContainer}>
                    <div className={styles.userStateContainer}>
                        {items.map((item, index) => 
                            <button 
                                key = {index}
                                className={styles.userStateButton} 
                                onClick={statusChange}
                            >
                                {item.title}
                            </button>
                        )}
                    </div>

                    <form className={styles.userFormContainer} name="id_form" method="post" acceptCharset="utf-8">

                        <div style={{ marginBottom: '20px' }}>
                            <fieldset className={styles.userForm}>
                                <input type="text" id="email" className={styles.hintMessage} placeholder="이메일을 입력해주세요" />
                            </fieldset>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <fieldset className={styles.userForm}>
                                <input type="password" id="password" className={styles.hintMessage} placeholder="비밀번호를 입력해 주세요" />
                            </fieldset>
                        </div>

                    </form>


                    <div className={styles.loginButtonContainer}>

                        <div className={styles.buttonLoginContainer}>
                            <button className={styles.loginButton} id="loginButton" name="" onClick={handleLogin}>로그인</button>
                        </div>

                        <div className={styles.buttonFindPWContainer}>
                            <button className={styles.loginButton}>비밀번호 찾기</button>
                        </div>

                    </div>
                    <div style={{ marginTop: '50px' }}>
                        <a className={styles.descriptionMessage}>한국디지털미디어고등학교</a>
                    </div>



                </div>

            </div>
        </div>
    );
};

export default LoginPage;