import { IonButton, IonCol, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonLoading, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
// import config from "../FireBaseConfig";
import Firebase from "firebase";
import { Toast } from "../toast";
import { useHistory } from "react-router";

const Apply : React.FC = () => {
  const history = useHistory()
    const[busy,setBusy] = useState(false)
  const[usrname,setName] = useState('');
  const[usremail,setEmail] = useState('');
  const[usrAadhar,setAadhar] = useState('');
  const[usrcnumber,setNumber] = useState('');
  const[usrgender,setGender] = useState('');
  const[usrvalidity,setValidity] = useState('');
  
  //Json object
  var data =[
      {
          name:usrname,
          email:usremail,
          aadhar:usrAadhar,
          contact:usrcnumber,
          gender:usrgender,
          validity:usrvalidity
      }
  ]
  function ConnectDB(){
    console.log(data);
    writeUserData();
  }  
    function writeUserData() {
      setBusy(true)
      Firebase.database().ref('/users').child('/').push(data);
      Toast('Application is submitted!',3000)
      history.replace('/dashboard')
      setBusy(false)

    }
 return(
 <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Virtual BUS PASS</IonTitle>
        </IonToolbar>
      </IonHeader> */}
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
            <IonLoading message="Logging out.." duration={0} isOpen={busy}></IonLoading>
        <IonButton color="success" expand="block" shape="round" onClick={ConnectDB}>Submit</IonButton>
      </IonContent>
    </IonPage>
  )
};
export default Apply;



