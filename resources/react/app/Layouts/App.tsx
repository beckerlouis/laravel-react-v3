import { Meta } from '@components/Meta';
import { PropsWithChildren } from 'react';

const App = ({ children }: PropsWithChildren) => (
  <>
    <Meta/>
    <header></header>
    <main>{children}</main>
  </>
);

export { App };
