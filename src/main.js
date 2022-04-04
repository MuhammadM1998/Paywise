import { createApp } from 'vue';
import App from './App.vue';
import './assets/style.css';

const app = createApp(App);
// app.config.compilerOptions.isCustomElement = (tag) => {
//   return tag.startsWith('tilt-');
// };

app.mount('#app');
