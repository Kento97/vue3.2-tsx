import { defineComponent, Fragment, onMounted, ref } from "vue";
import anime from "animejs/lib/anime.es.js";
import "./index.scss";
const Index = defineComponent({
  setup() {
    const myObject = {
      prop1: 0,
      prop2: "0%",
    };
    const inner = ref<HTMLDivElement | null>(null);
    onMounted(() => {
      anime({
        targets: myObject,
        prop1: 50,
        prop2: "100%",
        easing: "linear",
        round: 1,
        update: function () {
          inner.value!.innerHTML = JSON.stringify(myObject);
        },
      });
      anime({
        targets: ".inner2",
        width: "100%", // -> from '28px' to '100%',
        easing: "easeInOutQuad",
        direction: "alternate",
        loop: true,
      });
      anime({
        targets: ".btn",
        translateX: [100, 250], // from 100 to 250
        delay: 500,
        direction: "alternate",
        loop: true,
      });
    });
    return () => (
      <div class={"outer"}>
        <div class={"inner"} ref={inner}></div>
        <div class={"inner2"}></div>
        <div class={"btn"}></div>
      </div>
    );
  },
});
export default Index;
