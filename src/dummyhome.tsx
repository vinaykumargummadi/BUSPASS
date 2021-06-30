import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Apply from './components/apply';
import dashboard from './components/dashboard';

const Home: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/apply" component={Apply} />
            <Redirect exact from="/" to="/apply" />
            <Route path="/dashboard" component={dashboard} />
            <Redirect exact from="/" to="/dashboard" />
          </IonRouterOutlet>

        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default Home;
