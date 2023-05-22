/* eslint-disable */
import { lighten } from 'polished'
import { DefaultTheme } from 'styled-components'

const DarkTheme: DefaultTheme = {
  // USE THESE \\
  whiteFade100: 'rgba(255, 255, 255, 0.1)',
  whiteFade200: 'rgba(255, 255, 255, 0.2)',
  whiteFade300: 'rgba(255, 255, 255, 0.3)',
  whiteFade400: 'rgba(255, 255, 255, 0.4)',
  whiteFade600: 'rgba(255, 255, 255, 0.6)',
  whiteFade700: 'rgba(255, 255, 255, 0.7)',
  whiteFade800: 'rgba(255, 255, 255, 0.8)',
  whiteFade900: 'rgba(255, 255, 255, 0.9)',
  greyFade000: 'rgba(255, 255, 255, 0.02)',
  greyFade100: 'rgba(255, 255, 255, 0.1)',
  greyFade200: 'rgba(255, 255, 255, 0.2)',
  greyFade300: 'rgba(255, 255, 255, 0.3)',
  greyFade400: 'rgba(80, 89, 107, 0.4)',
  greyFade600: 'rgba(3, 17, 47, 0.6)',
  greyFade800: 'rgba(18, 29, 51, 0.8)',
  grey000: '#50596B',
  grey100: '#50596B',
  grey200: '#B1B8C7',
  grey300: '#B1B8C7',
  grey400: '#98A1B2',
  grey500: '#828B9E',
  grey600: '#677185',
  grey700: lighten(0.1, '#50596B'),
  grey800: lighten(0.1, '#B1B8C7'),
  grey900: lighten(0.15, '#121D33'),
  blue000: '#ECF5FE',
  blue100: '#D8EBFD',
  blue200: '#BBDBFC',
  blue300: '#85B5F8',
  blue400: '#619FF7',
  blue500: '#3D89F5',
  blue600: '#0C6CF2',
  blue700: '#1656B9',
  blue800: '#144699',
  blue900: '#0D3578',
  green000: '#E6FAEC',
  green100: '#D1F0DB',
  green200: '#AEE6CA',
  green300: '#8BDCB3',
  green400: '#17CE73',
  green500: '#00B26B',
  green600: '#00994C',
  green700: '#006633',
  green800: '#004C26',
  green900: '#003319',
  orange000: '#FFF2E5',
  orange100: '#FAE4CD',
  orange200: '#FFD6AD',
  orange300: '#FFC994',
  orange400: '#FFB266',
  orange500: '#F5A250',
  orange600: '#F28B24',
  orange700: '#D96716',
  orange800: '#B24400',
  orange900: '#8C2F00',
  red000: '#FFECEB',
  red100: '#FFD9D6',
  red200: '#FFC3BF',
  red300: '#F6A7A1',
  red400: '#FF3344',
  red500: '#EA1F30',
  red600: '#CF1726',
  red700: '#A50D0D',
  red800: '#8D0B0B',
  red900: '#790606',
  purple000: '#EFECFE',
  purple100: '#DED8FD',
  purple200: '#C6BBFC',
  purple300: '#ADA6FF',
  purple400: '#9080FF',
  purple500: '#7349F2',
  purple600: '#5322E5',
  purple700: '#451DBF',
  purple800: '#371799',
  purple900: '#250B73',
  teal000: '#E6F8FA',
  teal100: '#D1EDF0',
  teal200: '#AEE1E6',
  teal300: '#6CD0D9',
  teal400: '#00B6C7',
  teal500: '#12A5B2',
  teal600: '#0E828C',
  teal700: '#055E66',
  teal800: '#08474C',
  teal900: '#052F33',
  // COINS
  AAVE: '#2EBAC6',
  ALGO: '#000000',
  BAT: '#FF4724',
  BCH: '#8DC351',
  BTC: '#FF9B22',
  CLOUT: '#000000',
  COMP: '#00D395',
  DAI: '#F5AC37',
  DGLD: '#FFE738',
  DOGE: '#C2A633',
  DOT: '#E6007A',
  EFI: '#496DDB',
  ENJ: '#624DBF',
  EOS: '#000000',
  ETC: '#33FF99',
  ETH: '#473BCB',
  LINK: '#2A5ADA',
  LTC: '#BFBBBB',
  MOB: '#243855',
  NEAR: '#000000',
  OGN: '#1A82FF',
  PAX: '#00522C',
  SNX: '#00D1FF',
  STX: '#211F6D',
  SUSHI: '#FA52A0',
  TBTC: '#000000',
  THETA: '#2AB8E6',
  UNI: '#FF007A',
  USDC: '#2775CA',
  USDT: '#26A17B',
  WBTC: '#FF9B22',
  WDGLD: '#FFE738',
  XLM: '#000000',
  XTZ: '#2C7DF7',
  YFI: '#0074FA',
  ZEN: '#041742',
  ZRX: '#000000',
  // FIAT
  USD: '#00B26B',
  EUR: '#00B26B',
  GBP: '#00B26B',
  RUB: '#00B26B',
  TRY: '#00B26B',
  // OLD - AVOID USE \\
  // Brand
  'brand-yellow': '#665227',
  'brand-yellow-lighter': '#7F735A',
  'logo-primary': '#153A62',
  'logo-secondary': '#799EB2',
  'logo-tertiary': '#3558A8',
  'logo-quaternary': '#B2D5E5',
  'logo-quinary': '#10ADE4',
  // Exchange
  exchangeNight: '#0A0D10',
  exchangeTurquoise: '#42F1B8',
  // Action
  sent: '#D93B30',
  received: '#00994C',
  transferred: '#3D89F5',
  // State
  error: '#D93B30',
  warn: '#7F4F48',
  success: '#00422C',
  // Marketing
  'marketing-primary': '#3558A8',
  'marketing-secondary': '#153A62',
  // Whites
  white: '#1c1c1c',
  silver: '#C2C9D6',
  gold: '#B3CCE5',
  diamond: '#B3CCE5',
  alwaysWhite: '#FFFFFF',
  // Blacks
  black: lighten(0.1, '#B1B8C7'),
  textBlack: '#9c9c9c',
  // Blues
  purple: '#4C18BA',
  // Service Announcements
  info: '#2C5687'
}

export default DarkTheme
