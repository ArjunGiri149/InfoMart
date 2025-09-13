const sampleListing = [
  // Mobile Phones
  {
    title: "Apple iPhone 15 Pro",
    description: "Flagship smartphone with A17 Pro chip and titanium design.",
    image: {
      url: "https://www.itstartsmedia.com/wp-content/uploads/2023/09/iPhone-15-Blue.jpg",
      filename: "listingImage",
    },
    price: 99999,
    location: "Cupertino, California",
    country: "United States",
  },
  {
    title: "Samsung Galaxy S23 Ultra",
    description: "High-end Android smartphone with 200MP camera and S Pen.",
    image: {
      url: "https://images.samsung.com/in/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-kv.jpg",
      filename: "listingImage",
    },
    price: 124999,
    location: "Seoul",
    country: "South Korea",
  },
  {
    title: "OnePlus 11R",
    description: "Powerful flagship killer with Snapdragon processor.",
    image: {
      url: "https://www.oneplus.com/content/dam/oasis/page/2023/in/oneplus-10t/specs/wechat-share.jpg",
      filename: "listingImage",
    },
    price: 44999,
    location: "Bengaluru",
    country: "India",
  },
  {
    title: "Xiaomi 13 Pro",
    description: "Premium smartphone with Leica camera and fast charging.",
    image: {
      url: "https://www.greenbot.com/wp-content/uploads/2023/02/Xiaomi-13-Pro-1.jpg",
      filename: "listingImage",
    },
    price: 69999,
    location: "Beijing",
    country: "China",
  },
  {
    title: "Google Pixel 7 Pro",
    description: "Smartphone with Tensor chip and advanced AI camera.",
    image: {
      url: "https://tse4.mm.bing.net/th/id/OIP.2nO53eWWfGYn6XsBvd--jAHaEK?w=1120&h=630&rs=1&pid=ImgDetMain&o=7&rm=3",
      filename: "listingImage",
    },
    price: 84999,
    location: "California",
    country: "United States",
  },

  // Tabs
  {
    title: "Apple iPad Pro 12.9",
    description: "Powerful tablet with M2 chip and Liquid Retina XDR display.",
    image: {
      url: "https://www.renderhub.com/aliartist3d/apple-ipad-pro-silicon-12-9-inch-in-official-colors/apple-ipad-pro-silicon-12-9-inch-in-official-colors-02.jpg",
      filename: "listingImage",
    },
    price: 99999,
    location: "Cupertino, California",
    country: "United States",
  },
  {
    title: "Samsung Galaxy Tab S9 Ultra",
    description: "Android tablet with massive AMOLED screen and S Pen.",
    image: {
      url: "https://gizchina.it/wp-content/uploads/2023/04/Samsung-galaxy-tab-s9-ultra-1.jpg",
      filename: "listingImage",
    },
    price: 94999,
    location: "Seoul",
    country: "South Korea",
  },
  {
    title: "OnePlus Pad",
    description: "Stylish Android tablet with smooth performance.",
    image: {
      url: "https://assets.mspimages.in/wp-content/uploads/2023/01/IMG_0131.jpg",
      filename: "listingImage",
    },
    price: 37999,
    location: "Bengaluru",
    country: "India",
  },
  {
    title: "Xiaomi Pad 6 Pro",
    description: "Affordable tablet with high refresh rate display.",
    image: {
      url: "https://wallpapercave.com/wp/wp12302862.jpg",
      filename: "listingImage",
    },
    price: 29999,
    location: "Beijing",
    country: "China",
  },
  {
    title: "Lenovo Tab P12 Pro",
    description:
      "Versatile Android tablet with AMOLED display and stylus support.",
    image: {
      url: "https://diyboo.oss-accelerate.aliyuncs.com/wp-content/uploads/2021/08/chamada-tablet-lenovo-tab-p12-pro-snapdragon-855-google-play-console.jpg",
      filename: "listingImage",
    },
    price: 45999,
    location: "Beijing",
    country: "China",
  },

  // Laptops
  {
    title: "Dell XPS 15",
    description: "Premium Windows laptop with powerful performance.",
    image: {
      url: "https://cdn.arstechnica.net/wp-content/uploads/2022/09/IMG_0429.jpeg",
      filename: "listingImage",
    },
    price: 149999,
    location: "Texas",
    country: "United States",
  },
  {
    title: "Apple MacBook Pro 16",
    description: "High-performance laptop with M2 Max chip.",
    image: {
      url: "https://images.frandroid.com/wp-content/uploads/2023/02/apple-macbook-pro-16-m2-max-test-4-scaled.jpg",
      filename: "listingImage",
    },
    price: 249999,
    location: "Cupertino, California",
    country: "United States",
  },
  {
    title: "HP Spectre x360",
    description: "Convertible laptop with OLED touch display.",
    image: {
      url: "https://swall.teahub.io/photos/small/306-3068325_hp-envy-13-hp-envy-13-2018.jpg",
      filename: "listingImage",
    },
    price: 134999,
    location: "California",
    country: "United States",
  },
  {
    title: "Lenovo Yoga Slim 7i",
    description: "Slim Windows laptop with great portability.",
    image: {
      url: "https://images.frandroid.com/wp-content/uploads/2022/08/lenovo-yoga-slim-7i-carbon-2022-test-9-scaled.jpg",
      filename: "listingImage",
    },
    price: 89999,
    location: "Beijing",
    country: "China",
  },
  {
    title: "Acer Predator Helios 300",
    description: "Gaming laptop with RTX graphics and fast refresh rate.",
    image: {
      url: "https://5w1hindonesia.id/wp-content/uploads/2023/10/Acer-Predator-Helios-300-Photo-Youtube-GadgetIn-5W1HINDONESIA.ID-1.jpg",
      filename: "listingImage",
    },
    price: 159999,
    location: "Taipei",
    country: "Taiwan",
  },

  // Headphones
  {
    title: "Sony WH-1000XM5",
    description: "Top noise-canceling wireless headphones.",
    image: {
      url: "https://assets-prd.ignimgs.com/2022/05/12/sony-wh-1000xm5-19-1652338654416.jpg",
      filename: "listingImage",
    },
    price: 29999,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Apple AirPods Max",
    description: "Premium over-ear headphones with spatial audio.",
    image: {
      url: "https://images.macrumors.com/t/U86ydPc-JWS1fnp62Jhs8V6obZc=/2500x/article-new/2024/02/Airpods-Max-Feature-Green-Triad.jpg",
      filename: "listingImage",
    },
    price: 59999,
    location: "Cupertino, California",
    country: "United States",
  },
  {
    title: "Bose 700",
    description: "Wireless headphones with excellent sound and comfort.",
    image: {
      url: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/813c3185558965.5d7fc6adc4999.png",
      filename: "listingImage",
    },
    price: 34999,
    location: "Massachusetts",
    country: "United States",
  },
  {
    title: "Sennheiser Momentum 4",
    description: "High-quality wireless headphones with deep bass.",
    image: {
      url: "https://helios-i.mashable.com/imagery/articles/03TtT8HSowGshX5WV7vPwC4/hero-image.fill.size_1200x675.v1737546319.jpg",
    },
  },
];
module.exports = { data: sampleListing };
