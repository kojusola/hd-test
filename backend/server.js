const express = require("express");
const app = express();
const PORT = 3002;
var cors = require("cors");

const data = {
  navItems: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "New",
      url: "/new",
    },
    {
      name: "Popular",
      url: "/popular",
    },
    {
      name: "Trending",
      url: "/trending",
    },
    {
      name: "Categories",
      url: "/categories",
    },
  ],
  mainArticle: {
    title: "The Bright Future of Web 3.0?",
    description:
      "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
    imageUrl: "/images/image-web-3-desktop.jpg",
    ctaButton: {
      name: "READ MORE",
      url: "/article?id=144",
    },
  },
  sidebar: {
    title: "New",
    articles: [
      {
        title: "Hydrogen VS Electric Cars",
        description: "Will hydrogen-fueled cars ever catch up to EVs?",
        url: "/article?id=124",
      },
      {
        title: "The Downsides of AI Artistry",
        description:
          "What are the possible adverse effects of on-demand AI image generation?",
        url: "/article?id=132",
      },
      {
        title: "Is VC Funding Drying Up?",
        description:
          "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
        url: "/article?id=82",
      },
    ],
  },
  articles: [
    {
      title: "Reviving Retro PCs",
      description: "What happens when old PCs are given modern upgrades?",
      imageUrl: "/images/image-retro-pcs.jpg",
    },
    {
      title: "Top 10 Laptops of 2022",
      description: "Our best picks for various needs and budgets.",
      imageUrl: "/images/image-top-laptops.jpg",
    },
    {
      title: "The Growth of Gaming",
      description: "How the pandemic has sparked fresh opportunities.",
      imageUrl: "/images/image-gaming-growth.jpg",
    },
  ],
};

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.get("/data", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
