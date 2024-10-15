import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongodb from './db.js'


const app=express();
app.use(cors(
  {
    origin: ["https://deploy-mern-1whq.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
  }
))
dotenv.config()
const PORT=4000;

app.get('/DiamondwishData',(req,res)=>{

   

    const products = [
        {
          id: 1,
          description: "Tapered Classic Hidden Halo",
          colorOptions: {
            whiteGold: {
              price: 599,
              cutPrice: 799,
              beforeImage:
                "https://images.diamondwish.com/productimages/RNG10123/medium/RNG10123-WG-RB-WH-100-M0.jpg",
              afterImage:
                "https://images.diamondwish.com/productimages/RNG10123/medium/RNG10123-WG-RB-WH-100-M2.jpg",
            },
            yellowGold: {
              price: 130,
              cutPrice: 160,
              beforeImage:
                "https://images.diamondwish.com/productimages/RNG10123/medium/RNG10123-YG-RB-WH-100-M0.jpg",
              afterImage:
                "https://images.diamondwish.com/productimages/RNG10123/medium/RNG10123-YG-RB-WH-100-M2.jpg",
            },
            roseGold: {
              price: 140,
              cutPrice: 170,
              beforeImage:
                "https://images.diamondwish.com/productimages/RNG10123/medium/RNG10123-RG-RB-WH-100-M0.jpg",
              afterImage:
                "https://images.diamondwish.com/productimages/RNG10123/medium/RNG10123-RG-RB-WH-100-M2.jpg",
            },
            platinum: {
              price: 150,
              cutPrice: 180,
              beforeImage:
                "https://images.diamondwish.com/productimages/RNG10123/medium/RNG10123-WG-RB-WH-100-M0.jpg",
              afterImage:
                "https://images.diamondwish.com/productimages/RNG10123/medium/RNG10123-WG-RB-WH-100-M2.jpg",
            },
          },
        },
        {
          id: 2,
          description: "East-West Knife Edge Solitaire",
          colorOptions: {
            whiteGold: {
              price: 412,
              cutPrice: 549,
              beforeImage: "https://images.diamondwish.com/productimages/RNG10133/medium/RNG10133-WG-RB-WH-100-M0.jpg",
              afterImage: "https://images.diamondwish.com/productimages/RNG10133/medium/RNG10133-WG-RB-WH-100-M2.jpg",
            },
            yellowGold: {
              price: 120,
              cutPrice: 150,
              beforeImage: "https://images.diamondwish.com/productimages/RNG10133/medium/RNG10133-YG-RB-WH-100-M0.jpg",
              afterImage: "https://images.diamondwish.com/productimages/RNG10133/medium/RNG10133-YG-RB-WH-100-M2.jpg",
            },
            roseGold: {
              price: 130,
              cutPrice: 160,
              beforeImage: "https://images.diamondwish.com/productimages/RNG10133/medium/RNG10133-RG-RB-WH-100-M0.jpg",
              afterImage: "https://images.diamondwish.com/productimages/RNG10133/medium/RNG10133-RG-RB-WH-100-M2.jpg",
            },
            platinum: {
              price: 140,
              cutPrice: 170,
              beforeImage: "https://images.diamondwish.com/productimages/RNG10133/medium/RNG10133-WG-RB-WH-100-M0.jpg",
              afterImage: "https://images.diamondwish.com/productimages/RNG10133/medium/RNG10133-WG-RB-WH-100-M2.jpg",
            },
          },
        },
        {
          id: 3,
          description: "Chevron V Solitaire",
          colorOptions: {
            whiteGold: {
              price: 125,
              cutPrice: 155,
              beforeImage: "https://images.diamondwish.com/productimages/RNG10130/medium/RNG10130-WG-RB-WH-100-M0.jpg",
              afterImage: "https://images.diamondwish.com/productimages/RNG10130/medium/RNG10130-WG-RB-WH-100-M2.jpg",
            },
            yellowGold: {
              price: 135,
              cutPrice: 165,
              beforeImage: "https://images.diamondwish.com/productimages/RNG10130/medium/RNG10130-YG-RB-WH-100-M0.jpg",
              afterImage: "https://images.diamondwish.com/productimages/RNG10130/medium/RNG10130-YG-RB-WH-100-M2.jpg",
            },
            roseGold: {
              price: 145,
              cutPrice: 175,
              beforeImage: "https://images.diamondwish.com/productimages/RNG10130/medium/RNG10130-RG-RB-WH-100-M0.jpg",
              afterImage: "https://images.diamondwish.com/productimages/RNG10130/medium/RNG10130-RG-RB-WH-100-M2.jpg",
            },
            platinum: {
              price: 155,
              cutPrice: 185,
              beforeImage: "https://images.diamondwish.com/productimages/RNG10130/medium/RNG10130-WG-RB-WH-100-M0.jpg",
              afterImage: "https://images.diamondwish.com/productimages/RNG10130/medium/RNG10130-WG-RB-WH-100-M2.jpg",
            },
          },
        },
        {
          id: 4,
          description: "Classic Hidden Halo Solitaire",
          colorOptions: {
            whiteGold: {
              price: 125,
              cutPrice: 155,
              beforeImage: "https://images.diamondwish.com/productimages/RNG10114/medium/RNG10114-WG-OV-WH-100-M0.jpg",
              afterImage: "https://images.diamondwish.com/productimages/RNG10114/medium/RNG10114-WG-OV-WH-100-M2.jpg",
            },
            yellowGold: {
              price: 135,
              cutPrice: 165,
              beforeImage: "https://images.diamondwish.com/productimages/RNG10114/medium/RNG10114-YG-OV-WH-100-M0.jpg",
              afterImage: "https://images.diamondwish.com/productimages/RNG10114/medium/RNG10114-YG-OV-WH-100-M2.jpg",
            },
            roseGold: {
              price: 145,
              cutPrice: 175,
              beforeImage: "https://images.diamondwish.com/productimages/RNG10114/medium/RNG10114-RG-OV-WH-100-M0.jpg",
              afterImage: "https://images.diamondwish.com/productimages/RNG10114/medium/RNG10114-RG-OV-WH-100-M2.jpg",
            },
            platinum: {
              price: 155,
              cutPrice: 185,
              beforeImage: "https://images.diamondwish.com/productimages/RNG10114/medium/RNG10114-WG-OV-WH-100-M0.jpg",
              afterImage: "https://images.diamondwish.com/productimages/RNG10114/medium/RNG10114-WG-OV-WH-100-M2.jpg",
            },
          },
        },
        {
          id: 5,
          description: "Chevron V",
          colorOptions: {
            whiteGold: {
              price: 125,
              cutPrice: 155,
              beforeImage: "https://images.diamondwish.com/productimages/RNG10137/medium/RNG10137-WG-EM-WH-100-M0.jpg",
              afterImage: "https://images.diamondwish.com/productimages/RNG10137/medium/RNG10137-WG-EM-WH-100-M2.jpg",
            },
            yellowGold: {
              price: 135,
              cutPrice: 165,
              beforeImage: "https://images.diamondwish.com/productimages/RNG10137/medium/RNG10137-YG-EM-WH-100-M0.jpg",
              afterImage: "https://images.diamondwish.com/productimages/RNG10137/medium/RNG10137-YG-EM-WH-100-M2.jpg",
            },
            roseGold: {
              price: 145,
              cutPrice: 175,
              beforeImage: "https://images.diamondwish.com/productimages/RNG10137/medium/RNG10137-RG-EM-WH-100-M0.jpg",
              afterImage: "https://images.diamondwish.com/productimages/RNG10137/medium/RNG10137-RG-EM-WH-100-M2.jpg",
            },
            platinum: {
              price: 155,
              cutPrice: 185,
              beforeImage: "https://images.diamondwish.com/productimages/RNG10137/medium/RNG10137-WG-EM-WH-100-M0.jpg",
              afterImage: "https://images.diamondwish.com/productimages/RNG10137/medium/RNG10137-WG-EM-WH-100-M2.jpg",
            },
          },
        },
        {
          id: 6,
          description: "Bezel Solitaire",
          colorOptions: {
            whiteGold: {
              price: 125,
              cutPrice: 155,
              beforeImage: "https://images.diamondwish.com/productimages/RNG10132/medium/RNG10132-WG-RB-WH-100-M0.jpg",
              afterImage: "https://images.diamondwish.com/productimages/RNG10132/medium/RNG10132-WG-RB-WH-100-M2.jpg",
            },
            yellowGold: {
              price: 135,
              cutPrice: 165,
              beforeImage: "https://images.diamondwish.com/productimages/RNG10132/medium/RNG10132-YG-RB-WH-100-M0.jpg",
              afterImage: "https://images.diamondwish.com/productimages/RNG10132/medium/RNG10132-YG-RB-WH-100-M2.jpg",
            },
            roseGold: {
              price: 145,
              cutPrice: 175,
              beforeImage: "https://images.diamondwish.com/productimages/RNG10132/medium/RNG10132-RG-RB-WH-100-M0.jpg",
              afterImage: "https://images.diamondwish.com/productimages/RNG10132/medium/RNG10132-RG-RB-WH-100-M2.jpg",
            },
            platinum: {
              price: 155,
              cutPrice: 185,
              beforeImage: "https://images.diamondwish.com/productimages/RNG10132/medium/RNG10132-WG-RB-WH-100-M0.jpg",
              afterImage: "https://images.diamondwish.com/productimages/RNG10132/medium/RNG10132-WG-RB-WH-100-M2.jpg",
            },
            
          },
        },
        {
          id: 7,
          description: "Chevron V",
          colorOptions: {
            whiteGold: {
              price: 125,
              cutPrice: 155,
              beforeImage: "https://images.diamondwish.com/productimages/RNG10133/medium/RNG10133-WG-RB-WH-100-M0.jpg",
              afterImage: "https://images.diamondwish.com/productimages/RNG10133/medium/RNG10133-WG-RB-WH-100-M2.jpg",
            },
            yellowGold: {
              price: 135,
              cutPrice: 165,
              beforeImage: "https://images.diamondwish.com/productimages/RNG10133/medium/RNG10133-YG-RB-WH-100-M0.jpg",
              afterImage: "https://images.diamondwish.com/productimages/RNG10133/medium/RNG10133-YG-RB-WH-100-M2.jpg",
            },
            roseGold: {
              price: 145,
              cutPrice: 175,
              beforeImage: "https://images.diamondwish.com/productimages/RNG10133/medium/RNG10133-RG-RB-WH-100-M0.jpg",
              afterImage: "https://images.diamondwish.com/productimages/RNG10133/medium/RNG10133-RG-RB-WH-100-M2.jpg",
            },
            platinum: {
              price: 155,
              cutPrice: 185,
              beforeImage: "https://images.diamondwish.com/productimages/RNG10133/medium/RNG10133-WG-RB-WH-100-M0.jpg",
              afterImage: "https://images.diamondwish.com/productimages/RNG10133/medium/RNG10133-WG-RB-WH-100-M2.jpg",
            },
          },
        },
        {
          id: 8,
          description: "Tapered Classic Hidden Halo",
          colorOptions: {
            whiteGold: {
              price: 599,
              cutPrice: 799,
              beforeImage:
                "https://images.diamondwish.com/productimages/RNG10123/medium/RNG10123-WG-RB-WH-100-M0.jpg",
              afterImage:
                "https://images.diamondwish.com/productimages/RNG10123/medium/RNG10123-WG-RB-WH-100-M2.jpg",
            },
            yellowGold: {
              price: 130,
              cutPrice: 160,
              beforeImage:
                "https://images.diamondwish.com/productimages/RNG10123/medium/RNG10123-YG-RB-WH-100-M0.jpg",
              afterImage:
                "https://images.diamondwish.com/productimages/RNG10123/medium/RNG10123-YG-RB-WH-100-M2.jpg",
            },
            roseGold: {
              price: 140,
              cutPrice: 170,
              beforeImage:
                "https://images.diamondwish.com/productimages/RNG10123/medium/RNG10123-RG-RB-WH-100-M0.jpg",
              afterImage:
                "https://images.diamondwish.com/productimages/RNG10123/medium/RNG10123-RG-RB-WH-100-M2.jpg",
            },
            platinum: {
              price: 150,
              cutPrice: 180,
              beforeImage:
                "https://images.diamondwish.com/productimages/RNG10123/medium/RNG10123-WG-RB-WH-100-M0.jpg",
              afterImage:
                "https://images.diamondwish.com/productimages/RNG10123/medium/RNG10123-WG-RB-WH-100-M2.jpg",
            },
          },
        },
      ];


    res.send(products);


})


mongodb()
.then(()=>{
    app.listen(PORT,()=>{
        console.log("mongoodb connected ");
        console.log("connected on This",PORT);
    })
})
