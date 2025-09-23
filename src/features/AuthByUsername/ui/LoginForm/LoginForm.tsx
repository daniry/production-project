import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { loginActions } from '../../model/slice/loginSlice';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value:string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value:string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <Text title={t('authorization-form')} />
            {error && <Text text={t('login-error')} theme={TextTheme.ERROR} />}
            <Input
                autofocus
                type="text"
                className={styles.input}
                placeholder={t('enter-username')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="text"
                className={styles.input}
                placeholder={t('enter-password')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={styles.loginBtn}
                theme={ButtonTheme.OUTLINE}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('login')}
            </Button>
        </div>
    );
});
