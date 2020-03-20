import React from 'react';
import { IonButton } from '@ionic/react';
import { API } from 'aws-amplify';
import { useAsyncFn } from 'react-use';
import { createThread } from 'graphql/mutations';
import { useGlobalState } from '../../store';

const Emoji = ({ emoji, history }) => {
  const emojiToMood = {
    '😓': 'ANXIETY',
    '😰': 'HOMESICKNES',
    '😅': 'LONELINESS',
    '😠': 'SHAME',
    '😔': 'FEAR',
    '😞': 'PANIC',
    '😒': 'SADNESS',
    '😪': 'DISAPPOINTMENT',
    '😌': 'EMPTINESS',
    '😊': 'FRUSTRATION',
    '🙂': 'HELPLESSNESS',
    '😀': 'BEWILDERMENT',
    '😁': 'BEWILDERMENT',
    '🤣': 'BEWILDERMENT',
    '😎': 'BEWILDERMENT',
  };
  const [moodContent] = useGlobalState('mood');
  const [thoughts, setThoughts] = useGlobalState('thoughts');

  // Create
  const [, createThought] = useAsyncFn(async () => {
    const newThought = { mood: emojiToMood[emoji], content: moodContent, event: 1 };
    const res = await API.graphql({
      query: createThread,
      variables: { input: { ...newThought } },
    });
    setThoughts([res.data.createThread, ...thoughts]);
    return res;
  }, [moodContent]);

  const saveEmoji = () => {
    createThought();
    history.goBack();
  };

  return (
    <IonButton fill="clear" size="large" onClick={saveEmoji}>
      {emoji}
    </IonButton>
  );
};

export default Emoji;
