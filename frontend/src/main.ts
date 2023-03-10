import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AxiosAdapter from './infra/http/AxiosAdapter';
import CheckoutGatewayHttp from './gateways/CheckoutGatwayHttp';
import FetchAdapter from './infra/http/FetchAdapter';

const app = createApp(App)
// const httpClient = new AxiosAdapter();  { ex. p/ desligar o AXIOS e usar o FetchAdapter e tudo funcionou!}
const httpClient = new FetchAdapter();
const checkoutGateway = new CheckoutGatewayHttp(httpClient, "http://localhost:3000");
app.provide("checkoutGateway", checkoutGateway)
app.mount('#app')
