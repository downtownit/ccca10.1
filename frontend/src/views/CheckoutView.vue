<script setup lang="ts">
  import { ref, onMounted, Ref, inject} from 'vue';
  import Order from '../entities/Order';
  import Product from '../entities/Product';
  import CheckoutGateway from '../gateways/CheckoutGateway';

  const products: Ref<Product[]> = ref([]);
  const order: Ref<Order> = ref(new Order("407.302.170-27"));
  const output: any = ref({});
    
  function formatMoney (amount: number) {
     return new Intl.NumberFormat("en-us", {currency: "USD", style: "currency" }).format(amount);
  }

  const checkoutGateway = inject("checkoutGateway") as CheckoutGateway;

  async function checkout(order: Order) {
    output.value = await checkoutGateway.checkout(order);
  }

  onMounted(async () => {
    products.value = await checkoutGateway.getProducts();
  });

</script>

<template>
  <div class="container">
    <h1><div class="title-name">Checkout in processing!</div></h1>
    <h1></h1>
    <div class="product" v-for="product in products">
        <div class="product-description">{{ product.description }}</div>
        <div class="product-price">{{ product.getFormattedPrice() }}</div>
        <button class="product-add" @click="$event => order.addItem(product)">Add</button>
    </div>
    <div>
        <div class="total">{{ order.total }}</div>
        <div class="order-item" v-for="item in order.items">
              {{ item.idProduct }} {{ item.getQuantity() }}
        </div>
        <button class="checkout" @click=" checkout(order)">Checkout!</button>
        <p><div class="output-total">{{ output.total }}</div></p>
        <p><div class="output-freight">{{ output.freight }}</div></p>
    </div>     
  </div>
</template>

<style scoped>
</style>