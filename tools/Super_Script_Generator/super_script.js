  document.getElementById('text').addEventListener('keyup',()=>{
  x = document.getElementById("text").value;
  x= (x.replace(/a/g,'ᵃ'));
  x= (x.replace(/b/g,'ᵇ'));
  x= (x.replace(/c/g,'ᶜ'));
  x= (x.replace(/d/g,'ᵈ'));
  x= (x.replace(/e/g,'ᵉ'));
  x= (x.replace(/f/g,'ᶠ'));
  x= (x.replace(/g/g,'ᵍ'));
  x= (x.replace(/h/g,'ʰ'));
  x= (x.replace(/i/g,'ⁱ'));
  x= (x.replace(/j/g,'ʲ'));
  x= (x.replace(/k/g,'ᵏ'));
  x= (x.replace(/l/g,'ˡ'));
  x= (x.replace(/m/g,'ᵐ'));
  x= (x.replace(/n/g,'ⁿ'));
  x= (x.replace(/o/g,'ᵒ'));
  x= (x.replace(/p/g,'ᵖ'));
  x= (x.replace(/q/g,'q'));
  x= (x.replace(/r/g,'ʳ'));
  x= (x.replace(/s/g,'ˢ'));
  x= (x.replace(/t/g,'ᵗ'));
  x= (x.replace(/u/g,'ᵘ'));
  x= (x.replace(/v/g,'ᵛ'));
  x= (x.replace(/w/g,'ʷ'));
  x= (x.replace(/x/g,'ˣ'));
  x= (x.replace(/y/g,'ʸ'));
  x= (x.replace(/z/g,'ᶻ'));
  // capital letters
  x= (x.replace(/A/g,'ᴬ'));
  x= (x.replace(/B/g,'ᴮ'));
  x= (x.replace(/C/g,'ᶜ'));
  x= (x.replace(/D/g,'ᴰ'));
  x= (x.replace(/E/g,'ᴱ'));
  x= (x.replace(/F/g,'ᶠ'));
  x= (x.replace(/G/g,'ᴳ'));
  x= (x.replace(/H/g,'ᴴ'));
  x= (x.replace(/I/g,'ᴵ'));
  x= (x.replace(/J/g,'ᴶ'));
  x= (x.replace(/K/g,'ᴷ'));
  x= (x.replace(/L/g,'ᴸ'));
  x= (x.replace(/M/g,'ᴹ'));
  x= (x.replace(/N/g,'ᴺ'));
  x= (x.replace(/O/g,'ᴼ'));
  x= (x.replace(/P/g,'ᴾ'));
  x= (x.replace(/Q/g,'ᵠ'));
  x= (x.replace(/R/g,'ᴿ'));
  x= (x.replace(/S/g,'ˢ'));
  x= (x.replace(/T/g,'ᵀ'));
  x= (x.replace(/U/g,'ᵁ'));
  x= (x.replace(/V/g,'ⱽ'));
  x= (x.replace(/W/g,'ᵂ'));
  x= (x.replace(/X/g,'ˣ'));
  x= (x.replace(/Y/g,'ʸ'));
  x= (x.replace(/Z/g,'ᶻ'));
  
  x= (x.replace(/0/g,'⁰'));
  x= (x.replace(/1/g,'¹'));
  x= (x.replace(/2/g,'²'));
  x= (x.replace(/3/g,'³'));
  x= (x.replace(/4/g,'⁴'));
  x= (x.replace(/5/g,'⁵'));
  x= (x.replace(/6/g,'⁶'));
  x= (x.replace(/7/g,'⁷'));
  x= (x.replace(/8/g,'⁸'));
  x= (x.replace(/9/g,'⁹'));
  x= (x.replace(/[+]/g,'⁺'));
  x= (x.replace(/-/g,'⁻'));
  
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