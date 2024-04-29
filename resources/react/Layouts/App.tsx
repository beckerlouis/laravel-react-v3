import { AppStateProvider } from '@app/components/AppStateProvider';
import { Meta } from '@app/components/Meta';
import { PropsWithChildren } from 'react';

const App = ({ children }: PropsWithChildren) => (
  <>
    <Meta/>
    <AppStateProvider>
      <header></header>
      <main>{children}</main>
    </AppStateProvider>
  </>
);

export { App };
