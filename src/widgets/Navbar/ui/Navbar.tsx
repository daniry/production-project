import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => (
    <div className={classNames(styles.Navbar, {}, [className])}>
        <div className={styles.links} />
    </div>
);
