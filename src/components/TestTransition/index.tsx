import { defineComponent, ref, Transition } from "vue";
import "./index.module.scss";
const Index = defineComponent({
  setup() {
    const show = ref(true);
    const Slots = {
      default: () => show.value && <p>hello</p>,
    };
    return () => (
      <>
        <h1>↓↓↓测试transition ↓↓↓</h1>
        <button
          onClick={() => {
            show.value = !show.value;
          }}
        >
          Toggle
        </button>
        <Transition>{Slots}</Transition>
      </>
    );
  },
});
export default Index;
