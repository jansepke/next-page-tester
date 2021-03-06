import React, { useContext } from 'react';
import Document, { Html, Head, NextScript } from 'next/document';
import type {
  DocumentProps as NextDocumentProps,
  DocumentType,
} from 'next/dist/next-server/lib/utils';
import { DocumentContext } from 'next/dist/next-server/lib/document-context';
import { AMP_RENDER_TARGET } from 'next/constants';

export type DocumentProps = NextDocumentProps & {
  pageElement: React.ReactNode;
};

// https://github.com/vercel/next.js/blob/v10.0.3/packages/next/pages/_document.tsx#L524
// Default behaviour of Main component is to dangerouslySetInnerHTML with the html
// string rendered above. This works, but will break all client side interactions
// as event handlers are lost in static markup
export const Main = () => {
  const { inAmpMode, docComponentsRendered, pageElement } = useContext(
    DocumentContext
  ) as DocumentProps;

  docComponentsRendered.Main = true;
  // ampMode is not (yet) supported, but code is here to match the upstream (NextJS) implementation
  /* istanbul ignore next */
  if (inAmpMode) return <>{AMP_RENDER_TARGET}</>;
  return <div id="__next">{pageElement}</div>;
};

class DefaultDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default (DefaultDocument as unknown) as DocumentType;
