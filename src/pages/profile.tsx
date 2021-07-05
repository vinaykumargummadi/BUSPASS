import { IonButton, IonContent, IonInput, IonItem, IonLabel, IonLoading, IonPage } from '@ionic/react'
import React, { useState } from 'react'
import Firebase from "firebase";
import '../assets/css/function.css'
import { useSelector } from "react-redux";

const Profile : React.FC = () =>{
    const[busy,setBusy] = useState<boolean>(false);
    const[uname,setName] = useState('username')
    const[uaadhar,setAadhar] = useState('456789')
    const[uemail,setEmail] = useState('username@gmail.com')
    const[ucontact,setcontact] = useState('132456')
    const[ugender,setGender] = useState('M')
    const instancename = useSelector((state:any)=> state.user.username)
    
    function getData(username:any){
        setBusy(true)
        var revealid = document.getElementById('reveal')
        revealid?.setAttribute("style","display:block;")
        var fname: string,faadhar: string,femail:string,fcontact:string,fgender:string,fvalidity:number;
        Firebase.database().ref().child("users").on('value', function (snapshot) {
            snapshot.forEach(function(childSnapshot) {
                fname=childSnapshot.val()[0].name;
                fname=fname.toLowerCase()
                faadhar=childSnapshot.val()[0].aadhar;
                femail=childSnapshot.val()[0].email;
                fcontact=childSnapshot.val()[0].contact;
                fgender=childSnapshot.val()[0].gender;
                fvalidity=childSnapshot.val()[0].validity;
                // console.log(fname+'--'+instancename)
                if(fname == instancename){
                        // console.log(fname+'-'+faadhar+'-'+femail+'-'+fcontact+'-'+fgender+'-'+fvalidity);
                        setName(fname)
                        setAadhar(faadhar)
                        setEmail(femail)
                        setcontact(fcontact)
                        setGender(fgender)
                    }
                });
            });
        setBusy(false)
    }
    return(
        <IonPage>
            <IonContent>
                <h2 className="section-title">Profile</h2>
                <p className="section-subtitle">You can modify your profile details here</p>
                <p className="section-subtitle">Click on Get Data button to retrive your profile</p>
                    
                <IonButton onClick={()=>getData(0)} expand="full" fill="solid" size="default">Get Data</IonButton>
                <IonLoading message="Fetching Profile data" duration={0} isOpen={busy}></IonLoading>

                <div id="reveal">                    
                    <IonItem lines='none'>
                        <IonLabel color="primary">User Name:</IonLabel>
                        <IonInput type="text" id="nameid" readonly value={uname}></IonInput>
                    </IonItem>
                    <IonItem lines='none'>
                        <IonLabel color="primary">User Personal Email:</IonLabel> <br/>
                        <IonInput type="text" id="nameid" readonly value={uemail}></IonInput>
                    </IonItem>
                    <IonItem lines='none'>
                        <IonLabel color="primary">Conntact Info:</IonLabel> <br/>
                        <IonInput type="text" id="nameid" readonly value={ucontact}></IonInput>
                    </IonItem>
                    <IonItem lines='none'>
                        <IonLabel color="primary">Gender</IonLabel>
                        <IonInput type="text" id="nameid" value={ugender}></IonInput>
                    </IonItem>
                </div>
            </IonContent>
        </IonPage>
    )
}
export default Profile;