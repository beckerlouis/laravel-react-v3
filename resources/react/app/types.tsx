import { AppData } from '@gen/models';

type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & AppData;

export { type PageProps };
