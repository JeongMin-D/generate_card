document.addEventListener("DOMContentLoaded", function() {
    generateCard();
});

function generateCard() {
    // JavaScript code

    const fetch = require('node-fetch');
    const fs = require('fs');
    const { createCanvas, loadImage, registerFont } = require('canvas');

    const canvas = createCanvas(800, 600);
    const ctx = canvas.getContext('2d');

    async function generateCard() {
        // Fetch random image
        const response = await fetch("https://source.unsplash.com/random/800x600");
        const buffer = await response.buffer();
        const bgImage = await loadImage(buffer);

        // Create card
        ctx.drawImage(bgImage, 0, 0);

        // Add text
        const fontPath = "./korea.ttf";
        registerFont(fontPath, { family: 'korea' });
        const fontSize = 36;
        ctx.font = `${fontSize}px korea`;

        const message = "님 생축이요 맛난거 많이 먹고 만수무강 하셈!";
        const textWidth = ctx.measureText(message).width;
        const textX = (canvas.width - textWidth) / 2;
        const textY = (canvas.height - fontSize) / 2;

        // Set text background
        ctx.fillStyle = "white";
        ctx.fillRect(textX, textY, textWidth, fontSize);

        // Draw text
        ctx.fillStyle = "black";
        ctx.fillText(message, textX, textY);

        // Save image
        const bufferOut = canvas.toBuffer('image/png');
        fs.writeFileSync("happy_birthday_card.png", bufferOut);

        // Show image
        const cardImage = await loadImage(bufferOut);
        document.body.appendChild(cardImage);
    }

// Call the function on page load if needed
// generateCard();

}
