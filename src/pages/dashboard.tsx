import { IonButton, IonContent, IonHeader, IonImg, IonLoading, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, useHistory } from "react-router";
import Apply from "../components/apply";
import Menu from "../components/Menu";
import Profile from "./profile";
import QRcode from './qrcode'
import Logout from './logout'
// import { logoutUser } from "../FireBaseConfig";
import '../assets/css/function.css'
import '../assets/css/home.css'
import Vector from '../assets/images/landing.png'

const Dashboard : React.FC = () => {

    const username = useSelector((state:any)=> state.user.username)
    // const history = useHistory()
    // const[busy,setBusy] = useState(false)
    // async function logout(){
    //     setBusy(true)
    //     await logoutUser()
    //     setBusy(false)
    //     history.replace('/')
    // }

    return(
        <IonPage id="dashboard">
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Virtual BUS Pass</IonTitle>
                </IonToolbar>
            </IonHeader>
        <IonContent className="ion-padding">
            <IonReactRouter>
                <IonSplitPane contentId="main">
                <Menu />
                <IonRouterOutlet id="main">
                    <Route path="/apply" component={Apply} />
                    <Redirect exact from="/" to="/apply" />
                    <Route path="/profile" component={Profile} />
                    <Redirect exact from="/" to="/profile" />   
                    <Route path="/qrcode" component={QRcode} />
                    <Redirect exact from="/" to="/qrcode" />    
                    <Route path="/logout" component={Logout} />
                    <Redirect exact from="/" to="/logout" />   
                </IonRouterOutlet>
                </IonSplitPane>
            </IonReactRouter>

            <p className="username">Welcome &nbsp;<span>{username},</span>                
                </p>
            <img src={Vector} alt="vector" width="440" className="vector-img"></img>
            <div className="wrapper">
                <div className="text-section">
                    <h5 className="dash-title"> <span id="hero-text">Get attached </span><br/> with <br/> <span id="hero-text">
                        Virtual World</span></h5>
                    <div  className="dash-desc">
                        <h6 className="ins-title">Instructions</h6>
                        <ul className="ins-desc">
                            <li>Swipe right to access the menu</li>
                            <li>Head to Apply page to apply the bus pass</li>
                            <li>Head to QR page to Generate the Virtual Pass</li>
                        </ul>
                    </div>
                </div>
                <div className="copy-section">
                    <hr id="hr"/>
                    <p className="c-desc">&nbsp;&nbsp;&#169;&nbsp;&nbsp; 2021 Virtual Pass <br/> Terms of use | Policy | about | Contact</p>
                </div>
            </div>
            {/* <IonLoading message="Logging out.." duration={0} isOpen={busy}></IonLoading> */}
            {/* <IonButton onClick={logout}>Logout</IonButton> */}
        </IonContent>
        </IonPage>
    );
};
export default Dashboard;