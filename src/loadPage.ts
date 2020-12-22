import path from 'path';

export function loadPage<FileType>({
  pagesDirectory,
  pagePath,
}: {
  pagesDirectory: string;
  pagePath: string;
}): FileType {
  // @NOTE Here we have to remove pagePath's leading "/"
  return require(path.resolve(pagesDirectory, pagePath.substring(1)));
}

export function loadPageIfExists<FileType>({
  pagesDirectory,
  pagePath,
}: {
  pagesDirectory: string;
  pagePath: string;
}): FileType | undefined {
  try {
    return loadPage({ pagesDirectory, pagePath });
  } catch (e) {
    return undefined;
  }
}
