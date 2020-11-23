
import { StylesProvider } from '@material-ui/styles';
import { MemoryRouter } from 'react-router';
import Container from '@material-ui/core/Container';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const RouterDecorator = storyFn => (
  <MemoryRouter initialEntries={['/']}>
    {storyFn()}
  </MemoryRouter>
);

const StylesDecorator = storyFn => (
  <StylesProvider injectFirst>
    {storyFn()}
  </StylesProvider>
);

const ContainerDecorator = storyFn => (
  <Container maxWidth="sm" disableGutters>
    {storyFn()}
  </Container>
);

export const decorators = [StylesDecorator, RouterDecorator, ContainerDecorator];
