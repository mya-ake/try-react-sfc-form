import React from 'react';
import { AppProps } from 'next/app';
import '~/css/tailwind.css';

const App: React.FC<AppProps> = (props) => {
  return <props.Component {...props.pageProps}></props.Component>;
};

export default App;
