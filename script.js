const menu = document.querySelector(".menu");
const item = document.querySelectorAll(".item");

menu.addEventListener("mouseover", () => {
  menu.style.width = "100%";
  menu.style.justifyContent = "space-around";
  for (let i = 0; i < item.length; i++) {
    item[i].style.transition = "display 6s";
    item[i].style.display = "flex";

    setTimeout(() => {
      item[i].style.opacity = "1";
    }, 1000);
  }


  const first = document.querySelector(".first");
      const second = document.querySelector(".second");
      const third = document.querySelector(".third");
      const linkLogo = document.querySelectorAll(".link-logo");
      const btnLink = document.querySelector(".btn-link");

      btnLink.addEventListener("click", () => {
        if (btnLink.textContent === "Open") {
          btnLink.textContent = "Close";
          btnLink.style.boxShadow = '4px 4px 10px rgb(235, 107, 16), -4px -4px 10px rgb(235, 107, 16)';
          first.style.width = "150px";
          first.style.height = "150px";
          first.style.boxShadow = '4px 4px 10px rgb(235, 107, 16), -4px -4px 10px rgb(235, 107, 16)';
          second.style.width = "230px";
          second.style.height = "230px";
          second.style.boxShadow = '4px 4px 10px rgb(235, 107, 16), -4px -4px 10px rgb(235, 107, 16)';
          third.style.width = "300px";
          third.style.height = "300px";
          third.style.boxShadow = '4px 4px 10px rgb(235, 107, 16), -4px -4px 10px rgb(235, 107, 16)';
          for (let i = 0; i < linkLogo.length; i++) {
            linkLogo[i].style.display = "flex";
          }
        } else if (btnLink.textContent === "Close") {
          btnLink.textContent = "Open";
          btnLink.style.boxShadow = '1px 1px 5px rgb(235, 107, 16), -1px -1px 5px rgb(235, 107, 16)';
          first.style.width = "100px";
          first.style.height = "100px";
          first.style.boxShadow = '1px 1px 5px rgb(235, 107, 16), -1px -1px 5px rgb(235, 107, 16)';
          second.style.width = "120px";
          second.style.height = "120px";
          second.style.boxShadow = '1px 1px 5px rgb(235, 107, 16), -1px -1px 5px rgb(235, 107, 16)';
          third.style.width = "140px";
          third.style.height = "140px";
          third.style.boxShadow = '1px 1px 5px rgb(235, 107, 16), -1px -1px 5px rgb(235, 107, 16)';
          for (let i = 0; i < linkLogo.length; i++) {
            linkLogo[i].style.display = "none";
          }
        }
      });

});

menu.addEventListener("mouseout", () => {
  menu.style.width = "100px";
  menu.style.justifyContent = "center";

  for (let i = 0; i < item.length; i++) {
    item[i].style.display = "none";
    setTimeout(() => {
      item[i].style.opacity = "0";
    }, 1000);
  }
});

// Carrocel

var radius = 180;
var autoRotate = true;
var rotateSpeed = -60;
var imgWidth = 120;
var imgHeight = 170;

var bgMusicURL =
  "https://api.soundcloud.com/tracks/143041228/stream?client_id=587aa2d384f7333a886010d5f52f302a";
var bgMusicControls = true;

setTimeout(init, 1000);

var odrag = document.getElementById("drag-container");
var ospin = document.getElementById("spin-container");
var aImg = ospin.getElementsByTagName("img");
var aVid = ospin.getElementsByTagName("video");
var aEle = [...aImg, ...aVid];

ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

var ground = document.getElementById("ground");
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
  for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.transform =
      "rotateY(" +
      i * (360 / aEle.length) +
      "deg) translateZ(" +
      radius +
      "px)";
    aEle[i].style.transition = "transform 1s";
    aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
  }
}

function applyTranform(obj) {
  if (tY > 180) tY = 180;
  if (tY < 0) tY = 0;

  obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
}

function playSpin(yes) {
  ospin.style.animationPlayState = yes ? "running" : "paused";
}

var sX,
  sY,
  nX,
  nY,
  desX = 0,
  desY = 0,
  tX = 0,
  tY = 10;

if (autoRotate) {
  var animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
  ospin.style.animation = `${animationName} ${Math.abs(
    rotateSpeed
  )}s infinite linear`;
}

document.onpointerdown = function (e) {
  clearInterval(odrag.timer);
  e = e || window.event;
  var sX = e.clientX,
    sY = e.clientY;

  this.onpointermove = function (e) {
    e = e || window.event;
    var nX = e.clientX,
      nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1;
    tY += desY * 0.1;
    applyTranform(odrag);
    sX = nX;
    sY = nY;
  };

  this.onpointerup = function (e) {
    odrag.timer = setInterval(function () {
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(odrag);
      playSpin(false);
      if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
        clearInterval(odrag.timer);
        playSpin(true);
      }
    }, 17);
    this.onpointermove = this.onpointerup = null;
  };

  return false;
};

const cardName = document.querySelector(".card-name");
const cardImg = document.querySelectorAll(".card-img");
const btnGo = document.querySelector(".btn-go");
let btn = document.querySelector(".btn");

for (let i = 0; i < cardImg.length; i++) {
  cardImg[i].addEventListener("mouseover", function () {
    const imgSrc = cardImg[i].getAttribute("src");

    if (imgSrc === "/assets/chair.png") {
      cardName.textContent = "Booking";
    } else if (imgSrc === "/assets/scissor1.png") {
      cardName.textContent = "Hair Cut Style";
    } else if (imgSrc === "/assets/hair-dryer.png") {
      cardName.textContent = "Brush Style";
    } else if (imgSrc === "/assets/beard.png") {
      cardName.textContent = "Man";
    } else if (imgSrc === "/assets/female.png") {
      cardName.textContent = "Woman";
    } else if (imgSrc === "/assets/hair-dye.png") {
      cardName.textContent = "Hair Paint";
    }
  });
}


const curved = document.querySelector(".curved");
const curved1 = document.querySelector(".curved1");

cardName.addEventListener("click", (event) => {
  const boocking = `
    <h1>Booking</h1>
        <div class="info">
          <div class="calendar">
          <label for="date" class="label">Date:</label>
          <input type="date" name="date" id="date" class="input-date inputs" title="Date">
          <label for="time" class="label">Time:</label>
          <input type="time" name="time" id="time" class="input-time inputs" title="time">
          <div class="dropdown">
          <button type="button" class="input-dropdown">Choise</button>
          <div class="dropdown-content">
          <div class="line">
          <input type="checkbox" name="" id="" class="checkbox" title="Hair cut">Hair cut</input>
          </div>
          <div class="line">
          <input type="checkbox" name="" id=""class="checkbox" title="Hairstyle">Hairstyle</input>
          </div>
          <div class="line">
          <input type="checkbox" name="" id=""class="checkbox" title="Beard">Beard</input>
          </div>
           <div class="line">
          <input type="checkbox" name="" id=""class="checkbox" title="Dye hair">Dye hair</input>
          </div>
          </div>
          </div>
          </div>
          <form action="" method="post">
            <label for="name" class="label">Name:</label>
            <input type="text" name="name" id="name" title="Name" class="input-text inputs">
            <label for="email" class="label">Email:</label>
            <input type="email" name="email" id="email" title="Email" class="input-email inputs">
            <label for="commit" class="label">Commit:</label>
            <textarea name="commit" id="" title="Commit" class="textarea inputs"></textarea>
            <button type="submit" title="submit" class="submit">Submit</button>
          </form>
        </div>
        <div class="return">
        <a href="/index.html" title="Back" class="back">
        <img src="/assets/return.png" alt="Back Logo" class="back-img">
        </a>
        </div>
  `;
  const hairCut = `
  <h1>Hair Cut Style</h1>
  <div class="info">
  <table class="GeneratedTable">
    <thead>
      <tr>
        <th>Option</th>
        <th>Woman</th>
        <th>Man</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cut style 1</td>
        <td>£</td>
        <td>£</td>
      </tr>
      <tr>
        <td>Cut style 2</td>
        <td>£</td>
        <td>£</td>
      </tr>
      <tr>
        <td>Cut style 3</td>
        <td>£</td>
        <td>£</td>
      </tr>
       <tr>
        <td>Cut style 4</td>
        <td>£</td>
        <td>£</td>
      </tr>
       <tr>
        <td>Cut style 5</td>
        <td>£</td>
        <td>£</td>
      </tr>
       <tr>
        <td>Cut style 6</td>
        <td>£</td>
        <td>£</td>
      </tr>
    </tbody>
  </table>
  </div>
    <div class="return">
        <a href="/index.html" title="Back" class="back">
        <img src="/assets/return.png" alt="Back Logo" class="back-img">
        </a>
        </div>
  `;
  const bushStyle = `
  <h1>Brush Style</h1>
  <div class="info">
  <table class="GeneratedTable">
    <thead>
      <tr>
        <th>Option</th>
        <th>Woman</th>
        <th>Man</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Bush Style 1</td>
        <td>£</td>
        <td>£</td>
      </tr>
      <tr>
        <td>Bush Style  2</td>
        <td>£</td>
        <td>£</td>
      </tr>
      <tr>
        <td>Bush Style 3</td>
        <td>£</td>
        <td>£</td>
      </tr>
       <tr>
        <td>Bush Style  4</td>
        <td>£</td>
        <td>£</td>
      </tr>
       <tr>
        <td>Bush Style  5</td>
        <td>£</td>
        <td>£</td>
      </tr>
       <tr>
        <td>Bush Style  6</td>
        <td>£</td>
        <td>£</td>
      </tr>
    </tbody>
  </table>
  </div>
    <div class="return">
        <a href="/index.html" title="Back" class="back">
        <img src="/assets/return.png" alt="Back Logo" class="back-img">
        </a>
        </div>
  `;
  const man = `
  <h1>Man</h1>
  <div class="info">
  </div>
   <div class="return">
        <a href="/index.html" title="Back" class="back">
        <img src="/assets/return.png" alt="Back Logo" class="back-img">
        </a>
  </div>
  `;
  const woman = `
  <h1>Woman</h1>
  <div class="info">
  </div>
   <div class="return">
        <a href="/index.html" title="Back" class="back">
        <img src="/assets/return.png" alt="Back Logo" class="back-img">
        </a>
  </div>
  `;
  const hairPaint = `
  <h1>Hair Paint</h1>
  <div class="info">
  <table class="GeneratedTable">
    <thead>
      <tr>
        <th>Option</th>
        <th>Woman</th>
        <th>Man</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Hair Paint 1</td>
        <td>£</td>
        <td>£</td>
      </tr>
      <tr>
        <td>Hair Paint 2</td>
        <td>£</td>
        <td>£</td>
      </tr>
      <tr>
        <td>Hair Paint 3</td>
        <td>£</td>
        <td>£</td>
      </tr>
       <tr>
        <td>Hair Paint 4</td>
        <td>£</td>
        <td>£</td>
      </tr>
       <tr>
        <td>Hair Paint 5</td>
        <td>£</td>
        <td>£</td>
      </tr>
       <tr>
        <td>Hair Paint 6</td>
        <td>£</td>
        <td>£</td>
      </tr>
    </tbody>
  </table>
  </div>
    <div class="return">
        <a href="/index.html" title="Back" class="back">
        <img src="/assets/return.png" alt="Back Logo" class="back-img">
        </a>
        </div>
  `;
  if (cardName.textContent === "Booking") {
    curved.style.display = "none";
    curved1.style.display = "flex";
    curved1.innerHTML = boocking;
    console.log(cardName.textContent);
  } else if (cardName.textContent === "Hair Cut Style") {
    curved.style.display = "none";
    curved1.style.display = "flex";
    curved1.innerHTML = hairCut;
  } else if (cardName.textContent === "Brush Style") {
    curved.style.display = "none";
    curved1.style.display = "flex";
    curved1.innerHTML = bushStyle;
  } else if (cardName.textContent === "Man") {
    curved.style.display = "none";
    curved1.style.display = "flex";
    curved1.innerHTML = man;
  } else if (cardName.textContent === "Woman") {
    curved.style.display = "none";
    curved1.style.display = "flex";
    curved1.innerHTML = woman;
  } else if (cardName.textContent === "Hair Paint") {
    curved.style.display = "none";
    curved1.style.display = "flex";
    curved1.innerHTML = hairPaint;
  } else {
    console.log(cardName.textContent);
  }

  const inputs = document.querySelectorAll(".inputs");

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("click", () => {
      inputs[i].focus();
    });
  }
});

const gallery = document.querySelector(".gallery");
const links = document.querySelector(".link");
const contact = document.querySelector(".contact");
const about = document.querySelector(".about");

gallery.addEventListener("click", () => {
  const gallerySelection = `
  <h1>Gallery</h1>
  <div class='info'>
   <div class="info-gallery">
      <img src="/assets/img.png" alt="img" class="img-gallery" /><img
        src="/assets/img.png"
        alt="img"
        class="img-gallery"
      /><img src="/assets/img.png" alt="img" class="img-gallery" /><img
        src="/assets/img.png"
        alt="img"
        class="img-gallery"
      /><img src="/assets/img.png" alt="img" class="img-gallery" /><img
        src="/assets/img.png"
        alt="img"
        class="img-gallery"
      /><img src="/assets/img.png" alt="img" class="img-gallery" /><img
        src="/assets/img.png"
        alt="img"
        class="img-gallery"
      /><img src="/assets/img.png" alt="img" class="img-gallery" />
      </div>
  </div>
  <div class="return">
        <a href="/index.html" title="Back" class="back">
        <img src="/assets/return.png" alt="Back Logo" class="back-img">
        </a>
        </div>
  `;

  if (gallery.textContent === "Gallery") {
    curved.style.display = "none";
    curved1.style.display = "flex";
    curved1.innerHTML = gallerySelection;
  }
});

links.addEventListener("click", () => {
  const linksSelection = `
       <h1>Links</h1>
  <div class='info'>
  <div class='center'>
    <div class="third">
      <a href=""class="link-logo link3" title="link">
        <img src="/assets/facebook.png" alt="Faceboock" />
      </a>
      <div class="second">
        <a href="mailto:cristiano.franca@hotmail.co.uk?subject=About Website" class="link-logo link2" title="link">
          <img src="/assets/email.png" alt="Email" />
        </a>
        <div class="first">
          <a href="https://web.whatsapp.com/send?/4407927132927" class="link-logo link1" title="link">
            <img src="/assets/whatsapp.png" alt="Whatsaap" />
          </a>
          <div class="open-close">
            <button type="button" class="btn-link">Open</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  <div class="return">
        <a href="/index.html" title="Back" class="back">
        <img src="/assets/return.png" alt="Back Logo" class="back-img">
        </a>
        </div>
  `;
  if (links.textContent === "Links") {
    curved.style.display = "none";
    curved1.style.display = "flex";
    curved1.innerHTML = linksSelection;
  }
});

contact.addEventListener("click", () => {
  const contactSelection = `
  <h1>Contact</h1>
  <div class='info'>
   
  </div>
  <div class="return">
        <a href="/index.html" title="Back" class="back">
        <img src="/assets/return.png" alt="Back Logo" class="back-img">
        </a>
        </div>
  `;

  if (contact.textContent === "Contact") {
    curved.style.display = "none";
    curved1.style.display = "flex";
    curved1.innerHTML = contactSelection;
  }
});

about.addEventListener("click", () => {
  const aboutSelection = `
    <h1>About</h1>
  <div class='info'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis omnis sequi similique consequuntur fugiat aliquid cupiditate sed alias sit perspiciatis ex, perferendis enim atque et. Quod recusandae laboriosam vero. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi magni sapiente repudiandae, pariatur qui nobis officiis quaerat ratione, esse, dolorem illo dolorum eius accusamus? Nam sit quae quo laudantium aliquid. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam accusantium ea sit quam tenetur fuga aspernatur facere illum, minima rerum quia qui accusamus dolore, ut repellat saepe quibusdam totam beatae.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nisi consectetur harum fugit vel tempore incidunt blanditiis sunt nesciunt iusto eaque dolorum, doloremque quod sequi unde laudantium et minus sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus culpa temporibus deserunt dicta repellendus, impedit atque fugit? Atque odio esse iusto soluta cumque, consectetur nostrum maiores deleniti nesciunt. A, incidunt.</p>
  </div>
  <div class="return">
        <a href="/index.html" title="Back" class="back">
        <img src="/assets/return.png" alt="Back Logo" class="back-img">
        </a>
        </div>
  `;

  if (about.textContent === "About") {
    curved.style.display = "none";
    curved1.style.display = "flex";
    curved1.innerHTML = aboutSelection;
  }
});

const flipswitchInner = document.querySelector(".flipswitch-switch");
const footer = document.querySelector("footer");
const textDeveloper = document.querySelector(".text-developer");
const developer = document.querySelector(".developer");
const nav = document.querySelector('.nav');
const logo1 = document.querySelectorAll('.logo1');

flipswitchInner.addEventListener("click", () => {
  if (footer.style.height == '250px') {
    footer.style.transition = 'height 4s';
    footer.style.height = "90px";
    

  } else {
    footer.style.height = "250px";
    footer.style.transition = 'height 4s';
    
  }
});


