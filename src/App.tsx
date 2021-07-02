import { IonApp, IonRouterOutlet, IonSpinner, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';
import Home from './components/home';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile';
import QRcode from './pages/qrcode'
import Logout from './pages/logout'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './assets/css/home.css'
import {getCurrentUser} from './FireBaseConfig'
import { useEffect, useState } from 'react';
import { setUserState } from './redux/action';
import { useDispatch } from 'react-redux';

const RoutingSystem: React.FC = () =>{
  return(
      <IonReactRouter>
          <IonRouterOutlet>            
            <Route path="/" component={Home} exact/>
            <Route path="/login" component={Login} exact/>
            <Route path="/register" component={Register} exact />
            <Route path="/dashboard" component={Dashboard} exact />
            <Route path="/profile" component={Profile} exact />
            <Route path="/QRCode" component={QRcode} exact />
            <Route path="/Logout" component={Logout} exact />
          </IonRouterOutlet>
      </IonReactRouter>
  )
}


const App: React.FC = () => {
  const [busy,setBusy] = useState(true)
  const dispatch = useDispatch()
  useEffect(() =>{
      getCurrentUser().then((user:any) => {
        if(user){
          dispatch(setUserState(user.email))
          window.history.replaceState({},'','/dashboard')   
        }
        else{
          window.history.replaceState({},'','/')   

        }
        setBusy(false)
      }
    )
  }, [] )
  return (
    <IonApp>
      {busy ? <IonSpinner/> : <RoutingSystem/>}
    </IonApp>
  )
}

export default App;

