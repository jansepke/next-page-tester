import type { ExtendedOptions, NextCustomAppFile } from '../commonTypes';
import { loadPageIfExists } from '../loadPage';
import { APP_PATH } from '../constants';

export default async function getCustomAppFile({
  options,
}: {
  options: ExtendedOptions;
}): Promise<NextCustomAppFile | undefined> {
  return await loadPageIfExists<NextCustomAppFile>({
    pagesDirectory: options.pagesDirectory,
    pagePath: APP_PATH,
  });
}
