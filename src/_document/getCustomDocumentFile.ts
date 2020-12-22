import type { ExtendedOptions, NextCustomDocumentFile } from '../commonTypes';
import { loadPageIfExists } from '../loadPage';
import { DOCUMENT_PATH } from '../constants';

export default async function getFile({
  options,
}: {
  options: ExtendedOptions;
}): Promise<NextCustomDocumentFile | undefined> {
  return await loadPageIfExists<NextCustomDocumentFile>({
    pagesDirectory: options.pagesDirectory,
    pagePath: DOCUMENT_PATH,
  });
}
