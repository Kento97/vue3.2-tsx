import { defineComponent, ref } from "vue";
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
import "./index.scss";

export default defineComponent({
  setup() {
    const list = ref([
      {
        title: "Vue3.0 无缝滚动组件展示数据第1条",
        date: Date.now(),
      },
      {
        title: "Vue3.0 无缝滚动组件展示数据第2条",
        date: Date.now(),
      },
      {
        title: "Vue3.0 无缝滚动组件展示数据第3条",
        date: Date.now(),
      },
      {
        title: "Vue3.0 无缝滚动组件展示数据第4条",
        date: Date.now(),
      },
      {
        title: "Vue3.0 无缝滚动组件展示数据第5条",
        date: Date.now(),
      },
      {
        title: "Vue3.0 无缝滚动组件展示数据第6条",
        date: Date.now(),
      },
      {
        title: "Vue3.0 无缝滚动组件展示数据第7条",
        date: Date.now(),
      },
      {
        title: "Vue3.0 无缝滚动组件展示数据第8条",
        date: Date.now(),
      },
      {
        title: "Vue3.0 无缝滚动组件展示数据第9条",
        date: Date.now(),
      },
    ]);
    const isStop = ref(false);
    const handleClick = () => {
      isStop.value = !isStop.value;
    };
    return () => {
      return (
        <>
          <div class="scroll">
            <Vue3SeamlessScroll list={list.value} modelValue={isStop.value}>
              {list.value.map((item, index) => {
                return (
                  <div key={index} class="item">
                    <span>{item.title}</span>
                    <span>{item.date}</span>
                  </div>
                );
              })}
            </Vue3SeamlessScroll>
          </div>
          <button onClick={handleClick}>点击暂停/开始</button>
        </>
      );
    };
  },
});
