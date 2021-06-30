import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLoading, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Toast } from "../toast";
import { addUser } from "../FireBaseConfig";

const Register : React.FC = () =>{
    const[password,setPassword] = useState('');
    const[username,setUsername] = useState('');
    const[usrCpassword,setCPassword] = useState('');
    const[busy,setBusy] = useState<boolean>(false);

    async function registerUser(){
        setBusy(true)
        if(usrCpassword !== password){
            Toast("Password do not match")
        }
        if(username.trim() === '' || password === '' ){
            Toast("Both Username and Password are required")
        }
        const res = await addUser(username,password);
        if(res){
            Toast('You have registred successfully!',3000)
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
                        Register Page
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonLoading message="Regitration is under progress!" duration={0} isOpen={busy}></IonLoading>
                <br/>
                <IonItem>
                    <IonInput placeholder="Enter Username" type="email" onIonChange={e => setUsername(e.detail.value!)} clearInput></IonInput>
                </IonItem>
                <br/>
                <IonItem>
                    <IonInput placeholder="Enter Password" type="password" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
                </IonItem>
                <br/>
                <IonItem>
                    <IonInput placeholder="Confirm Password" type="password" onIonChange={e => setCPassword(e.detail.value!)}></IonInput>
                </IonItem>
                <br/>
                
                <div className="ion-text-center">
                    <IonButton color="success" shape="round" onClick={registerUser}>Register</IonButton>
                </div>
                <div className="ion-text-center">
                    <p>Already a User ? &nbsp;
                        <Link to="/login">Login</Link>
                    </p>
                </div>
            </IonContent>
        </IonPage>
    )
};
export default Register;
