import { fireEvent, render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { I18nextProvider, withTranslation } from "react-i18next";
import i18n from "shared/config/i18n/i18nForTests";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe("Sidebar", () => {
    test("test render", () => {
        renderWithTranslation(<Sidebar />);
        // render(
        //     <I18nextProvider i18n={i18n}>
        //         <Sidebar />
        //     </I18nextProvider>
        // );
        // const SidebarWithTS = withTranslation()(Sidebar);
        // render(<SidebarWithTS />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });
    test("test toggle", () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.queryByTestId("sidebar")).toHaveClass("collapsed");
    });
});
