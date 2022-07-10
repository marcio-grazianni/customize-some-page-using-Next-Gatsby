import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { cryptoTheme } from 'common/src/theme/crypto';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle, ContentWrapper } from '../containers/Crypto/crypto.style';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import Navbar from '../containers/Crypto/Navbar';
import Banner from '../containers/Crypto/BannerSection';
import FaqSection from '../containers/Crypto/FaqSection';

import Footer from '../containers/Crypto/Footer';
import SEO from '../components/seo';
import store from '../store';

const App = () => {
  return (

  );
};

export default App;
