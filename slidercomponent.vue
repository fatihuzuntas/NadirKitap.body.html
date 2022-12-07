<template>
    <div>
        <div class="sayfa-konum">
                <div class="slider-konum">
                    <div  class="slayt-gosterisi">
<a class="img-bir" href="" title="Görgün Taner Söyleşisi"><img src="../assets/slider-foto/s118.jpg"></a>
<a class="img-iki" href="" title="Kitap Kampanyaları"><img src="../assets/s103.jpg"></a>
<a class="img-uc" href="" title="Psikoloji Kitapları"><img src="../assets/s111.jpg"></a>
<a class="img-dort" href="" title="Biyografi Kitapları"><img src="../assets/s113.jpg"></a>
<a class="img-bes" href="" title="Osmanlı Tarihi Kitapları"><img src="../assets/s115.jpg"></a>
<a class="img-alti" href="" title="Uzay ve Astronomi Kitapları"><img src="../assets/s91.jpg"></a>
<a class="img-yedi" href="" title="Resim Kitapları"><img src="../assets/s96.jpg"></a>
</div>
               </div>
                </div> 
   
                <a class="aradigin-class" href="http://nadirkitap.com">

              <img  src="https://static.nadirkitap.com/img/_16.jpg"></a> 
              <div>
  <a href="" class="blog-buton" ><i ></i><button>&#128362; Blog</button> </a>
  <a href="" class="yardim-buton" ><i ></i><button>&#119946; Yardım</button></a></div>
<div>
  <a href="" class="english-buton" ><i ></i><button>&#127757; English</button></a>
</div>

<div class="sosyalbutonlar">

<a href="http://facebook.com/nadirkitap" target="_blank" class="facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a>
<a href="http://twitter.com/nadirkitap" target="_blank" class="twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a>
</div>


     </div>
</template>
<script>

</script>
<style>
 .sayfa-konum{
  
  width: 700px;
  margin: 0 auto;
}

.slider-konum{
  justify-content: flex-start;
  position: relative;
  top: 155px;
  left: 100px;
  width: 900px;
  height: 400px;
  overflow: hidden;
}

.img-bir{left: 0px;}
.img-iki{left: 700px;}
.img-uc{left: 1400px;}
.img-dort{left: 2100px;}
.img-bes{left: 2800px;}
.img-alti{left: 3500px;}
.img-yedi{left: 4200px;}



 @-webkit-keyframes sliders{
      0% {left:0px;}
      10% {left:0px;}
      20% {left:-700px;}
      30% {left:-700px;}
      40% {left:-1400px;}
      50% {left:-1400px;}
    }
    @-moz-keyframes sliders{
      0% {left:0px;}
      10% {left:0px;}
      20% {left:-700px;}
      30% {left:-700px;}
      40% {left:-1400px;}
      50% {left:-1400px;}
    }
    @-ms-keyframes sliders {
      0% {left:0px;}
      10% {left:0px;}
      20% {left:-700px;}
      30% {left:-700px;}
      40% {left:-1400px;}
      50% {left:-1400px;}
    }
    @keyframes sliders{
      0% {left:0px;}
      10% {left:0px;}
      20% {left:-700px;}
      30% {left:-700px;}
      40% {left:-1400px;}
      50% {left:-1400px;}
    }

.slider-konum > .slayt-gosterisi{
  position: absolute;
  left:0px;
  width: 2800px;
  height: 400px;
  -webkit-animation-duration: 10s;
  -webkit-animation-name: sliders;
  -webkit-animation-iteration-count:infinite;
  -moz-animation-duration: 10s;
  -moz-animation-name: sliders;
  -moz-animation-iteration-count:infinite;
  -ms-animation-duration: 10s;
  -ms-animation-name: sliders;
  -ms-animation-iteration-count:infinite;
  animation-duration: 10s;
  animation-iteration-count:infinite;
}   
.aradigin-class{
  position: absolute;
  top: 645px;
  left: 670px;
}
.blog-buton{
  position: absolute;
  top:165px;
  left: 37%;
}

.yardim-buton{
  position: absolute;
  top:165px;
  left: 40.2%;
  height: 23px;
}

.english-buton{
  position: absolute;
  top:165px;
  left: 72%;
}

.sosyalbutonlar  a  {
  background:#a1a1a1;
	text-decoration: none;
	color: #FFF;
	width: 20px;
	height: 20px;
  left: 1450px;
  top: -275px;
	display: inline-block;
	border-radius: 10px;
	margin-right: 20px;
	font-size: 30px;
	overflow: hidden;
	position: relative;
	line-height: 60px;
	text-align: center;
  }
    
.sosyalbutonlar  a{  
   transition: transform 0.4s linear 0s, 
	 border-top-left-radius 0.1s linear 0s, 
	 border-top-right-radius 0.1s linear 0.1s, 
	 border-bottom-right-radius 0.1s linear 0.2s, 
	 border-bottom-left-radius 0.1s linear 0.3s;
 	
}

.sosyalbutonlar .facebook:hover {
      background-color: #3b5998;
      transform: rotate(360deg);
      border-radius: 50%;	 
}

  .sosyalbutonlar .twitter:hover   {
      background-color: #00aced;
      transform: rotate(360deg);
      border-radius: 50%;	 
}
  


</style>