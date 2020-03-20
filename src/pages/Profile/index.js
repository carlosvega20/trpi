import React from 'react';
import { FotoPerfil, GeneralInfo, Layout } from 'components';
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
} from '@ionic/react';
import useStyles from './styles';

const Profile = () => {
  const classes = useStyles();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className={classes.profileItems}>
          <FotoPerfil />
          <div className={classes.tarjeta}>
            <GeneralInfo
              title="Heading"
              body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unc"
              text1="Text 1"
              text2="Text 2"
            />
          </div>
          <Layout />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
