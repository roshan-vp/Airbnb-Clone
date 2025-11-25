const airbnbListings = [
  {
    title: "Cozy Hillside Villa",
    description: "Warm wooden interiors, panoramic hill views, and total peace.",
    image: {
      filename: "hillside_villa.jpg",
      url: "https://images.pexels.com/photos/259600/pexels-photo-259600.jpeg"
    },
    price: 150,
    location: "Manali",
    country: "India"
  },
  {
    title: "Luxury Beachfront Villa",
    description: "Crystal blue waters, private pool, and perfect sunsets.",
    image: {
      filename: "beachfront_villa.jpg",
      url: "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg"
    },
    price: 320,
    location: "Goa",
    country: "India"
  },
  {
    title: "Modern Urban Hotel Suite",
    description: "High-rise suite with stunning night city views.",
    image: {
      filename: "urban_hotel_suite.jpg",
      url: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg"
    },
    price: 180,
    location: "Mumbai",
    country: "India"
  },
  {
    title: "Scandinavian Minimal Home",
    description: "White aesthetic, natural light, and cozy modern vibes.",
    image: {
      filename: "scandinavian_home.jpg",
      url: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg"
    },
    price: 210,
    location: "Copenhagen",
    country: "Denmark"
  },
  {
    title: "Rustic Wooden Cabin",
    description: "Mountain-side cabin surrounded by pine trees.",
    image: {
      filename: "wooden_cabin.jpg",
      url: "https://images.pexels.com/photos/286763/pexels-photo-286763.jpeg"
    },
    price: 140,
    location: "Shimla",
    country: "India"
  },
  {
    title: "Elegant Heritage Villa",
    description: "Vintage architecture blended with modern luxury.",
    image: {
      filename: "heritage_villa.jpg",
      url: "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg"
    },
    price: 260,
    location: "Jaipur",
    country: "India"
  },
  {
    title: "Seaside Resort Room",
    description: "Walk directly to the beach; perfect for sunrise lovers.",
    image: {
      filename: "seaside_resort.jpg",
      url: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
    },
    price: 130,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Glass House Retreat",
    description: "Floor-to-ceiling windows with forest surroundings.",
    image: {
      filename: "glass_house.jpg",
      url: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg"
    },
    price: 300,
    location: "Oregon",
    country: "USA"
  },
  {
    title: "Boutique Hotel Room",
    description: "Modern interiors with a premium luxury feel.",
    image: {
      filename: "boutique_hotel.jpg",
      url: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
    },
    price: 190,
    location: "Singapore",
    country: "Singapore"
  },
  {
    title: "Lakefront Cottage",
    description: "Calm water views and a peaceful wooden deck.",
    image: {
      filename: "lakefront_cottage.jpg",
      url: "https://images.pexels.com/photos/259802/pexels-photo-259802.jpeg"
    },
    price: 170,
    location: "Nainital",
    country: "India"
  },
  {
    title: "Private Pool Villa",
    description: "Clean modern villa with private pool and greenery.",
    image: {
      filename: "private_pool_villa.jpg",
      url: "https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg"
    },
    price: 350,
    location: "Phuket",
    country: "Thailand"
  },
  {
    title: "Modern Family Home",
    description: "Spacious living room, backyard, and comfy bedrooms.",
    image: {
      filename: "modern_family_home.jpg",
      url: "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg"
    },
    price: 160,
    location: "Auckland",
    country: "New Zealand"
  },
  {
    title: "Minimal Serviced Apartment",
    description: "Clean, budget-friendly and perfect for long stays.",
    image: {
      filename: "serviced_apartment.jpg",
      url: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg"
    },
    price: 95,
    location: "Pune",
    country: "India"
  },
  {
    title: "Tropical Garden Villa",
    description: "Surrounded by palm trees, with an open-air bathroom.",
    image: {
      filename: "tropical_villa.jpg",
      url: "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg"
    },
    price: 220,
    location: "Kerala",
    country: "India"
  },
  {
    title: "Skyline Hotel Deluxe",
    description: "Floor 28 stay with jaw-dropping cityscape view.",
    image: {
      filename: "skyline_deluxe.jpg",
      url: "https://images.pexels.com/photos/284087/pexels-photo-284087.jpeg"
    },
    price: 240,
    location: "Dubai",
    country: "UAE"
  },
  {
    title: "Countryside Farmhouse",
    description: "Wide open fields, peaceful mornings and fresh air.",
    image: {
      filename: "farmhouse.jpg",
      url: "https://images.pexels.com/photos/259600/pexels-photo-259600.jpeg"
    },
    price: 100,
    location: "Punjab",
    country: "India"
  },
  {
    title: "Beach Hut Stay",
    description: "Simple bamboo hut right on the sands.",
    image: {
      filename: "beach_hut.jpg",
      url: "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg"
    },
    price: 80,
    location: "Gokarna",
    country: "India"
  },
  {
    title: "Luxury Cliffside House",
    description: "Huge terrace with panoramic ocean views.",
    image: {
      filename: "cliffside_house.jpg",
      url: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg"
    },
    price: 400,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Cozy Budget Home",
    description: "Simple and affordable space for quick trips.",
    image: {
      filename: "budget_home.jpg",
      url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
    },
    price: 45,
    location: "Chennai",
    country: "India"
  },
  {
    title: "Elegant Lakeside Villa",
    description: "Private villa with a relaxing waterfront deck.",
    image: {
      filename: "lakeside_villa.jpg",
      url: "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg"
    },
    price: 280,
    location: "Udaipur",
    country: "India"
  }
];

module.exports = { data: airbnbListings };