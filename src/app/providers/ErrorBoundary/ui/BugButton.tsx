import { Button } from "shared/ui/Button/Button";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Компонент для тестирования ErrorBoundary
export const BugButton: React.FC = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const throwBug = () => setError(true);

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return <Button onClick={throwBug}>{t("throw-error")}</Button>;
};
