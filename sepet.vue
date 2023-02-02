<template>
    <div>
        
   
     
      
     
  
          <headernuxt class="zamazingo"></headernuxt>
          <searchnuxt></searchnuxt> <div class="giris">
          
            <div class="container" id="ornek">
        <div class="row">
            <div v-for="(product, index) in data" :key="'product-' + index" class="col-md-4">
                <div class="card mb-3">
                    <img :src="product.photoURL" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">
                            {{ product.name }}
                        </h5>
                        <p class="card-text">
                            {{ product.description }}
                        </p>
                        <div class="d-grid">
                            <button @click="addToCart(product)" class="btn btn-outline-primary">
                                Sepete Ekle
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <ShoppingCart v-model="shoppingCart"/>
    </div>
    <div class="container mb-3">
   
    <NuxtPage/>
  </div>
      

   
  
      <div class="ornek1">
        
           </div></div>
          <div class="ornek10">
          <altcubuknuxt></altcubuknuxt>
          </div>
          <div class="ornek20">
              <tutorialnuxt></tutorialnuxt>
          </div>
  
          <div class="orneky0"><islemrehberinuxt></islemrehberinuxt></div>
          <the-navbar></the-navbar>
      
    </div>
  </template>
  
  <script setup>
  
  const { data } = await useFetch('/api/products')
  
  </script>

<script>
export default {
    data() {
        return {
            shoppingCart: []
        }
    },
    mounted() {
        this.shoppingCart = JSON.parse(localStorage.getItem('shoppingCart') || "[]")    
    },
    watch: {
        shoppingCart: {
            handler(newValue) {
                localStorage.setItem('shoppingCart', JSON.stringify(newValue));
            }, deep: true
        }
    },
    methods: {
        addToCart(product) {
            let exists = false;
            
            for (const cartItem of this.shoppingCart) {
                if (cartItem.uuid === product.uuid) {
                    cartItem.amount = cartItem.amount + 1;
                    exists = true;
                    break;
                }
            }
            if (!exists) {
                this.shoppingCart.push({
                    ...product,
                    amount: 1,
                })
            }
        },
    }
}
</script>



  
  <style>
  .giris{
  position: absolute;
  top: 240px;
  width: 1200px;
  height: 300px;
  
  }
  
  
  .ornek10{
     position: relative;
     bottom: 880px;
  }
  
  .ornek20{
     position: relative;
     top: 940px;
  }
  
  .orneky0{
      position: relative;
      bottom: 1200px;
      left:40px;
      
  }

  #ornek{
    position: absolute;
    top: -100px;
    
  }


  

  
  </style>