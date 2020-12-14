import { sleep } from '../../../../__utils__';

export default function ssr_notFound() {
  return `/ssr/not-found`;
}

export async function getServerSideProps(_ctx) {
  await sleep(1);
  return {
    notFound: true,
  };
}
