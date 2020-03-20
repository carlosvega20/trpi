import React from 'react';
import { ThreadCard, NewTought } from 'components';
import { CircularProgress } from '@material-ui/core';
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonList,
} from '@ionic/react';
import { API } from 'aws-amplify';
import { useAsync } from 'react-use';
import { listThreads } from 'graphql/queries';
import { useGlobalState } from '../../store';
import useStyles from './styles';

const Threads = ({ ...props }) => {
  const emoji = '😓';
  const classes = useStyles();
  const { history } = props;
  const [thoughts, setThoughts] = useGlobalState('thoughts');
  const getThoughts = useAsync(async () => {
    const res = await API.graphql({ query: listThreads, variables: { limit: 100 } });
    setThoughts(res.data.listThreads.items);
    return res;
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>My Thoughts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList className={classes.threadsItemsMargin}>
          {getThoughts.loading && <CircularProgress />}
          {getThoughts.error && <div>Error: {getThoughts.error.message}</div>}
          {thoughts &&
            thoughts.map((item) => (
              <ThreadCard key={item.id} item={item} emoji={emoji} history={history} />
            ))}
        </IonList>
        <div className={classes.newTought}>
          <NewTought hist={history} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Threads;
