import { h } from "vue";

export default {
  props: {
    level: {
      type: Number,
    },
  },
  setup({ level }, { slots }) {
    return () =>
      h(`h${level}`, null, {
        header: () => h("div", "aa"),
        default: () => slots,
      });
  },
};
