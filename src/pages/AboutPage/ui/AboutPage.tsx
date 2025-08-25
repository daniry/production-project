import { useTranslation } from "react-i18next";

const AboutPage: React.FC = () => {
    const { t } = useTranslation("about");
    return <div>{t("about-page")}</div>;
};

export default AboutPage;
