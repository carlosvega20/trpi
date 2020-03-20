import { createGlobalState } from 'react-hooks-global-state';

const initialState = { mood: null, thoughts: [], moods: [], thoughtCard: null };
const { GlobalStateProvider, useGlobalState } = createGlobalState(initialState);

export { GlobalStateProvider, useGlobalState };
