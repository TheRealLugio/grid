document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card-front");
  
    // Define the properties of the ellipse
    const ellipseColor = "hsla(26, 60.20%, 42.40%, 0.92)"; // A fixed color shade
    const centerX = 50; // Center of the canvas horizontally
    const centerY = 80 // Center of the canvas vertically
    const radiusX = 20// Fixed horizontal radius
    const radiusY = 40; // Fixed vertical radius
    const rotation = 0; // No rotation

    // Iterate through all cards and draw the same ellipse
    cards.forEach((cardFront) => {
      // Create a canvas element
      const canvas = document.createElement("canvas");
      canvas.width = 100; // Match the card width
      canvas.height = 160; // Match the card height
  
      const ctx = canvas.getContext("2d");
  
      // Set the ellipse properties
      ctx.fillStyle = ellipseColor;
  
      // Draw the ellipse
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, radiusX, radiusY, rotation, 0, Math.PI * 2);
      ctx.fill();
  
      // Append the canvas to the card front
      cardFront.appendChild(canvas);
    });
  });