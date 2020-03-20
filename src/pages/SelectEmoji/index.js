import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Emoji } from 'components';

const emojis = [
  '😓',
  '😰',
  '😅',
  '😠',
  '😔',
  '😞',
  '😒',
  '😪',
  '😌',
  '😊',
  '🙂',
  '😀',
  '😁',
  '🤣',
  '😎',
];

const SelectEmoji = (props) => {
  const { history } = props;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Select an Emoji</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* <IonItem lines="none"> */}
        <div>
          {emojis.map((singleEmoji) => {
            return <Emoji key={singleEmoji} emoji={singleEmoji} history={history} />;
          })}
        </div>
        {/* </IonItem> */}
      </IonContent>
    </IonPage>
  );
};

export default SelectEmoji;
