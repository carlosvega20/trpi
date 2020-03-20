import React, { useState } from 'react';
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonMenuButton,
  IonContent,
  IonItem,
  IonInput,
  IonCard,
} from '@ionic/react';
import { CircularProgress } from '@material-ui/core';
import { API } from 'aws-amplify';
import { useAsyncFn } from 'react-use';
import { updateThread } from 'graphql/mutations';
import { useParams } from 'react-router-dom';
import { useGlobalState } from '../../store';

const Details = () => {
  const { id } = useParams();
  const [thoughts, setThoughts] = useGlobalState('thoughts');
  const [thought, setThought] = useState(thoughts.find((el) => el.id === id));

  const [updatedThought, saveUpdatedThought] = useAsyncFn(async () => {
    const res = await API.graphql({
      query: updateThread,
      variables: {
        input: {
          id,
          content: thought.content,
        },
      },
    });
    setThoughts([{ ...thought }, ...thoughts.filter((el) => el.id !== id)]);
    return res;
  }, [thought]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Edit or comment your Thought</IonTitle>
          <IonButton slot="end" onClick={saveUpdatedThought}>
            Save
            {/* <IonIcon icon={save} size="large" /> */}
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {updatedThought.loading && <CircularProgress />}
        {updatedThought.error && <div>Error: {updatedThought.error.message}</div>}
        <IonCard>
          <IonItem>
            <IonInput
              lines="none"
              onKeyUp={(e) => setThought({ ...thought, content: e.target.value })}
              value={thought.content}
            />
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Details;
