import { IonButton, IonCol, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonLoading, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
// import config from "../FireBaseConfig";
import Firebase from "firebase";
import { Toast } from "../toast";
import { useHistory } from "react-router";
import "../assets/css/apply.css";
import { Razorpay } from "razorpay";

  function loadRazorpay(src:string){
    return new Promise(resolve =>{
      const script = document.createElement('script')
      script.src='https://checkout.razorpay.com/v1/checkout.js'
      document.body.appendChild(script)
      script.onload = () =>{
        resolve(true)
      }
    })
  }
const Apply : React.FC = () => {
  const history = useHistory()
  const[busy,setBusy] = useState(false)
  const[usrname,setName] = useState('');
  const[usremail,setEmail] = useState('');
  const[source,setSource] = useState('');
  const[destination,setDestination] = useState('');
  const[usrcnumber,setNumber] = useState('');
  const[usrgender,setGender] = useState('');
  
  //Json object
  var data =[
      {
          name:usrname,
          email:usremail,
          contact:usrcnumber,
          gender:usrgender,
          source:source,
          destination:destination
      }
  ]
  function ConnectDB(){
    console.log(data);
    writeUserData();
  }  
    function writeUserData() {
      setBusy(true)
      displayRazorpay()
      Firebase.database().ref('/users').child('/').push(data);
      Toast('Application is submitted!',3000)
      history.replace('/dashboard')
      setBusy(false)

    }
    async function displayRazorpay(){
            const res = await loadRazorpay('https://checkout.razorpay.com/v1/checkout.js')
            if(res == null){
              alert('Razorpay SD failed to upload')
              return
            }
            const data = await fetch('http://localhost:1337/razorpay', { method: 'POST' }).then((t) =>	t.json())
            console.log(data)
          var options = {
            "key": "rzp_test_UnT389sYfVBDeg", 
             currency: data.currency,
              amount: data.amount.toString(),
              order_id: data.id,
              name: 'Virtual Bus Pass',
              description: 'Application is Submitted head the QR code page to generate QR code',
			
            "handler": function (response: { razorpay_payment_id: any; razorpay_order_id: any; razorpay_signature: any; }){
                Toast(response.razorpay_payment_id,4000)
                Toast(response.razorpay_order_id,4000)
            },
            "prefill": {
                usrname,
                usremail,
                usrcnumber
            }
        };
        const _window = window as any
        var paymentObject = new _window.Razorpay(options);
        paymentObject.open()
    }
 return(
 <IonPage>
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
          <br/>
        <IonItem>
          <IonInput type="number" placeholder="Enter Contact Number" onIonChange={e => setNumber(e.detail.value!)} clearInput></IonInput>
        </IonItem><br />
        <IonItem>
            <IonLabel>Source:</IonLabel>
            <IonSelect value={source} placeholder="Select One" onIonChange={e => setSource(e.detail.value)} >
              <IonSelectOption value="gnt">Guntur</IonSelectOption>
              <IonSelectOption value="snp">Sattenapalli</IonSelectOption>
              <IonSelectOption value="vij">Vijawada</IonSelectOption>
            </IonSelect>
          </IonItem>
          <br/>
          <IonItem>
            <IonLabel>Destination</IonLabel>
            <IonSelect value={destination} placeholder="Select One" onIonChange={e => setDestination(e.detail.value)} >
              <IonSelectOption value="gnt">Guntur</IonSelectOption>
              <IonSelectOption value="snp">Sattenapalli</IonSelectOption>
              <IonSelectOption value="vij">Vijawada</IonSelectOption>
            </IonSelect>
          </IonItem>
          <br/>
            <IonLoading message="Application is beign submitted" duration={0} isOpen={busy}></IonLoading>
        <IonButton expand="block" shape="round" id="submit-btn" onClick={ConnectDB}>Pay</IonButton>
        <br/>
      </IonContent>
    </IonPage>
  )
};
export default Apply;



function loadScript(arg0: string) {
  throw new Error("Function not implemented.");
}

