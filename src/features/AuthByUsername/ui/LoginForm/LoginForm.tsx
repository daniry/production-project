import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <Input
                type="text"
                className={styles.input}
                placeholder={t('enter-username')}
                autofocus
            />
            <Input type="text" className={styles.input} placeholder={t('enter-password')} />
            <Button className={styles.loginBtn}>{t('login')}</Button>
        </div>
    );
};
