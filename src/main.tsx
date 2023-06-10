import React from 'react';
import ReactDOM from 'react-dom';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { Route, Redirect } from 'react-router';

import { home, briefcase, settings } from 'ionicons/icons';

import HomePage from './pages/HomePage/HomePage';
import Internships from './pages/InternPage/InternPage';
import Jobs from './pages/JobsPage/JobsPage';
import Settings from './pages/SettingsPage/SettingsPage';

const App: React.FC = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/home" />
          <Route path="/home" component={HomePage} exact= {true}  />
          <Route path="/internships" component={Internships} exact= {true}  />
          <Route path="/jobs" component={Jobs} exact= {true}  />
          <Route path="/settings" component={Settings} exact = {true} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="internships" href="/internships">
            <IonIcon icon={briefcase} />
            <IonLabel>Internships</IonLabel>
          </IonTabButton>

          <IonTabButton tab="jobs" href="/jobs">
            <IonIcon icon={briefcase} />
            <IonLabel>Jobs</IonLabel>
          </IonTabButton>

          <IonTabButton tab="settings" href="/settings">
            <IonIcon icon={settings} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
}

export default App;
