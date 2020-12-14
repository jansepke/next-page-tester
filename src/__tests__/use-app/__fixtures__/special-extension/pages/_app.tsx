import React from 'react';

export default function CustomApp({
  Component,
  pageProps,
}: {
  Component: React.ElementType;
  pageProps?: unknown;
}) {
  return (
    <>
      _app.jsx
      <Component {...pageProps} />;
    </>
  );
}
