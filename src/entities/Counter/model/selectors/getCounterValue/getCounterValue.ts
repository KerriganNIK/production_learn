import { createSelector } from 'reselect';
import { getCounter } from 'entities/Counter/model/selectors/getCounter/getCounter';
import { CounterSchema } from 'entities/Counter';

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
);
