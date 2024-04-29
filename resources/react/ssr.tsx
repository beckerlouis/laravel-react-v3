import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { route, type RouteName } from '@vendor/tightenco/ziggy';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import ReactDOMServer from 'react-dom/server';

createServer((page) => createInertiaApp({
  page,
  render: ReactDOMServer.renderToString,
  title: (title) => `${title} - ${import.meta.env.VITE_APP_NAME || 'Laravel'}`,
  resolve: (name) => resolvePageComponent(
    `./Pages/${name}.tsx`,
    import.meta.glob('./Pages/**/*.tsx'),
  ),
  setup: ({ App, props }) => {
    // @ts-ignore
    global.route<RouteName> = (name, params, absolute) => route(name, params, absolute, {
      // @ts-ignore
      ...page.props.ziggy,
      // @ts-ignore
      location: new URL(page.props.ziggy.location),
    });

    return <App {...props} />;
  },
}));
