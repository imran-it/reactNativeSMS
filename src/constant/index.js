import {scale} from 'react-native-size-matters';
import {Platform, StatusBar, Dimensions} from 'react-native';
export const STATUS_BAR_HEIGHT = StatusBar.currentHeight;
export const HAS_NOTCH = StatusBar.currentHeight > 24;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;

//////////////////      COLORS      //////////////////////////
export const DARK = 'rgb(31,31,31)';
export const BLACK = '#1B1B1B';
export const DARK_L = 'rgb(37,37,37)';
export const WHITE = '#FFF';
export const GREEN = '#74CFB4';
export const PINK = 'rgb(249,146,137)';
export const ERROR = 'rgb(245,10,16)';
export const GRAY = 'rgb(151, 151, 164)';
export const YELLOW = 'rgb(193,165,14)';
export const DARK_GRAY = '#4D4D4D';
export const LIGHT_GRAY = '#EBECF2';
export const LIGHT_GRAY_BORDER = '#414249';
export const DISABLED = '#9797A4';
export const TEXT_GRAY = '#9797A4';
export const BORDER_GRAY = 'rgb(65, 66, 73)';
export const MILK = 'rgb(229, 229, 229)';
export const MILK_BORDER = 'rgba(229, 229, 229, .5)';
export const PURPLE = 'rgb(111, 126, 207)';
export const STILETTO = '#9B3A31';

/////////////////       CONFIGURATION       //////////////////
export const ICON_SIZE_XS = scale(12);
export const ICON_SIZE_SM = scale(16);
export const ICON_SIZE_MD = scale(20);
export const ICON_SIZE_LG = scale(24);

export const SIZE_XS = scale(10);
export const SIZE_SM = scale(12);
export const SIZE_MD = scale(16);
export const SIZE_LG = scale(20);
export const SIZE_XL = scale(28);
export const SIZE_XXL = scale(36);
export const BORDER_RADIUS = scale(9);
export const FIELD_HEIGHT = scale(55);
export const BUTTON_HEIGHT = scale(55);
export const BOTTOM_TAB_HEIGHT = scale(55);
export const PADDING_HORIZONTAL = scale(17);
export const HEADER_HEIGHT =
    Platform.OS === 'ios' ? scale(50 + StatusBar.currentHeight) : scale(50);
export const BETWEEN_HEADER_AND_BOTTOM_TAB_HEIGHT =
    SCREEN_HEIGHT - BOTTOM_TAB_HEIGHT - HEADER_HEIGHT - (HAS_NOTCH ? 0 : StatusBar.currentHeight);

/////////////////       FONT       //////////////////

export const MAIN_FONT = Platform.OS === 'android' ? 'Roboto-Regular' : null;
export const MAIN_FONT_BOLD = Platform.OS === 'android' ? 'Roboto-Bold' : null;
export const MAIN_FONT_SEMI_BOLD = Platform.OS === 'android' ? 'Roboto-Medium' : null;
export const MAIN_FONT_ITALIC = Platform.OS === 'android' ? 'Roboto-Italic' : null;
