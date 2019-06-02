import angular from 'angular';
import initTitleComponent from './components/TitleComponent';

export const APP_MODULE = 'myApp';

const myApp = angular.module(APP_MODULE, []);

initTitleComponent();