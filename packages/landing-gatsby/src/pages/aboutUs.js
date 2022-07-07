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
import AboutUsComponent from '../containers/Crypto/AboutUs';
import SEO from '../components/seo';
import store from '../store';
import Button from 'common/src/components/Button';
import Banner from '../containers/Crypto/BannerSection';
import Footer from '../containers/Crypto/Footer';
import CryptoSlides from '../containers/Crypto/CryptoSlides';
import TextCenteredAboutUs from '../containers/Crypto/TextCenteredAboutUs';
import AppVideo from '../containers/Crypto/AboutUsPage/MeetTheFounder';

const AboutUs = () => {
  return (
   
  );
};

export default AboutUs;
