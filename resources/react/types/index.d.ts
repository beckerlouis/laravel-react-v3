import { AppData } from '@app/types/gen';

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & AppData;
