import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLoading, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {  loginUser} from "../FireBaseConfig";
import { Toast } from "../toast";
const Login : React.FC = () =>{
    const[usrpassword,setPassword] = useState('');
    const[username,setUserName] = useState('');
    const[busy,setBusy] = useState<boolean>(false);
    async function login() {
        setBusy(true)
        const res = await loginUser(username,usrpassword);
        if(res){
            Toast('Logged In Successfully!');
        }
        setBusy(false)
    }
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>
                        LOGIN PAGE
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonLoading message="validating with our records.." duration={0} isOpen={busy}></IonLoading>
                <IonItem>
                    <IonInput placeholder="Enter Username" type="email" onIonChange={e => setUserName(e.detail.value!)} clearInput></IonInput>
                </IonItem>
                <br/>
                <IonItem>
                    <IonInput placeholder="Enter Password" type="password" onIonChange={e => setPassword(e.detail.value!)} clearInput></IonInput>
                </IonItem>
                <br/>
                <div className="ion-text-center">
                    <IonButton color="success" shape="round" onClick={login}>Login</IonButton>
                </div>
                <div className="ion-text-center">
                    <p>New Here ? &nbsp;
                        <Link to="/register">Register</Link>
                    </p>
                </div>
            </IonContent>
        </IonPage>
    )
};
export default Login;
