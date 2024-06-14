import styles from "./LoginPage.module.css"
import logo from "./media/item/logo.png"
import fb from "./media/item/fb.png"
import twitter from "./media/item/twitter.png"
import google from "./media/item/google.png"
import backgroundImage from "./media/item/image.jpg";

function LoginPage() {
    return (
       
    <div className={styles.bg1}>

    
        <div className={styles.login}>
            <div className={styles.nav}>
                <img src={logo} className={styles.logo}/>
                <span className={styles.title}>VIDYUT</span>
                <span className={styles.heading}>Login</span>
                <p className={styles.para}>Don&apos;t have an account?<p className={styles.para1}>Get VIDYUT</p></p>
            </div>
            <div className={styles.bigBox}>
            <div className={styles.inputSection}>
                <input type="text" className={styles.isInput1} placeholder="Username"/>
                <input type="password" className={styles.isInput} placeholder="Password"/><br/>
                <div className={styles.log}>
                <select className={styles.smBtn} >
                    <option>Login as User</option>
                    <option>Login as Employee</option>
                </select>
                </div>
            </div>
            <div className={styles.social}>
                <button className={styles.sm}><img className={styles.btnImage} src={fb} /></button>
                <button className={styles.sm}><img className={styles.btnImage} src={google} /></button>
                <button className={styles.sm}><img className={styles.btnImage} src={twitter}/></button>
                </div>
            </div>
        </div>

    
    <div className={styles.container2}></div>
    </div>


    )
}

export default LoginPage;

{/* <div className={styles.bg1}>
    
<div className={styles.login}>
    <div className="nav">
        <img src="./media/item/Screenshot_2024-05-05_210625-removebg-preview (7).png" className="logo"/>
        <span className="title">VIDYUT</span>
        <span className="heading">Login</span>
        <p className="para">Don&apos;t have an account?<p>Get VIDYUT</p></p>
    </div>
    <div className="big-box">
    <div className="input-section">
        <input type="text" className="is-input" placeholder="Username" style={{display : "block"}}/>
        <input type="password" className="is-input" placeholder="Password"/><br/>
        
        
        
        <input type="checkbox" className="is-check" />
        <span className="rm">Remember Me</span><br/>
        <div className="log">
        <select className="sm-btn" >
            <option>Login as User</option>
            <option>Login as Employee</option>
        </select>
        </div>
    </div>
    <div className="social">
        <button className="sm1"><img src="./media/item/fb_icon_325x325.png" height="30"/></button>
        <button className="sm"><img src="./media/item/png-clipart-google-logo-google-search-google-account-redes-search-engine-optimization-text.png" height="30" width="45"/></button>
        <button className="sm"><img src="./media/item/3938028.png" height="30"/></button>
        </div>
    </div>
</div>

<div className="container2"></div>
</div> */}

