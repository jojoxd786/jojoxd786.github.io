
  document.getElementById('text').addEventListener('keyup',()=>{
  x = document.getElementById("text").value;
  x= (x.replace(/a/g,'ₐ'));
  x= (x.replace(/b/g,'₆'));
  x= (x.replace(/c/g,'꜀'));
  x= (x.replace(/d/g,'ₔ'));
  x= (x.replace(/e/g,'ₑ'));
  x= (x.replace(/f/g,'բ'));
  x= (x.replace(/g/g,'₉'));
  x= (x.replace(/h/g,'ₕ'));
  x= (x.replace(/i/g,'ᵢ'));
  x= (x.replace(/j/g,'ⱼ'));
  x= (x.replace(/k/g,'ₖ'));
  x= (x.replace(/l/g,'ₗ'));
  x= (x.replace(/m/g,'ₘ'));
  x= (x.replace(/n/g,'ₙ'));
  x= (x.replace(/o/g,'ₒ'));
  x= (x.replace(/p/g,'ₚ'));
  x= (x.replace(/q/g,'ᵩ'));
  x= (x.replace(/r/g,'ᵣ'));
  x= (x.replace(/s/g,'ₛ'));
  x= (x.replace(/t/g,'ₜ'));
  x= (x.replace(/u/g,'ᵤ'));
  x= (x.replace(/v/g,'ᵥ'));
  x= (x.replace(/w/g,'ᵥᵥ'));
  x= (x.replace(/x/g,'ₓ'));
  x= (x.replace(/y/g,'ᵧ'));
  x= (x.replace(/z/g,'₂'));
  // capital letters
  x= (x.replace(/B/g,'ᵦ'));
  x= (x.replace(/F/g,'բ'));
  x= (x.replace(/Q/g,'ᵩ'));
  x= (x.replace(/X/g,'ᵪ'));
  x= (x.replace(/Y/g,'ᵧ'));
  
  x= (x.replace(/0/g,'⁰'));
  x= (x.replace(/1/g,'₁'));
  x= (x.replace(/2/g,'₂'));
  x= (x.replace(/3/g,'₃'));
  x= (x.replace(/4/g,'₄'));
  x= (x.replace(/5/g,'₅'));
  x= (x.replace(/6/g,'₆'));
  x= (x.replace(/7/g,'₇'));
  x= (x.replace(/8/g,'₈'));
  x= (x.replace(/9/g,'₉'));
  x= (x.replace(/[+]/g,'₊'));
  x= (x.replace(/-/g,'₋'));
  
  document.getElementById("super").innerHTML = x;
})

document.querySelector("button").onclick = function(){
  document.getElementById("super").select();
  document.execCommand('copy');
  document.getElementById('btn1').innerHTML = 'Copied!'
  setTimeout(function() {
    document.getElementById('btn1').innerHTML = 'Click Here To Copy!' ;
}, 1000);
}