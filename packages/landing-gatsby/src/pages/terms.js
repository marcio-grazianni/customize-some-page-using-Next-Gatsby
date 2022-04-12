import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { cryptoTheme } from 'common/src/theme/crypto';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle, ContentWrapper } from '../containers/Crypto/crypto.style';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import Navbar from '../containers/Crypto/Navbar';
import BannerSectionNoWords from '../containers/Crypto/BannerSectionNoWords';
import SEO from '../components/seo';
import store from '../store';

import RegistrationForm from '../containers/Crypto/Terms';

const Terms = () => {
  return (
    <ThemeProvider theme={cryptoTheme}>
      <Provider store={store}>
        <Fragment>
          <SEO title="Harris | Simple, Online, Fast" />
          <ResetCSS />
          <GlobalStyle />
          <ContentWrapper>
            <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
              <DrawerProvider>
                <Navbar />
              </DrawerProvider>
            </Sticky>
            <BannerSectionNoWords />

            <p></p>
            <RegistrationForm />
            <p></p>
          </ContentWrapper>
        </Fragment>
      </Provider>
    </ThemeProvider>
  );
};

export default Terms;
