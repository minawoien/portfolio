const routes = [
    { path: '/', component: mainC},
    { path: '/about', component: aboutC},
    { path: '/projects', component: projectsC}
    //{ path: '/:pathMatch(.*)', component: errorC}
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: routes
});


let app = Vue.createApp({});
app.use(router);
app.component("main-page", mainC)
app.component("about", aboutC)
app.component("projects", projectsC)
app.mount("#app")