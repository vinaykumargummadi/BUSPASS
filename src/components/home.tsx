import { IonButton, IonCol, IonContent, IonHeader, IonImg, IonInput, IonItem, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
import '../assets/css/home.css'
const Home : React.FC = () =>{
    return(
        <IonPage>
            
            <IonContent fullscreen className="bg">   
                <IonRow>
                    <IonCol size="12" className="backdrop">
                            <h1 className="main-title">VIRTUAL BUS PASS</h1>
                            <h2 className="sub-title">
                                Get Vitual Bus pass app today 
                            </h2>
                            <p className="desc">
                                Offerring the experince of Virtual BUSS PASS by applying right away from your mobile app.
                            </p>
                    </IonCol>
                    </IonRow>
                <IonRow className="login-wrap">
                    <IonCol size="10">
                        <IonButton color="primary" expand="block" shape="round" routerLink="/login" id="login-btn">Login</IonButton>
                    </IonCol>
                    <IonCol size="10">
                        <IonButton color="primary" expand="block" shape="round" routerLink="/register" id="login-btn">Sign Up</IonButton>
                    </IonCol>
                </IonRow>             
            </IonContent>
        </IonPage>
    )
};
export default Home;
