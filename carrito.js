let cart = [];

function updateCartDisplay() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");
  const cartCountElement = document.getElementById("cart-count");
  const emptyCartMessage = document.getElementById("empty-cart-message");

  cartItemsContainer.innerHTML = ""; // Limpiar ítems existentes

  let totalGeneral = 0;
  let totalItems = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<tr><td colspan="5" class="text-center" id="empty-cart-message">El carrito está vacío.</td></tr>`;
  } else {
    cart.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      totalGeneral += itemTotal;
      totalItems += item.quantity;

      const row = document.createElement("tr");
      row.innerHTML = `
                        <td>${item.name}</td>
                        <td>$${item.price}</td>
                        <td>${item.quantity}</td>
                        <td>$${itemTotal}</td>
                        <td>
                            <button class="btn btn-danger btn-sm remove-from-cart" data-id="${item.id
        }">
                                <i class="bi bi-trash"></i>
                            </button>
                        </td>
                    `;
      cartItemsContainer.appendChild(row);
    });
  }

  cartTotalElement.textContent = `$${totalGeneral.toFixed(2)}`;
  cartCountElement.textContent = totalItems;

  // Añadir eventos a los botones de eliminar después de que se hayan creado
  document.querySelectorAll(".remove-from-cart").forEach((button) => {
    button.addEventListener("click", (event) => {
      const productId = parseInt(event.currentTarget.dataset.id);
      removeItemFromCart(productId);
    });
  });
}

function addItemToCart(product) {
  const existingItem = cart.find((item) => item.id === product.id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCartDisplay();
  alert("Producto agregado correctamente.")
}

function removeItemFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCartDisplay();
}

document.addEventListener("DOMContentLoaded", () => {
  // Eventos para agregar productos al carrito
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", (event) => {
      const productId = parseInt(event.currentTarget.dataset.id);
      const productName = event.currentTarget.dataset.name;
      const productPrice = parseFloat(event.currentTarget.dataset.price);

      addItemToCart({
        id: productId,
        name: productName,
        price: productPrice,
      });
    });
  });

  updateCartDisplay(); // Inicializar el carrito al cargar la página
});
