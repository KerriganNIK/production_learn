import { StateSchema } from 'app/providers/StoreProvier';

export const getUserAuthData = (state: StateSchema) => state.user.authData;
