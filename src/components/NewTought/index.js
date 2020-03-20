import { IonCard, IonItem, IonIcon, IonInput } from '@ionic/react';
import React, { useState } from 'react';
import { add } from 'ionicons/icons';
import { useGlobalState } from '../../store';

const NewTought = (props) => {
  const [, setMood] = useGlobalState('mood');
  const [thoughtText, setThoughtText] = useState('')

  const { hist } = props;

  const handleKeyDown = (e) => {
    setMood(e.target.value);
    setThoughtText(e.target.value);

    if (e.key === 'Enter') {
      hist.push('/selectEmoji');
      setThoughtText('');
    }
  };

  return (
    <IonCard>
      <IonItem>
        <IonIcon icon={add} slot="start" />
        <IonInput onKeyUp={handleKeyDown} placeholder="Add your thought..." value={thoughtText} />
      </IonItem>
    </IonCard>
  );
};

export default NewTought;
