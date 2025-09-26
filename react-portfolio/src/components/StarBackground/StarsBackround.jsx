import { useEffect } from "react";

export default function BackgroundStars() {
  useEffect(() => {
    let stars = [];
    let mouseX = 0;
    let mouseY = 0;
    let canvas, ctx;

    function setupCanvas() {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function getDistance(star1, star2) {
      const dx = star1.x - star2.x;
      const dy = star1.y - star2.y;
      return Math.sqrt(dx * dx + dy * dy);
    }

    function checkCollisions(newStar, existingStars) {
      for (let star of existingStars) {
        if (getDistance(newStar, star) < 25) return true;
      }
      return false;
    }

    function hasNearbyStarsWithinRange(newStar, existingStars, maxDistance = 100) {
      for (let star of existingStars) {
        if (getDistance(newStar, star) <= maxDistance) return true;
      }
      return false;
    }

    function createStars() {
      const starsContainer = document.getElementById("stars");
      const numberOfStars = 180;
      let attempts = 0;
      const maxAttempts = numberOfStars * 5;

      while (stars.length < numberOfStars && attempts < maxAttempts) {
        attempts++;
        const x = Math.random() * (window.innerWidth - 20) + 10;
        const y = Math.random() * (window.innerHeight - 20) + 10;
        const size = 4;

        const newStar = {
          x: x + size / 2,
          y: y + size / 2,
          size,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2,
          connected: [],
        };

        if (!checkCollisions(newStar, stars) &&
            (stars.length === 0 || hasNearbyStarsWithinRange(newStar, stars, 100))) {
          const star = document.createElement("div");
          star.classList.add("star");
          star.style.left = x + "px";
          star.style.top = y + "px";
          star.style.width = size + "px";
          star.style.height = size + "px";

          newStar.element = star;
          stars.push(newStar);
          starsContainer.appendChild(star);
        }
      }
    }

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function updateStars() {
      stars.forEach((star) => (star.connected = []));

      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const distance = getDistance(stars[i], stars[j]);
          if (distance < 40) {
            stars[i].connected.push(stars[j]);
            stars[j].connected.push(stars[i]);
          }
        }
      }

      stars.forEach((star) => {
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < star.size || star.x > window.innerWidth - star.size) {
          star.vx *= -1;
        }
        if (star.y < star.size || star.y > window.innerHeight - star.size) {
          star.vy *= -1;
        }

        star.element.style.left = star.x - star.size / 2 + "px";
        star.element.style.top = star.y - star.size / 2 + "px";
      });

      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const distance = getDistance(stars[i], stars[j]);
          const minDistance = 25;
          if (distance < minDistance) {
            const dx = stars[j].x - stars[i].x;
            const dy = stars[j].y - stars[i].y;
            const angle = Math.atan2(dy, dx);
            const moveDistance = (minDistance - distance) / 2;
            stars[i].x -= Math.cos(angle) * moveDistance;
            stars[i].y -= Math.sin(angle) * moveDistance;
            stars[j].x += Math.cos(angle) * moveDistance;
            stars[j].y += Math.sin(angle) * moveDistance;
          }
        }
      }
    }

    function drawConnections() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(255,255,255,0.4)";
      ctx.lineWidth = 1;

      const drawnConnections = new Set();
      stars.forEach((star) => {
        star.connected.forEach((connectedStar) => {
          const connectionId =
            Math.min(stars.indexOf(star), stars.indexOf(connectedStar)) +
            "-" +
            Math.max(stars.indexOf(star), stars.indexOf(connectedStar));

          if (!drawnConnections.has(connectionId)) {
            drawnConnections.add(connectionId);
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(connectedStar.x, connectedStar.y);
            ctx.stroke();
          }
        });
      });

      stars.forEach((star) => {
        const mouseDistance = Math.sqrt(
          (mouseX - star.x) * (mouseX - star.x) +
          (mouseY - star.y) * (mouseY - star.y)
        );
        if (mouseDistance < 110) {
          const opacity = (110 - mouseDistance) / 110;
          ctx.strokeStyle = `rgba(255,255,255,${opacity * 0.9})`;
          ctx.beginPath();
          ctx.moveTo(mouseX, mouseY);
          ctx.lineTo(star.x, star.y);
          ctx.stroke();
        }
      });
    }

    function animate() {
      updateStars();
      drawConnections();
      requestAnimationFrame(animate);
    }

    setupCanvas();
    createStars();
    animate();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = [];
      document.getElementById("stars").innerHTML = "";
      createStars();
    });

    return () => {
      // cleanup
      window.removeEventListener("resize", () => {});
      document.getElementById("stars").innerHTML = "";
    };
  }, []);

  return (
    <>
      <canvas id="canvas" className="fixed top-0 left-0 w-full h-full z-0"></canvas>
      <div id="stars" className="fixed top-0 left-0 w-full h-full z-10"></div>
    </>
  );
}
