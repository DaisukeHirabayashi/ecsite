import * as types from "./mutation-types"; //mutation-typesをImportします

export const state = {
  finditem: "",
  account: {},
  itemLength: 3,
  page: 1,
  itemDetail: {},
  itemDetailSrc: "",
  items: [],
  purchaseItemId: 3
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
  },
  [types.PURCHASEITEM_UPDATE](state, payload) {
    state.purchaseItemId = payload;
  }
};
