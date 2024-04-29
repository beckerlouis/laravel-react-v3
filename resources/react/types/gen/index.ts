export type AppData = {
  seo: SeoPageData | null;
  flash: FlashData;
  ziggy: Array<any>;
};
export type AuthData = {
  user: UserData;
};
export type FlashData = {
  success: string | null;
  error: string | null;
};
export type PageData = {
  seo: SeoPageData | null;
};
export type SeoPageData = {
  title: string;
  description: string;
  keywords: Array<any>;
};
export type UserData = {
  id: number;
  name: string;
  email: string;
  created_at: string | null;
  updated_at: string | null;
  deleted_at: string | null;
};
