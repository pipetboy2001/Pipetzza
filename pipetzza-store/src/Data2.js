const data = {
  status: "success",
  items: [
    {
      id: 1,
      title: "AMERICANA",
      price: 401,
      description: "Jamón, Carne, Salchicha, Pepperoni",
      image: "https://stockx-360.imgix.net/Nike-LD-Waffle-Sacai-Black-Nylon/Images/Nike-LD-Waffle-Sacai-Black-Nylon/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1606321430&w=1000",
      category: "pizza",
      img1: "https://stockx-360.imgix.net/Nike-LD-Waffle-Sacai-Black-Nylon/Images/Nike-LD-Waffle-Sacai-Black-Nylon/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1606321430&w=1000",
      cantidad: 1,
    },
    {
      id: 2,
      title: "BBQ CHICKEN",
      price: 304,
      description: "Salsa BBQ, Pollo, Cebolla",
      image: "https://stockx-360.imgix.net/Nike-Dunk-Low-Off-White-Pine-Green/Images/Nike-Dunk-Low-Off-White-Pine-Green/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1606319825&w=1000",
      category: "pizza",
      img1: "https://stockx-360.imgix.net/Nike-Dunk-Low-Off-White-Pine-Green/Images/Nike-Dunk-Low-Off-White-Pine-Green/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1606319825&w=1000",
      cantidad: 1
    },
    {
      id: 3,
      title: "CAMPESINA",
      price: 475,
      description: "Pollo, Pimiento, Champiñón",
      image: "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-Supreme-Box-Logo-Black/Images/Nike-Air-Force-1-Low-Supreme-Box-Logo-Black/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1606325289&w=1000",
      category: "pizza",
      img1: "https://stockx-360.imgix.net/Nike-Air-Force-1-Low-Supreme-Box-Logo-Black/Images/Nike-Air-Force-1-Low-Supreme-Box-Logo-Black/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1606325289&w=1000",
      cantidad: 1
    },
    {
      id: 4,
      title: " HAWAIANA",
      price: 399,
      description: "Pollo, Jamón, Piña",
      image: "https://stockx-360.imgix.net/Nike-LD-Waffle-Sacai-White-Nylon/Images/Nike-LD-Waffle-Sacai-White-Nylon/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1606325338&w=1000",
      category: "pizza",
      img1: "https://stockx-360.imgix.net/Nike-LD-Waffle-Sacai-White-Nylon/Images/Nike-LD-Waffle-Sacai-White-Nylon/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1606325338&w=1000",
      cantidad: 1
    },
    {
      id: 5,
      title: "MECHADA BBQ",
      price: 405,
      description: "Carne Mechada, Tomate, Cebolla",
      image: "https://stockx-360.imgix.net/Nike-Dunk-Low-SP-Kentucky/Images/Nike-Dunk-Low-SP-Kentucky/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1606322330&w=1000",
      category: "pizza",
      img1: " https://stockx-360.imgix.net/Nike-Dunk-Low-SP-Kentucky/Images/Nike-Dunk-Low-SP-Kentucky/Lv2/img",
      
      cantidad: 1
    },
    {
      id: 6,
      title: " VEGAN QUEEN",
      price: 285,
      description: "Champiñón, Pimiento, Cebolla, Choclo y Tomate",
      image: "https://stockx-360.imgix.net/Nike-Dunk-Low-Off-White-University-Red/Images/Nike-Dunk-Low-Off-White-University-Red/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1606321824&w=1000",
      category: "pizza",
      img1: "https://stockx-360.imgix.net/Nike-Dunk-Low-Off-White-University-Red/Images/Nike-Dunk-Low-Off-White-University-Red/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1606321824&w=1000",
      cantidad: 1
    },
    {
      id: 7,
      title: "Coca Cola",
      price: 285,
      description: "Refresco",
      image: "https://stockx-360.imgix.net/Nike-Dunk-Low-Off-White-University-Red/Images/Nike-Dunk-Low-Off-White-University-Red/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1606321824&w=1000",
      category: "Refresco",
      img1: "https://stockx-360.imgix.net/Nike-Dunk-Low-Off-White-University-Red/Images/Nike-Dunk-Low-Off-White-University-Red/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1606321824&w=1000",
      cantidad: 1
    },
    {
      id: 8,
      title: "Fanta",
      price: 285,
      description: "Refresco",
      image: "https://stockx-360.imgix.net/Nike-Dunk-Low-Off-White-University-Red/Images/Nike-Dunk-Low-Off-White-University-Red/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1606321824&w=1000",
      category: "Refresco",
      img1: "https://stockx-360.imgix.net/Nike-Dunk-Low-Off-White-University-Red/Images/Nike-Dunk-Low-Off-White-University-Red/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1606321824&w=1000",
      cantidad: 1
    },
    {
      id: 9,
      title: "Watts Durazno",
      price: 285,
      description: "Refresco",
      image: "https://stockx-360.imgix.net/Nike-Dunk-Low-Off-White-University-Red/Images/Nike-Dunk-Low-Off-White-University-Red/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1606321824&w=1000",
      category: "Refresco",
      img1: "https://stockx-360.imgix.net/Nike-Dunk-Low-Off-White-University-Red/Images/Nike-Dunk-Low-Off-White-University-Red/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1606321824&w=1000",
      cantidad: 1
    },
    {
      id: 10,
      title: "Watts Piña",
      price: 285,
      description: "Refresco",
      image: "https://stockx-360.imgix.net/Nike-Dunk-Low-Off-White-University-Red/Images/Nike-Dunk-Low-Off-White-University-Red/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1606321824&w=1000",
      category: "Refresco",
      img1: "https://stockx-360.imgix.net/Nike-Dunk-Low-Off-White-University-Red/Images/Nike-Dunk-Low-Off-White-University-Red/Lv2/img",
      img2: ".jpg?auto=format,compress&q=90&updated_at=1606321824&w=1000",
      cantidad: 1
    },
  ],
};

export default data;