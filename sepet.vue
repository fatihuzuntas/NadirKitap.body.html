<template>
    <div>
        
    <h1 style="position:absolute; top:300px;left:600px;font-size:30px;">Herhangi bir ürün yok</h1>
     
      
     
  
          <headernuxt class="zamazingo"></headernuxt>
          <searchnuxt></searchnuxt> <div class="giris">
            <div class="container">
        <div class="row">
            <div v-for="(product, index) in products" 
                 :key="'product-' + index" class="col-md-4">
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
                            <button @click="addToCart(product)" 
                                    class="btn btn-outline-primary">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Add the shopping cart here! 👀✌️ -->
        <ShoppingCart v-model="shoppingCart"/>

    </div>
  
      <div class="container">
        
           </div></div>
          <div class="ornek10">
          <altcubuknuxt></altcubuknuxt>
          </div>
          <div class="ornek20">
              <tutorialnuxt></tutorialnuxt>
          </div>
  
          <div class="orneky0"><islemrehberinuxt></islemrehberinuxt></div>
  
      
    </div>
  </template>
  
  <script>
  import ShoppingCart from '../components/ShoppingCart.vue'
  export default{
  components: {  ShoppingCart },
    data(){
       return{

        products: [
                {
                    uuid: '5b9ed8b5-201e-4297-babb-29a566952e91',
                    name: 'Camera model 1', 
                    description: 'Lorem ipsum dolor sit amet.', 
                    price: 950,
                    photoURL: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                },
                { 
                    uuid: '973b3d42-e039-428a-b2ad-e6444b5895f4',
                    name: 'Camera model 2', 
                    description: 'Lorem ipsum dolor sit amet.', 
                    price: 950,
                    photoURL: 'https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
                },
                {
                    uuid: '33d3332e-42ac-4692-8523-ae76c3d8a773',
                    name: 'Camera model 3', 
                    description: 'Lorem ipsum dolor sit amet.', 
                    price: 950,
                    photoURL: 'https://images.pexels.com/photos/249597/pexels-photo-249597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                },
                { 
                    uuid: 'c70080cd-330f-4398-b169-03f057582e2a',
                    name: 'Camera model 4', 
                    description: 'Lorem ipsum dolor sit amet.', 
                    price: 950,
                    photoURL: 'https://images.pexels.com/photos/1091294/pexels-photo-1091294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                }
            ]
            


    }
    
    
  },
  methods: {
    addToCart(product) {
        let exists = false
            
        for (const cartItem of this.shoppingCart) {
            if (cartItem.uuid === product.uuid) {
                cartItem.amount = cartItem.amount + 1
                exists = true
                break
            }
        }
        if (!exists) {
            this.shoppingCart.push({
                ...product,
               amount: 1,
            })
        }
    },
},
mounted() {
    /// Retrieves cart from local storage when user first loads

    this.shoppingCart = JSON.parse(
        localStorage.getItem('shoppingCart') || "[]")

},
watch: {
    shoppingCart: {
        handler(newValue) {
            /// Updates the item in local storage

            localStorage.setItem(
                'shoppingCart', JSON.stringify(newValue));

        }, deep: true
    }
},



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
     bottom: 1150px;
  }
  
  .ornek20{
     position: relative;
     top: 720px;
  }
  
  .orneky0{
      position: relative;
      bottom: 1200px;
      left:40px;
      
  }

  .container{
    position: absolute;
    font-size: 300px;
  }
  
  
  </style>