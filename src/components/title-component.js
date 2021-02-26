function initTitleComponent(appModule) {
    appModule.component('titleComponent', {
        template: `<h2>{{$ctrl.title || "someting funny"}}</h2>`,
        controller: function ($scope) {
            const $ctrl = this;
        },
        bindings: {
            title: '@'
        }
    });

    return appModule;
}

export default initTitleComponent;