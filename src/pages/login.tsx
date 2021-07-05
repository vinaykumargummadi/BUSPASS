import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonLoading, IonPage, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {  loginUser} from "../FireBaseConfig";
import { setUserState } from "../redux/action";
import { Toast } from "../toast";
const Login : React.FC = () =>{
    const[userpassword,setPassword] = useState('');
    const[username,setUserName] = useState('');
    const[busy,setBusy] = useState<boolean>(false);
    const dispatch =useDispatch()
    const history = useHistory()
    const domain = useSelector((state:any)=> state.user.domain)

    async function login() {
        setBusy(true)
        const res:any = await loginUser(username,userpassword);

        if(res){
            console.log(domain)
            dispatch(setUserState(res.user.email))
            history.replace('/dashboard')
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
                {/* <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
                    <IonSegmentButton value="friends">
                        <IonLabel>Friends</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="enemies">
                        <IonLabel>Enemies</IonLabel>
                    </IonSegmentButton>
                </IonSegment> */}
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
                    <IonButton color="primary" disabled={!username || !userpassword} shape="round" onClick={login}>Login</IonButton>
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
