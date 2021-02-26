import angular from 'angular';
import {APP_MODULE} from '../../index';

function TitleComponentController() {
    var ctrl = this;

    ctrl.title = "My Cool Title";
}

export default function initTitleComponent() {
    angular.module(APP_MODULE).component('titleComponent', {
        templateUrl: 'index.html',
        controller: TitleComponentController
    });
}