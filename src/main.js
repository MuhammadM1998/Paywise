import { createApp } from 'vue';
import App from './App.vue';
import './assets/style.css';
import BaseDialog from './components/base/BaseDialog.vue';

const app = createApp(App);
app.component('BaseDialog', BaseDialog);

app.mount('#app');
