<template>
  <div>
    <div>
      
<blogyazilarinuxt></blogyazilarinuxt>
<altcubuknuxt></altcubuknuxt>
<headernuxt></headernuxt>
<islemrehberinuxt></islemrehberinuxt>
<tutorialnuxt></tutorialnuxt>
<kitaplarkategorinuxt></kitaplarkategorinuxt>
<searchnuxt></searchnuxt>
<slidernuxt></slidernuxt>
<soneklenenlernuxt></soneklenenlernuxt>
<yukariasagibutonnuxt></yukariasagibutonnuxt>


</div>
    
<div>
    
    <button class="button123" @click="signOut" v-if="firebaseUser">Sign out</button>
    <div v-if="firebaseUser">
      
    </div>
    <div v-else>User is signed out</div>
  </div>

    <h1 class="hosgeldin">hosgeldin {{ word }}</h1>
  </div>
</template>

<script setup>
const firebaseUser = useFirebaseUser();

const signOut = async () => {
  await signOutUser();
};



</script>


<style>
.hosgeldin{
  position: absolute;
  top: 0px;
}

</style>


