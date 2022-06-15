import TestCom from "@/components/TestCom";
import TestScroll from "@/components/TestScroll";
import { defineComponent, ref, watch, watchEffect } from "vue";

export default defineComponent({
  setup() {
    //v-if
    const ok = ref(false);
    const toggle = () => {
      ok.value = !ok.value;
    };
    const booleanToDom = (ok: boolean) => {
      const map = new Map([
        [true, <div>true</div>],
        [false, <div>false</div>],
      ]);
      return map.get(ok);
    };
    //v-for
    const numberList = ref(Array.from(Array(5), (v: number, k: number) => k));
    const addListItem = () => {
      numberList.value.push(numberList.value.length);
    };
    //插槽
    const slots = {
      foo: () => {
        return <div>foo</div>;
      },
      default: () => {
        return "default";
      },
    };

    //v-model
    const inputValue = ref("");
    const handleChange = (e: Event) => {
      inputValue.value = (e.target as HTMLInputElement).value;
    };

    //watch
    watch(inputValue, (newVal) => {
      console.log("inputValue变化了");
    });
    //watchEffect
    // watchEffect(() => {
    //   console.log("inputValue变化了", inputValue.value);
    // });
    return () => (
      <div>
        {/* v-if */}
        {booleanToDom(ok.value)}
        <button onClick={toggle}>改变ok的值{`${ok.value}`}</button>

        {/* v-for */}
        <ul style={{ height: "100px", overflow: "auto" }}>
          {numberList.value.map((num) => (
            <li key={num}>{num}</li>
          ))}
        </ul>
        {/* v-on */}
        <button onClick={addListItem}>新增数组元素</button>

        {/* 渲染插槽 */}
        <TestCom>{slots}</TestCom>

        {/* v-model */}
        <div>{inputValue.value}</div>
        <input
          type="text"
          value={inputValue.value}
          onInput={handleChange}
          placeholder="测试vmodel"
          title="VModel"
        />
        <TestScroll />
      </div>
    );
  },
});
