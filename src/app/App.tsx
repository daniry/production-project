import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { FC, Suspense } from 'react';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProviders';

export const App: FC = () => {
    const { theme } = useTheme();
    // useEffect(() => {
    //     throw new Error("test");
    // }, []);
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
