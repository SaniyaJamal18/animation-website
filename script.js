//---------- API-----------

  import {createApi} from 'unsplash-js';
  const cardd = document.querySelector('.cardd');

  const main = document.querySelector("#cards-container");
  const unsplash =createApi({
      accessKey:'R7JIQqJv8Edilq_oGb5uRZGVnF6Iw8e7W58d7BCMRSI',
  })
  
  
  unsplash.search.getPhotos({
      pages:1,
      query:' gaming',
      orientation: 'portrait',
  perPage: 3,
  }).then((result)=>{
      if(result.type==='success'){
          const photo=result.response.results
          console.log(photo);
          displayPhoto(photo);
      }
  
  })  
  
  
  // ------------------
  function displayPhoto(photos) {
    const cards = photos.map(photo => {
      
        return `
        <!-- console.log(cards); -->
            <div class="cardd" style="background-image: url(${photo.urls.small});">
                <div class="overlay">
                    <h4>${photo.tags[2].title}</h4>
                    <p>${photo.user.bio}</p>
                </div>
            </div>
        `;
    });
    main.innerHTML += cards.join('');
}
  

var cur= document.querySelector("#cursor")
var blur= document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
cur.style.left = dets.x+"px"
cur.style.top = dets.y+"px"

blur.style.left = dets.x-150+"px"
blur.style.top = dets.y-150+"px"
})



var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
      cur.style.scale =3 
      cur.style.border = "1px solid #fff"
      cur.style.backgroundColor = "transparent"

    })

    elem.addEventListener("mouseleave",function(){
        cur.style.scale = 1 
        cur.style.border = "0px solid #95C11E"
        cur.style.backgroundColor = "transparent"
      })
})



gsap.to("#nav",{
    backgroundColor: "#000",
    height:"70px",
    duration:0.5,
scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
  start:"top -10%",
  end:"top -11%,",
  scrub:2

}
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2


    }

})


gsap.from("#about-us img, #about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
      scrub:3
    }
})

gsap.from(".cardd",{
    y:90,
    opacity:0,
    duration:1,
    stagger:0.2,
    scrollTrigger:{
        trigger:".cardd",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",

   scrub:2
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
     scrub:4
    }
})


gsap.from("#page4 h1",{
    y:50
})