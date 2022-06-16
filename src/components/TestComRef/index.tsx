import { defineComponent } from "vue";

export default defineComponent({
  setup(_, { expose }) {
    const tellMeYourName = () => {
      alert("尼谷丁真");
    };
    expose({
      tellMeYourName
    });
    return () => <div></div>;
  },
});
