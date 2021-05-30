// ------------------Header nav Starting------------------------
document.getElementById('nav').innerHTML=`<nav>
<div class="logo">ToolXD</div>
        <!--                                      burger menu                               -->
        <input type="checkbox" id="click" />
        <label for="click" class="menu-btn">
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20" rx="8" style="fill: white"></rect>
            <rect
              y="30"
              width="100"
              height="20"
              rx="8"
              style="fill: white"
            ></rect>
            <rect
              y="60"
              width="100"
              height="20"
              rx="8"
              style="fill: white"
            ></rect>
          </svg>
        </label>
        <!--       xxxxxxxxxxxxxxxxxxx          burger menu     xxxxxxxxxxxxxxxxxxxx                 -->
        <ul>
          <li><a href="/index.html">Home</a></li>
          <li><a href="/Pages/Contect-Form.html">Contact</a></li>
          <li><a href="/Pages/Privacy-Policy.html">Privacy Policy</a></li>
          <li><a href="/Pages/cookie-Policy.html">Cookie Policy</a></li>
          <li><a href="/Pages/Terms-Of-Use.html">Terms Of Use</a></li>
        </ul>
      </nav>
<br>
<br>`;
// ------------------Header nav Ending---------------------------
// ------------------Click On Logo To go Home-------------------
document.getElementsByClassName('logo')[0].onclick = function(){
    location.href= '/index.html'
}
// ------------------Click On Logo To go Home-------------------
// -------------------Check Service worker----------------------

// -------------------Check Service worker----------------------
if('serviceWorker' in navigator){
      navigator.serviceWorker.register('/sw.js')
    }    


// ------------------Footer Starting----------------------------
document.getElementById('footer').innerHTML=`
<footer>
  <hr>
  <p>Copyright © 2021 Toolxd.com</p> 
  <hr>
</footer>`;
// ------------------Footer Ending----------------------------