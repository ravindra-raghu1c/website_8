let products = [
    {
      id: 1,
      name: "T-Shirt",
      category: "clothing",
      description: "A comfortable cotton t-shirt.",
      image: "https://via.placeholder.com/300x200/ff6347/ffffff?text=T-Shirt",
      price: "$20",
    },
    {
      id: 2,
      name: "Laptop",
      category: "electronics",
      description: "A high-performance laptop for all your needs.",
      image: "https://via.placeholder.com/300x200/00aaff/ffffff?text=Laptop",
      price: "$999",
    },
    {
      id: 3,
      name: "Fresh Tomatoes",
      category: "groceries",
      description: "Farm-fresh tomatoes for your kitchen.",
      image: "https://via.placeholder.com/300x200/48c9b0/ffffff?text=Tomatoes",
      price: "$5",
    }
  ];

  function showPage(page) {
    document.querySelectorAll('main').forEach(main => main.style.display = 'none');
    document.getElementById(page).style.display = 'block';
  }

  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }

  function filterProducts(category) {
    const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    filteredProducts.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      if (document.body.classList.contains('dark-mode')) {
        productCard.classList.add('dark-mode');
      }

      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>${product.price}</strong></p>
        <a href="#" class="btn" onclick="showPage('product-details')">View Details</a>
      `;
      productGrid.appendChild(productCard);
    });
  }

  // Initial Product load
  filterProducts('all');