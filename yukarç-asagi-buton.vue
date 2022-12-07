<template>
    <div class="button">
        <a  href=""><img style="position:absolute;top:195%;" title="Yukarı Çık" src="https://static.nadirkitap.com/img/icon/yukari.png"><img/></a>
    </div>
</template>
<script setup>

</script>
<style>
 #button {
  display: inline-block;
  background-color: #FF9800;
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 4px;
  margin: 30px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  transition: background-color .3s;
  z-index: 1000;

}
#button:hover {
  cursor: pointer;
  background-color: #333;
}
#button:active {
  background-color: #555;
}  

#button::after {
  content: "\f077";
  font-family: FontAwesome;
  font-weight: normal;
  font-style: normal;
  font-size: 2em;
  line-height: 50px;
  color: #fff;
}


</style>