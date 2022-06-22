import { defineComponent, type PropType } from "vue";

export default defineComponent({
  props: {
    myBtn: {
      type: Object as PropType<JSX.Element>,
      required: true,
    },
  },
  setup({ myBtn }) {
    return () => <div>{myBtn}</div>;
  },
});
