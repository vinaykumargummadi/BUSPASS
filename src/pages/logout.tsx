import { IonButton, IonContent, IonLoading, IonPage, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, useHistory } from "react-router";
import { logoutUser } from "../FireBaseConfig";
import '../assets/css/function.css'
import { IonReactRouter } from "@ionic/react-router";
import Apply from "../components/apply";
import Menu from "../components/Menu";
import Profile from "./profile";
import QRcode from "./qrcode";

const Dashboard : React.FC = () => {

    const username = useSelector((state:any)=> state.user.username)
    const history = useHistory()
    const[busy,setBusy] = useState(false)
    async function logout(){
        setBusy(true)
        await logoutUser()
        setBusy(false)
        window.location.replace('/')
        // history.replace('/')xx`
    }

    return(
        <IonPage>
        <IonContent className="ion-padding">
            <p> Hello {username},</p>
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
                    {/* <Route path="/logout" component={Logout} />
                    <Redirect exact from="/" to="/logout" />    */}
                </IonRouterOutlet>
                </IonSplitPane>
            </IonReactRouter>
            <IonLoading message="Logging out.." duration={0} isOpen={busy}></IonLoading>
            <IonButton onClick={logout}>Logout</IonButton>
        </IonContent>
        </IonPage>
    );
};
export default Dashboard;