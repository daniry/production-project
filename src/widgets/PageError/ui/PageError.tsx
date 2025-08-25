import { classNames } from "shared/lib/classNames/classNames";
import styles from "./PageError.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";

interface PageErrorProps {
    className?: string;
}

export const PageError: React.FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(styles.PageError, {}, [className])}>
            <p>{t("proizoshla-nepridvidennaya-oshibka")}</p>
            {/* TODO: кнопка без стилей */}
            <Button onClick={reloadPage}>{t("obnovit-stranicu")} </Button>
        </div>
    );
};
