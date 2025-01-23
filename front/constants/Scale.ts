import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const baseWidth = parseInt(process.env.EXPO_PUBLIC_BASE_WIDTH || "320");
const baseHeight = parseInt(process.env.EXPO_PUBLIC_BASE_HEIGHT || "568");

// Escalas
export const scaleWidth = width / baseWidth;
export const scaleHeight = height / baseHeight;
export const scale = Math.max(scaleWidth, scaleHeight);
export const windowWidth = width;
export const windowHeight = height;
