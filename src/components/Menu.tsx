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

const Menu: React.FC = () => {
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Alex</IonListHeader>
          <IonNote>Alexcownay@gmail.com</IonNote>
          <IonMenuToggle autoHide={false}>
              <IonItem routerLink="dashboard" lines="none">
                <IonLabel>Dashboard</IonLabel>
              </IonItem>
              <IonItem routerLink="Apply" lines="none">
                <IonLabel>Apply</IonLabel>
              </IonItem>
              {/* <IonItem routerLink="/" lines="none">
                <IonLabel>Logout</IonLabel>
              </IonItem> */}
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
