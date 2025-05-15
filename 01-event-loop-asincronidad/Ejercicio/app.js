
const productos = [
  { nombre: 'Pastel de Chocolate', precio: 120, imagen: 'https://amoradulce.com/wp-content/uploads/2019/12/Torta-chocolate-1_04_13_2024-scaled.jpg',time:8000 },
  { nombre: 'Cupcake Vainilla', precio: 45, imagen: 'https://sarasellos.com/wp-content/uploads/2024/05/cupcakes-vainilla-3.jpg',time:2000 },
  { nombre: 'Galletas Decoradas', precio: 60, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1bBvkcZbnZbRO3lBK_uaMq5h_Fb2sINGwTg&s', time:5000 },
];

let orderId = 1;
const productList = document.getElementById('productList');
const orderList = document.getElementById('orderList'); 
// Crear Tarjetas de productos
productos.forEach(producto => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <p><strong>Precio:</strong> $${producto.precio}</p>
    <button>Ordenar</button>
  `;

  //Funcion que se activa al ordenar
  card.querySelector('button').onclick = () => {
    const order = { id: orderId++, status: 'En Proceso', producto: producto.nombre, time: producto.time };
    addOrder(order);
    processOrder(order,order.time );
  };

  productList.appendChild(card);
});

function addOrder(order) {
  const listItem = document.createElement('li');
  listItem.id = `order-${order.id}`;
  listItem.textContent = `Pedido #${order.id} (${order.producto}): ${order.status}`;
  listItem.classList.add('order-en-proceso'); 
  orderList.appendChild(listItem);
}

function updateOrderStatus(order, status) {
  const listItem = document.getElementById(`order-${order.id}`);
  if (listItem) {
    listItem.textContent = `Pedido #${order.id} (${order.producto}): ${status}`;
    listItem.classList.remove('order-en-proceso');
    if (status === 'Completado') {
      listItem.classList.add('order-completado');
    }
  }
}

async function processOrder(order,time) {
  await new Promise(resolve => setTimeout(resolve, time));
  updateOrderStatus(order, 'Completado');
}

