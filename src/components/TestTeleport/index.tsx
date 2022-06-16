import { defineComponent, Teleport } from "vue";
import "./index.scss";
export default defineComponent({
  props: {
    isShowTeleport: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["CloseTeleport"],
  setup(props, { emit }) {
    const closeModal = () => {
      emit("CloseTeleport");
    };
    return () =>
      props.isShowTeleport && (
        <div>
          <Teleport to={"body"}>
            <div class={"Teleport_body"}>
              <div class={"Teleport_content"}>我是Teleport内容</div>
              <button class={"Teleport_btn"} onClick={closeModal}>
                关闭modal
              </button>
            </div>
          </Teleport>
        </div>
      );
  },
});
