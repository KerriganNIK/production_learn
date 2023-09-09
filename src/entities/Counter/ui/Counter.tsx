import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from 'entities/Counter/model/slice/counterSlice';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface CounterProps {
    className?: string;
}

export const Counter = ({ className }: CounterProps) => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();

    function increment() {
        dispatch(counterActions.increment());
    }

    function decrement() {
        dispatch(counterActions.decrement());
    }

    return (
        <div>
            <h1>{counterValue}</h1>
            <Button onClick={increment}>{t('increment')}</Button>
            <Button onClick={decrement}>{t('decrement')}</Button>
        </div>
    );
};
