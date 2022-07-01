import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { cryptoTheme } from 'common/src/theme/crypto';
import { ResetCSS } from 'common/src/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from '../../containers/Crypto/crypto.style';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import NavbarNoHamburger from '../../containers/Crypto/NavbarNoHamburger';
import BannerSectionNoWords from '../../containers/Crypto/BannerSectionNoWords';
import SEO from '../../components/seo';
import store from '../../store';
import AddCoBorrowerComponentRedux from '../../containers/Crypto/BuyComponents/AddCoBorrower'
import Footer from '../../containers/Crypto/Footer';

const AddCoBorrower = () => {
  return (

  );
};

export default AddCoBorrower;
