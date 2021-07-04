import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, scanOutline,  trashOutline, trashSharp, warningOutline, warningSharp, bookOutline, personCircleOutline, refreshOutline } from 'ionicons/icons';
import './Menu.css';
import { useSelector } from 'react-redux';

const Menu: React.FC = () => {
      const username = useSelector((state:any)=> state.user.username)

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>{username}</IonListHeader>
          <IonNote>{username}@vbuss.com</IonNote>
          <IonMenuToggle>
              <IonItem routerLink="Dashboard" lines="none">
                <IonLabel>Dashboard</IonLabel>
              </IonItem>
              <IonItem routerLink="Apply" lines="none">
                <IonLabel>Apply</IonLabel>
              </IonItem>
              <IonItem routerLink="Profile" lines="none">
                <IonLabel>Profile</IonLabel>
              </IonItem>
              <IonItem routerLink="QRcode" lines="none">
                <IonLabel>QR Code</IonLabel>
              </IonItem>
              <IonItem routerLink="logout" lines="none">
                <IonLabel>Log OUT</IonLabel>
              </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
