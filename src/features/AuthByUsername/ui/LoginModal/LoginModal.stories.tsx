import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoginModal } from './LoginModal';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/LoginModal',
    component: LoginModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    isOpen: true,
};
Normal.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd' },
})];
