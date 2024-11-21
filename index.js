document.getElementById("arch").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent the default link behavior

  // Hide all content on the page
  document.body.innerHTML = "";

  // Set the background color to black
  document.body.style.backgroundColor = "black";
  document.body.style.overflow = "hidden"; // Prevent scrolling

  // Create a container for the stars
  const starContainer = document.createElement("div");
  starContainer.id = "star-container";
  starContainer.style.position = "absolute";
  starContainer.style.top = "0";
  starContainer.style.left = "0";
  starContainer.style.width = "100vw";
  starContainer.style.height = "100vh";
  starContainer.style.zIndex = "-1";
  document.body.appendChild(starContainer);

  // Generate moving stars
  function createStar() {
    const star = document.createElement("div");
    star.className = "star";
    star.style.position = "absolute";
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.width = "2px";
    star.style.height = "2px";
    star.style.backgroundColor = "white";
    star.style.animation = `move-star ${
      Math.random() * 3 + 2
    }s linear infinite`;

    starContainer.appendChild(star);

    // Remove star after animation
    setTimeout(() => {
      star.remove();
    }, 5000);
  }

  // Add stars at intervals
  setInterval(createStar, 100);

  // Add "Arch is the best." text with typing animation
  const textContainer = document.createElement("div");
  textContainer.style.position = "absolute";
  textContainer.style.top = "50%";
  textContainer.style.left = "50%";
  textContainer.style.transform = "translate(-50%, -50%)";
  textContainer.style.fontSize = "2.5rem";
  textContainer.style.color = "white";
  textContainer.style.fontFamily = "monospace";
  textContainer.style.textAlign = "center";
  document.body.appendChild(textContainer);

  const text = "Arch is the best.";
  let index = 0;

  function typeText() {
    if (index < text.length) {
      textContainer.textContent += text[index];
      index++;
      setTimeout(typeText, 100);
    }
  }

  typeText();
});

// CSS for stars
const style = document.createElement("style");
style.innerHTML = `
    @keyframes move-star {
      from {
        transform: translateY(0);
        opacity: 1;
      }
      to {
        transform: translateY(100vh);
        opacity: 0;
      }
    }
    .star {
      position: absolute;
      border-radius: 50%;
      background-color: white;
      box-shadow: 0 0 5px white;
    }
  `;
document.head.appendChild(style);
