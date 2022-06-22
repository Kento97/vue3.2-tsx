import { defineComponent, toRefs, type PropType } from "vue";

export default defineComponent({
  props: {
    defaultCom: {
      type: Object as PropType<JSX.Element>,
      required: true,
    },
    headerCom: {
      type: Object as PropType<JSX.Element>,
      required: true,
    },
  },
  setup(props) {
    const { defaultCom, headerCom } = toRefs(props);
    return () => (
      <>
        <div>{defaultCom.value}</div>
        <div>{headerCom.value}</div>
      </>
    );
  },
});
