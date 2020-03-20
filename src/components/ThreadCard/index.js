import { CircularProgress } from '@material-ui/core';
import React, { useState } from 'react';
import {
  IonItemSliding,
  IonItem,
  IonItemOptions,
  IonItemOption,
  IonIcon,
  IonLabel,
} from '@ionic/react';
import { trash, lock } from 'ionicons/icons';
import * as moment from 'moment';
import { API } from 'aws-amplify';
import { useAsyncFn } from 'react-use';
import { deleteThread, updateThread } from 'graphql/mutations';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../../store';
import './es-my-settings';
import useStyles from './styles';

const ThreadCard = ({ item }) => {
  const moodToEmoji = {
    ANXIETY: '😓',
    HOMESICKNES: '😰',
    LONELINESS: '😅',
    SHAME: '😠',
    FEAR: '😔',
    PANIC: '😞',
    SADNESS: '😒',
    DISAPPOINTMENT: '😪',
    EMPTINESS: '😌',
    FRUSTRATION: '😊',
    HELPLESSNESS: '🙂',
    BEWILDERMENT: '😀',
  };
  const { content, event, updatedAt, id, mood } = item;
  const [thoughts, setThoughts] = useGlobalState('thoughts');
  const [count, setCount] = useState(event);

  // Remove
  const [removeState, removeThought] = useAsyncFn(async () => {
    setThoughts([...thoughts.filter((el) => el.id !== id)]);
    API.graphql({
      query: deleteThread,
      variables: { input: { id } },
    });
  }, []);

  // Update
  const [updateState, updateThought] = useAsyncFn(async () => {
    const newCount = count + 1;
    setCount(newCount);
    const res = await API.graphql({
      query: updateThread,
      variables: { input: { id, event: newCount } },
    });
    setThoughts([
      { ...item, event: res.data.updatedThread.event },
      ...thoughts.filter((el) => el.id !== item.id),
    ]);
  }, [count]);

  moment.locale('es-my-settings');

  const elapsedTime = moment(updatedAt).fromNow();

  const classes = useStyles();
  return (
    <IonItemSliding>
      <IonItem>
        {(removeState.loading || updateState.loading) && (
          <CircularProgress className={classes.loader} />
        )}
        <div className={classes.contenedor}>
          <IonItem onClick={updateThought} className={classes.emoji} lines="none">
            {moodToEmoji[mood]}
            {count}
          </IonItem>
          <div className={classes.info}>
            <Link to={`/details/${id}`} className={classes.link}>
              <IonItem lines="none">
                <IonLabel>
                  <h2>{content}</h2>
                  <p>{elapsedTime}</p>
                </IonLabel>
              </IonItem>
            </Link>
          </div>
        </div>
      </IonItem>
      <IonItemOptions side="end">
        <IonItemOption color="warning">
          <IonIcon slot="icon-only" icon={lock} />
        </IonItemOption>
        <IonItemOption color="danger">
          <IonIcon slot="icon-only" icon={trash} onClick={removeThought} />
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default ThreadCard;
