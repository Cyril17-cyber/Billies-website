import list2 from "../images/list (2).jpg";
import list3 from "../images/list (3).jpg";
import list4 from "../images/list (4).jpg";
import cake from "../images/cake.png";
import cake1 from "../images/cake (1).jpg";
import cake2 from "../images/cake (2).jpg";
import cake3 from "../images/cake (3).jpg";
import cake4 from "../images/cake (4).jpg";
import cake5 from "../images/cake (5).jpg";
import bun from "../images/bun.png";
import bun1 from "../images/buns (1).jpeg";
import bun2 from "../images/buns (2).jpeg";
import bun3 from "../images/buns (3).jpeg";
import bun4 from "../images/buns (4).jpeg";
import cupcake from "../images/cupcake.png";
import cupcake1 from "../images/cupcake (1).jpg";
import cupcake2 from "../images/cupcake (2).jpg";
import cupcake3 from "../images/cupcake (3).jpg";
import cupcake4 from "../images/mid (2).jpg";
import cupcake5 from "../images/mid (1).jpg";
import doughnut from "../images/doughnut.png";
import doughnut1 from "../images/doughnuts (1).jpeg";
import doughnut2 from "../images/doughnuts (2).jpg";
import doughnut3 from "../images/doughnuts (3).jpg";
import doughnut4 from "../images/doughnuts (4).jpg";
import meatpie1 from "../images/meatPie (1).jpeg";
import meatpie2 from "../images/meatPie (2).jpeg";
import meatpie3 from "../images/meatPie (3).jpeg";
import meatpie4 from "../images/meatPie (4).jpeg";
import meatpie5 from "../images/meatPie (5).jpeg";
const offerArray = [
    {
        img: cupcake1,
        head: "Cup cakes",
        body: "We offer some of the best cream topped and normal cupcakes the business has to offer."
    },
    {
        img: list2,
        head: "Doughnuts",
        body: "We offer some of the best glazed and normal doughnut the business has to offer."
    },
    {
        img: list3,
        head: "Cakes",
        body: "We offer some of the best cakes the business has to offer. We do all types of cakes including; wedding cakes, birthday cakes and other cake needy events."
    },
    {
        img: list4,
        head: "Buns",
        body: "We offer some of the best buns, puff-puff and egg rolls the business has to offer."
    },
    {
        img: meatpie2,
        head: "Meat Pies",
        body: "We offer some of the best meatpies and fishpies the business has to offer."
    },
]

const work = [
    {
        name: "Cakes",
        description: "Top quality birthday and wedding cakes made for previous satisfied customers",
        img: [
            {image: cake1},
            {image: cake2},
            {image: cake3},
            {image: cake4},
            {image: cake5},
        ],
        illustration: cake,
        link: "/work/cakes"
    },
    {
        name: "Meat and Fish Pies",
        description: "Top quality meat and fish pies made for previous satisfied customers",
        img: [
            {image: meatpie1},
            {image: meatpie2},
            {image: meatpie3},
            {image: meatpie4},
            {image: meatpie5},
        ],
        illustration: "",
        link: "/work/meatpie"
    },
    {
        name: "Buns, Puff-Puff and Egg Rolls",
        description: "Top quality buns, puff puff and egg rolls made for previous satisfied customers",
        img: [
            {image: bun1},
            {image: bun2},
            {image: bun3},
            {image: bun4},
            {image: list4},
        ],
        illustration: bun,
        link: "/work/buns"
    },
    {
        name: "Doughnuts",
        description: "Top quality glazed and normal made for previous satisfied customers",
        img: [
            {image: doughnut1},
            {image: doughnut2},
            {image: doughnut3},
            {image: doughnut4},
            {image: list2},
        ],
        illustration: doughnut,
        link: "/work/cakes"
    },
    {
        name: "Cup cakes",
        description: "Top quality cream topping and normal Cupcakes made for previous satisfied customers",
        img: [
            {image: cupcake1},
            {image: cupcake2},
            {image: cupcake3},
            {image: cupcake4},
            {image: cupcake5},
        ],
        illustration: cupcake,
        link: "/work/cupcakes"
    }
]

export {offerArray, work};