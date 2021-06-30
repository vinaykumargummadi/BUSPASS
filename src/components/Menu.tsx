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
              <IonItem routerLink="apply" lines="none">
                <IonLabel>Apply</IonLabel>
              </IonItem>
              <IonItem routerLink="dashboard" lines="none">
                <IonLabel>Dashboard</IonLabel>
              </IonItem>
          </IonMenuToggle>
          {/* {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })} */}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
