import { createApp } from "vue";
import App from "./App.vue";
import components from "@/components/Ui";
import router from "@/router/router";
// import VInterection from "./directivs/VInterection";
import directives from "./directivs";


const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

// app.directive("intersection", VInterection);

app.use(router);

app.mount("#app");
