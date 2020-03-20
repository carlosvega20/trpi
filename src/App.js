import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { withAuthenticator } from 'aws-amplify-react';
import Amplify from 'aws-amplify';
import { Dashboard, Threads, Profile, SelectEmoji, Details } from 'pages';
import { SideMenu } from 'components';
import { stats, person, listBox } from 'ionicons/icons';
import awsExports from 'aws-exports';
import 'App.css';

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

Amplify.configure(awsExports);

const appPages = [
  {
    title: 'Threads',
    url: '/threads',
    icon: listBox,
  },
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: stats,
  },
  {
    title: 'Profile',
    url: '/profile',
    icon: person,
  },
];

const Routes = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <SideMenu appPages={appPages} />
        <IonRouterOutlet id="main">
          <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/threads" component={Threads} exact />
          <Route path="/profile" component={Profile} exact />
          <Route path="/selectEmoji" component={SelectEmoji} exact />
          <Route path="/details/:id" component={Details} exact />
          <Route exact path="/" render={() => <Redirect to="/threads" />} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default withAuthenticator(Routes, {
  signUpConfig: {
    hiddenDefaults: ['phone_number'],
  },
});
