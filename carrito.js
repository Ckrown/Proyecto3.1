window.addEventListener("message", function (event) {
    if (event.origin !== "vista2.html") return; // Reemplaza con la URL de tu catálogo
    const { productName, price } = event.data;
    addToCart(productName, price);
  });