import { fireEvent, screen } from '@testing-library/react';
import { componentRender }
    from '@/shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('test render', () => {
        componentRender(<Sidebar />);
        // render(
        //     <I18nextProvider i18n={i18n}>
        //         <Sidebar />
        //     </I18nextProvider>
        // );
        // const SidebarWithTS = withTranslation()(Sidebar);
        // render(<SidebarWithTS />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('test toggle', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.queryByTestId('sidebar')).toHaveClass('collapsed');
    });
});
