import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import styles from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(styles.PageError, {}, [className])}>
            <p>{t('proizoshla-nepridvidennaya-oshibka')}</p>
            {/* TODO: кнопка без стилей */}
            <Button onClick={reloadPage}>
                {t('obnovit-stranicu')}
                {' '}
            </Button>
        </div>
    );
};
