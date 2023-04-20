import { viewportModes } from '../settings';
import getBrowserWidth from './getBrowserWidth';

const getViewportMode = () => {
  const width = getBrowserWidth();

  if (width >= viewportModes.desktop.minWidth) {
    return viewportModes.desktop;
  } else if (width >= viewportModes.tablet.minWidth) {
    return viewportModes.tablet;
  }
  return viewportModes.mobile;
};

export default getViewportMode;
