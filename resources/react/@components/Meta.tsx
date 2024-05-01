import { PageProps } from '@app/types';
import { Head, usePage } from '@inertiajs/react';

const Meta = () => {
  const { seo } = usePage<PageProps>().props;

  return (
    <Head>
      <title>{seo?.title}</title>
      <meta name="description" content={seo?.description} />
      <meta name="keywords" content={seo?.keywords?.map((keyword) => keyword).join(', ')} />
    </Head>
  );
};

export { Meta };
