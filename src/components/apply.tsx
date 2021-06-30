import { IonButton, IonCol, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
import config from "../FireConfig";
import Firebase from "firebase/app";

const Apply : React.FC = () => {
  const[usrname,setName] = useState('');
  const[usremail,setEmail] = useState('');
  const[usrAadhar,setAadhar] = useState('');
  const[usrcnumber,setNumber] = useState('');
  const[usrgender,setGender] = useState('');
  const[usrvalidity,setValidity] = useState('');

  function ConnectDB(){
    console.log(usrname+'\n'+usremail+'\n'+usrgender+'\n'+usrAadhar+'\n'+usrcnumber+'\n'+usrvalidity);
    Firebase.initializeApp(config);
    writeUserData();
  }  
    function writeUserData() {
    throw new Error("Function not implemented.");
    Firebase.database().ref().set(usrname);
}
 return(
 <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Virtual BUS PASS</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <h6 className="heading">Apply for the Virtual BUS PASS</h6>
          <p className="subheading">By filling out this form</p>
          <IonItem>
            <IonInput placeholder="Enter Full Name" onIonChange={e => setName(e.detail.value!)} clearInput></IonInput>
          </IonItem>
          {/* <br/>  */}
          <IonItem>
            <IonInput placeholder="Enter Email Address" onIonChange={e => setEmail(e.detail.value!)} clearInput></IonInput>
          </IonItem>
          <br/>
          <IonItem>
            <IonLabel>Gender</IonLabel>
            <IonSelect value={usrgender} placeholder="Select One" onIonChange={e => setGender(e.detail.value)} >
              <IonSelectOption value="female">Female</IonSelectOption>
              <IonSelectOption value="male">Male</IonSelectOption>
            </IonSelect>
          </IonItem>
          {/* <br/>    */}
          <IonItem>
            <IonLabel>Validity (in days)</IonLabel>
            <IonSelect value={usrvalidity} placeholder="Select One" onIonChange={e => setValidity(e.detail.value)} >
              <IonSelectOption value="30">30</IonSelectOption>
              <IonSelectOption value="60">60</IonSelectOption>
              <IonSelectOption value="90">90</IonSelectOption>
              <IonSelectOption value="120">120</IonSelectOption>
            </IonSelect>
          </IonItem>
          <br/>
        <IonItem>
          <IonInput type="number" placeholder="Enter Contact Number" onIonChange={e => setAadhar(e.detail.value!)} clearInput></IonInput>
        </IonItem><br />
        <IonItem>
          <IonInput type="number" placeholder="Enter Aadhar Number" onIonChange={e => setNumber(e.detail.value!)} clearInput></IonInput>
        </IonItem><br/>
        <IonButton color="success" expand="block" shape="round" onClick={ConnectDB}>Submit</IonButton>
      </IonContent>
    </IonPage>
  )
};
export default Apply;

function setName(arg0: string): void {
    throw new Error("Function not implemented.");
}

function setEmail(arg0: string): void {
    throw new Error("Function not implemented.");
}


