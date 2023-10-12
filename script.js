document.addEventListener("DOMContentLoaded", function() {
    generateCard();
});

function generateCard() {
    const cardContainer = document.getElementById("cardContainer");

    // The Python script you provided, converted to JavaScript
    const width = 800, height = 600;

    // 무작위 이미지 가져오기
    fetch("https://source.unsplash.com/random/800x600")
        .then(response => response.blob())
        .then(blob => {
            const bg_img = new Image();
            bg_img.src = URL.createObjectURL(blob);
            bg_img.onload = () => {
                // 카드 생성
                const card = document.createElement("canvas");
                card.width = width;
                card.height = height;
                const ctx = card.getContext('2d');
                ctx.drawImage(bg_img, 0, 0);

                // 텍스트 추가
                const fontSize = 36;
                const font = `${fontSize}px korea`;
                const message = "님 생축이요 맛난거 많이 먹고 만수무강 하셈!";
                const textX = (width - ctx.measureText(message).width) / 2;
                const textY = (height - fontSize) / 2;

                // 텍스트의 배경을 흰색으로 설정
                ctx.fillStyle = "white";
                ctx.fillRect(textX, textY, ctx.measureText(message).width, fontSize);

                // 텍스트 추가
                ctx.fillStyle = "black";
                ctx.font = font;
                ctx.fillText(message, textX, textY);

                // 이미지를 HTML에 추가
                cardContainer.innerHTML = '';
                cardContainer.appendChild(card);
            }
        });
}
