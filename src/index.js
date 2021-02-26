import angular from 'angular';
import initTitleComponent from './components/title-component';

export const APP_MODULE = 'myApp';
export const appModule = angular.module(APP_MODULE, []);

initTitleComponent(appModule);