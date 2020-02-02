import * as types from "./mutation-types"; //mutation-typesをImportします

export const state = {
  finditem: "",
  account: {},
  itemLength: 3,
  page: 1,
  itemDetail: {},
  itemDetailSrc: "",
  items: [],
  product: {
    product_name: "coffee",
    imgPath: "https://noteitemlist.netlify.com/pic/coffee.png",
    amount: 800,
    shipping_fee: 150,
    model_number: 110,
    zooFlag: false
  },
  item: [
    {
      no: 1,
      product_name: "coffee",
      imgPath: "https://noteitemlist.netlify.com/pic/coffee.png",
      amount: 800,
      shipping_fee: 150,
      model_number: 110,
      zooFlag: false
    },
    {
      no: 2,
      product_name: "deer",
      imgPath: "https://noteitemlist.netlify.com/pic/deer.png",
      amount: 100,
      shipping_fee: 0,
      model_number: 106,
      zooFlag: true
    },
    {
      no: 3,
      product_name: "duck",
      imgPath: "https://noteitemlist.netlify.com/pic/duck.png",
      amount: 300,
      shipping_fee: 0,
      model_number: 101,
      zooFlag: true
    },
    {
      no: 4,
      product_name: "fox",
      imgPath: "https://noteitemlist.netlify.com/pic/fox.png",
      amount: 400,
      shipping_fee: 120,
      model_number: 100,
      zooFlag: true
    },
    {
      no: 5,
      product_name: "goldfish",
      imgPath: "https://noteitemlist.netlify.com/pic/goldfish.png",
      amount: 900,
      shipping_fee: 0,
      model_number: 112,
      zooFlag: true
    },
    {
      no: 6,
      product_name: "horse",
      imgPath: "https://noteitemlist.netlify.com/pic/horse.png",
      amount: 1100,
      shipping_fee: 50,
      model_number: 102,
      zooFlag: true
    },
    {
      no: 7,
      product_name: "ladybug",
      imgPath: "https://noteitemlist.netlify.com/pic/ladybug.png",
      amount: 1000,
      shipping_fee: 150,
      model_number: 111,
      zooFlag: true
    },
    {
      no: 8,
      product_name: "meat",
      imgPath: "https://noteitemlist.netlify.com/pic/meat.png",
      amount: 200,
      shipping_fee: 50,
      model_number: 109,
      zooFlag: false
    },
    {
      no: 9,
      product_name: "panda",
      imgPath: "https://noteitemlist.netlify.com/pic/panda.png",
      amount: 600,
      shipping_fee: 80,
      model_number: 108,
      zooFlag: true
    },
    {
      no: 10,
      product_name: "penguin",
      imgPath: "https://noteitemlist.netlify.com/pic/penguin.png",
      amount: 1200,
      shipping_fee: 50,
      model_number: 103,
      zooFlag: true
    },
    {
      no: 11,
      product_name: "pig",
      imgPath: "https://noteitemlist.netlify.com/pic/pig.png",
      amount: 500,
      shipping_fee: 100,
      model_number: 105,
      zooFlag: true
    },
    {
      no: 12,
      product_name: "popcorn",
      imgPath: "https://noteitemlist.netlify.com/pic/popcorn.png",
      amount: 1300,
      shipping_fee: 110,
      model_number: 107,
      zooFlag: false
    },
    {
      no: 13,
      product_name: "tako",
      imgPath: "https://noteitemlist.netlify.com/pic/tako.png",
      amount: 700,
      shipping_fee: 90,
      model_number: 104,
      zooFlag: true
    },
    {
      no: 14,
      product_name: "post",
      imgPath: "https://noteitemlist.netlify.com/pic/post.png",
      amount: 1400,
      shipping_fee: 80,
      model_number: 116,
      zooFlag: false
    },
    {
      no: 15,
      product_name: "castle",
      imgPath: "https://noteitemlist.netlify.com/pic/castle.png",
      amount: 1500,
      shipping_fee: 90,
      model_number: 117,
      zooFlag: false
    },
    {
      no: 16,
      product_name: "note",
      imgPath: "https://noteitemlist.netlify.com/pic/notebook.png",
      amount: 1700,
      shipping_fee: 0,
      model_number: 115,
      zooFlag: false
    },
    {
      no: 17,
      product_name: "game",
      imgPath: "https://noteitemlist.netlify.com/pic/game.png",
      amount: 1600,
      shipping_fee: 50,
      model_number: 114,
      zooFlag: false
    },
    {
      no: 1,
      product_name: "coffee",
      imgPath: "https://noteitemlist.netlify.com/pic/coffee.png",
      amount: 800,
      shipping_fee: 150,
      model_number: 110,
      zooFlag: false
    },
    {
      no: 2,
      product_name: "deer",
      imgPath: "https://noteitemlist.netlify.com/pic/deer.png",
      amount: 100,
      shipping_fee: 0,
      model_number: 106,
      zooFlag: true
    },
    {
      no: 3,
      product_name: "duck",
      imgPath: "https://noteitemlist.netlify.com/pic/duck.png",
      amount: 300,
      shipping_fee: 0,
      model_number: 101,
      zooFlag: true
    },
    {
      no: 4,
      product_name: "fox",
      imgPath: "https://noteitemlist.netlify.com/pic/fox.png",
      amount: 400,
      shipping_fee: 120,
      model_number: 100,
      zooFlag: true
    },
    {
      no: 5,
      product_name: "goldfish",
      imgPath: "https://noteitemlist.netlify.com/pic/goldfish.png",
      amount: 900,
      shipping_fee: 0,
      model_number: 112,
      zooFlag: true
    },
    {
      no: 6,
      product_name: "horse",
      imgPath: "https://noteitemlist.netlify.com/pic/horse.png",
      amount: 1100,
      shipping_fee: 50,
      model_number: 102,
      zooFlag: true
    },
    {
      no: 7,
      product_name: "ladybug",
      imgPath: "https://noteitemlist.netlify.com/pic/ladybug.png",
      amount: 1000,
      shipping_fee: 150,
      model_number: 111,
      zooFlag: true
    },
    {
      no: 8,
      product_name: "meat",
      imgPath: "https://noteitemlist.netlify.com/pic/meat.png",
      amount: 200,
      shipping_fee: 50,
      model_number: 109,
      zooFlag: false
    },
    {
      no: 9,
      product_name: "panda",
      imgPath: "https://noteitemlist.netlify.com/pic/panda.png",
      amount: 600,
      shipping_fee: 80,
      model_number: 108,
      zooFlag: true
    },
    {
      no: 10,
      product_name: "penguin",
      imgPath: "https://noteitemlist.netlify.com/pic/penguin.png",
      amount: 1200,
      shipping_fee: 50,
      model_number: 103,
      zooFlag: true
    },
    {
      no: 11,
      product_name: "pig",
      imgPath: "https://noteitemlist.netlify.com/pic/pig.png",
      amount: 500,
      shipping_fee: 100,
      model_number: 105,
      zooFlag: true
    },
    {
      no: 12,
      product_name: "popcorn",
      imgPath: "https://noteitemlist.netlify.com/pic/popcorn.png",
      amount: 1300,
      shipping_fee: 110,
      model_number: 107,
      zooFlag: false
    },
    {
      no: 13,
      product_name: "tako",
      imgPath: "https://noteitemlist.netlify.com/pic/tako.png",
      amount: 700,
      shipping_fee: 90,
      model_number: 104,
      zooFlag: true
    },
    {
      no: 14,
      product_name: "post",
      imgPath: "https://noteitemlist.netlify.com/pic/post.png",
      amount: 1400,
      shipping_fee: 80,
      model_number: 116,
      zooFlag: false
    },
    {
      no: 15,
      product_name: "castle",
      imgPath: "https://noteitemlist.netlify.com/pic/castle.png",
      amount: 1500,
      shipping_fee: 90,
      model_number: 117,
      zooFlag: false
    },
    {
      no: 16,
      product_name: "note",
      imgPath: "https://noteitemlist.netlify.com/pic/notebook.png",
      amount: 1700,
      shipping_fee: 0,
      model_number: 115,
      zooFlag: false
    },
    {
      no: 34,
      product_name: "game",
      imgPath: "https://noteitemlist.netlify.com/pic/game.png",
      amount: 1600,
      shipping_fee: 50,
      model_number: 114,
      zooFlag: false
    },
    {
      no: 1,
      product_name: "coffee",
      imgPath: "https://noteitemlist.netlify.com/pic/coffee.png",
      amount: 800,
      shipping_fee: 150,
      model_number: 110,
      zooFlag: false
    },
    {
      no: 2,
      product_name: "deer",
      imgPath: "https://noteitemlist.netlify.com/pic/deer.png",
      amount: 100,
      shipping_fee: 0,
      model_number: 106,
      zooFlag: true
    },
    {
      no: 3,
      product_name: "duck",
      imgPath: "https://noteitemlist.netlify.com/pic/duck.png",
      amount: 300,
      shipping_fee: 0,
      model_number: 101,
      zooFlag: true
    },
    {
      no: 4,
      product_name: "fox",
      imgPath: "https://noteitemlist.netlify.com/pic/fox.png",
      amount: 400,
      shipping_fee: 120,
      model_number: 100,
      zooFlag: true
    },
    {
      no: 5,
      product_name: "goldfish",
      imgPath: "https://noteitemlist.netlify.com/pic/goldfish.png",
      amount: 900,
      shipping_fee: 0,
      model_number: 112,
      zooFlag: true
    },
    {
      no: 6,
      product_name: "horse",
      imgPath: "https://noteitemlist.netlify.com/pic/horse.png",
      amount: 1100,
      shipping_fee: 50,
      model_number: 102,
      zooFlag: true
    },
    {
      no: 7,
      product_name: "ladybug",
      imgPath: "https://noteitemlist.netlify.com/pic/ladybug.png",
      amount: 1000,
      shipping_fee: 150,
      model_number: 111,
      zooFlag: true
    },
    {
      no: 8,
      product_name: "meat",
      imgPath: "https://noteitemlist.netlify.com/pic/meat.png",
      amount: 200,
      shipping_fee: 50,
      model_number: 109,
      zooFlag: false
    },
    {
      no: 9,
      product_name: "panda",
      imgPath: "https://noteitemlist.netlify.com/pic/panda.png",
      amount: 600,
      shipping_fee: 80,
      model_number: 108,
      zooFlag: true
    },
    {
      no: 10,
      product_name: "penguin",
      imgPath: "https://noteitemlist.netlify.com/pic/penguin.png",
      amount: 1200,
      shipping_fee: 50,
      model_number: 103,
      zooFlag: true
    },
    {
      no: 11,
      product_name: "pig",
      imgPath: "https://noteitemlist.netlify.com/pic/pig.png",
      amount: 500,
      shipping_fee: 100,
      model_number: 105,
      zooFlag: true
    },
    {
      no: 12,
      product_name: "popcorn",
      imgPath: "https://noteitemlist.netlify.com/pic/popcorn.png",
      amount: 1300,
      shipping_fee: 110,
      model_number: 107,
      zooFlag: false
    },
    {
      no: 13,
      product_name: "tako",
      imgPath: "https://noteitemlist.netlify.com/pic/tako.png",
      amount: 700,
      shipping_fee: 90,
      model_number: 104,
      zooFlag: true
    },
    {
      no: 14,
      product_name: "post",
      imgPath: "https://noteitemlist.netlify.com/pic/post.png",
      amount: 1400,
      shipping_fee: 80,
      model_number: 116,
      zooFlag: false
    },
    {
      no: 15,
      product_name: "castle",
      imgPath: "https://noteitemlist.netlify.com/pic/castle.png",
      amount: 1500,
      shipping_fee: 90,
      model_number: 117,
      zooFlag: false
    },
    {
      no: 16,
      product_name: "note",
      imgPath: "https://noteitemlist.netlify.com/pic/notebook.png",
      amount: 1700,
      shipping_fee: 0,
      model_number: 115,
      zooFlag: false
    },
    {
      no: 51,
      product_name: "game",
      imgPath: "https://noteitemlist.netlify.com/pic/game.png",
      amount: 1600,
      shipping_fee: 50,
      model_number: 114,
      zooFlag: false
    }
  ]
};
export const mutations = {
  [types.ITEM_FIND](state, payload) {
    state.finditem = payload;
  },
  [types.ACCOUNT_UPDATE](state, payload) {
    state.account = payload;
  },
  [types.PAGE_UPDATE](state, payload) {
    state.page = payload;
  },
  [types.ITEMDETAIL_UPDATE](state, payload) {
    state.itemDetail = payload;
  },
  [types.ITEMDETAILSRC_UPDATE](state, payload) {
    state.itemDetailSrc = payload;
  },
  [types.ITEMS_UPDATE](state, payload) {
    state.items = payload;
  },
  [types.PAGELENGTH_UPDATE](state, payload) {
    state.itemLength = payload;
  }
};
