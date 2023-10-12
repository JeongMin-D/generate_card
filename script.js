document.addEventListener("DOMContentLoaded", function() {
    generateCard();
});

function generateCard() {
    const cardContainer = document.getElementById("cardContainer");

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
                const fontSize = 18;  // 더 작은 폰트 크기
                const font = `${fontSize}px korea`;
                const message = "님 생축이요 맛난거 많이 먹고 만수무강 하셈!";
                const textWidth = ctx.measureText(message).width;
                const textX = (width - textWidth) / 2;
                const textY = (height - fontSize) / 2;

                // 텍스트의 배경을 흰색으로 설정
                const backgroundPaddingX = 100; // 가로 크기를 조정합니다.
                const backgroundPaddingY = 20; // 세로 크기를 조정합니다.
                ctx.fillStyle = "white";
                ctx.fillRect(
                    (width - textWidth) / 2 - backgroundPaddingX,
                    textY - backgroundPaddingY,
                    textWidth + 2 * backgroundPaddingX,
                    fontSize + 2 * backgroundPaddingY
                );

                // 텍스트 추가
                ctx.fillStyle = "black";
                ctx.font = font;

                // 텍스트를 가운데 정렬
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(message, width / 2, height / 2);

                // 이미지를 HTML에 추가
                cardContainer.innerHTML = '';
                cardContainer.appendChild(card);
            }
        });
}
