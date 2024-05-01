import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import '@/bootstrap';
import '@app/app.scss';

createInertiaApp({
  title: (title) => `${title} - ${import.meta.env.VITE_APP_NAME || 'Laravel'}`,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
  setup({ el, App, props }) {
    const root = createRoot(el);

    root.render(<App {...props} />);
  },
  progress: { color: '#4B5563' },
});
