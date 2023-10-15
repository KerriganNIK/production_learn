import { StateSchema } from 'app/providers/StoreProvier';

export const getLoginState = (state: StateSchema) => state?.loginForm;
