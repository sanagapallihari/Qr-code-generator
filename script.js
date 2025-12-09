let qr;

function generateQR() {
    const text = document.getElementById("qrText").value;
    const qrContainer = document.getElementById("qrcode");

    qrContainer.innerHTML = ""; // Clear old QR

    if (!text.trim()) {
        qrContainer.innerHTML = "<p>Please enter text or URL.</p>";
        return;
    }

    qr = new QRCode(qrContainer, {
        text: text,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
    });
}

function downloadQR() {
    const img = document.querySelector('#qrcode img');
    if (!img) {
        alert("Generate a QR Code first!");
        return;
    }

    const link = document.createElement("a");
    link.href = img.src;
    link.download = "qr_code.png";
    link.click();
}
