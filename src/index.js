const ENV = process.env.NODE_ENV;
if (ENV !== 'production' && ENV !== 'test' && typeof console !== 'undefined' && console.warn && typeof window !== 'undefined') {
  // tslint:disable-next-line:no-console
  console.warn('You are using a whole package of @jdcfe/lrc-m, ' + 'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.');
}
export {default as Switch} from './switch';
export {default as Checkbox} from './checkbox';
export {default as Radio} from './radio';
export {default as Button} from './button';
export {default as Popup} from './popup';
export {default as ActionSheet} from './action-sheet';
export {default as Picker} from './picker';
export {default as ProgressBar} from './progress-bar';
export {default as Icon} from './icon';
export {default as Toast} from './toast';
export {default as Dialog} from './dialog';
export {default as WhiteSpace} from './white-space';
export {default as Upload} from './upload';
export {default as Placeholder} from './placeholder';
export {default as TabBar} from './tab-bar';
export {default as Sticky} from './sticky';
