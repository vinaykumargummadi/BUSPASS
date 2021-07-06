import { IonButton, IonCol, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonLoading, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
import Firebase from "firebase";
import { Toast } from "../toast";
import { useHistory } from "react-router";
import "../assets/css/apply.css";
import { useSelector } from "react-redux";

  function loadRazorpay(_src:string){
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = _src
        script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
	  })
  }
const Apply : React.FC = () => {
  const history = useHistory()
  const[busy,setBusy] = useState(false)
  const[usremail,setEmail] = useState('');
  const[source,setSource] = useState('');
  const[destination,setDestination] = useState('');
  const[usrcnumber,setNumber] = useState('');
  const[usrgender,setGender] = useState('');
  const __DEV__ = document.domain === 'localhost'
  const instancename = useSelector((state:any)=> state.user.username)

  //Json object
  var data =[
      {
          email:usremail,
          contact:usrcnumber,
          gender:usrgender,
          source:source,
          destination:destination
      }
  ]
  function ConnectDB(){
    console.log(data);
    alert(usremail.split('@')[0])
    writeUserData();
  }  
    function writeUserData() {
      setBusy(true)      
      console.log(usrcnumber.length)
      if(source == destination){              
        Toast('Source and Destination must be different')
        setBusy(false)
        return
      }
      else  if(usrcnumber.length<10){
        Toast('Contact number must be 10 digits')
        setBusy(false)
        return
      }
      // else if(usremail.split('@')){
      //   Toast('Contact number must be 10 digits')
      //   setBusy(false)
      //   return
      // }
      else{
        displayRazorpay()
        Firebase.database().ref('/users').child('/').push(data);
        Toast('Application is submitted!',3000)
        history.replace('/dashboard')        
      }
      setBusy(false)

    }

    async function displayRazorpay(){
            const res = await loadRazorpay('https://checkout.razorpay.com/v1/checkout.js')
            if(res == null){
              Toast('Razorpay SDK failed to upload')
              return
            }
            else{
                  console.log(res)
                  console.log('Promise full filled')
                  const data = await fetch('http://localhost:1336/razorpay', { method: 'POST' }).then((t) =>	t.json())
                  console.log('fetching data completed: '+data)
                    var options = {
                        key: __DEV__ ? 'rzp_test_vibACbsiFiAfOm' : 'PRODUCTION_KEY',
                        currency: data.currency,
                        amount: data.amount.toString(),
                        order_id: data.id,
                        name: 'Virtual Bus Pass',
                        description: 'Application is Submitted head the QR code page to generate QR code',
                        "handler": function (response: { razorpay_payment_id: any; razorpay_order_id: any; }){
                            Toast(response.razorpay_payment_id,4000)
                            Toast(response.razorpay_order_id,4000)
                        },
                        "prefill": {
                            instancename,
                            usremail,
                            usrcnumber
                        }
                  };
              const _window = window as any
              var paymentObject = new _window.Razorpay(options);
              paymentObject.open()
            }
    }
 return(
 <IonPage>
      <IonContent fullscreen>
          <h6 className="heading">Apply for the Virtual BUS PASS</h6>
          <p className="subheading">By filling out this form</p>
          <IonItem>
          <IonLabel>Full Name</IonLabel>
          <IonInput value={instancename} readonly>
          </IonInput>
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
        </IonItem> 
        <br />
        <IonItem>
          <IonInput type="number" placeholder="Validity (in days) :  30 (default)" readonly></IonInput>
        </IonItem>
        <br />
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
        <IonButton expand="block" shape="round" id="submit-btn" 
        // disabled={!usrname || !usrcnumber ||!usremail || !usremail || !usrgender || !source || !destination}
         onClick={ConnectDB}>Pay</IonButton>
        <br/>
      </IonContent>
    </IonPage>
  )
};

export default Apply;