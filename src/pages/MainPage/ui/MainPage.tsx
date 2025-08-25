import { BugButton } from "app/providers/ErrorBoundary";
import { useTranslation } from "react-i18next";

const MainPage: React.FC = () => {
    const { t } = useTranslation("main");
    return <div>{t("main-page")}</div>;
};

export default MainPage;
