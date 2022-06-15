import { defineComponent, ref } from "vue";

export default defineComponent({
  setup(_, { slots }) {
    return () => {
      return (
        <div>
          ** 插槽**
          {/* 默认插槽 */}
          <div>{slots.default && slots.default()}</div>
          {/* 具名插槽 */}
          <div>{slots.foo && slots.foo()}</div>
          ** 插槽**
        </div>
      );
    };
  },
});
