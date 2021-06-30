import { IonButton, IonCol, IonContent, IonHeader, IonInput, IonItem, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
import '../assets/css/home.css'
const Home : React.FC = () =>{
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className="mytitle">
                        Home PAGE
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>   
                <IonRow>
                    <IonCol size="12">
                        <IonButton color="success" shape="round" routerLink="/login">Login</IonButton>
                    </IonCol>
                    <IonCol size="12">
                        <IonButton color="success" shape="round" routerLink="/register">Sign Up</IonButton>
                    </IonCol>
                </IonRow>             
            </IonContent>
        </IonPage>
    )
};
export default Home;
