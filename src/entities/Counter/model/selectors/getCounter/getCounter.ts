import { StateSchema } from 'app/providers/StoreProvier';

export const getCounter = (state: StateSchema) => state.counter;
