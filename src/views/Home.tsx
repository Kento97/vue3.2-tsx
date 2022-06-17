import TestCom from "@/components/TestCom";
import TestComRef from "@/components/TestComRef";
import TestScroll from "@/components/TestScroll";
import TestTeleport from "@/components/TestTeleport";
import type { ComRefType } from "@/types/HomeType";
import { computed, defineComponent, ref, watch, watchEffect } from "vue";
import { useRouter } from "vue-router";
import "./Home.scss";

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

    //v-show
    const isShowDiv = ref(false);
    const toggle_isShowDiv = () => {
      isShowDiv.value = !isShowDiv.value;
    };

    //v-for
    const numberList = ref(Array.from(Array(5), (v: number, k: number) => k));
    const renderList = () => (
      <ul class={"list-ul"}>
        {numberList.value.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    );
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
      bar: (props: { name: string }) => <span>{props.name}</span>,
    };

    //v-model
    const inputValue = ref("");
    // const handleChange = (e: Event) => {
    //   inputValue.value = (e.target as HTMLInputElement).value;
    // };

    //watch
    watch(inputValue, (newVal) => {
      console.log("inputValue变化了");
    });
    //watchEffect
    // watchEffect(() => {
    //   console.log("inputValue变化了", inputValue.value);
    // });

    //computed
    const computedData = ref(1);
    const testComputed = computed(() => {
      return computedData.value * 2;
    });
    const changeComputedDep = () => {
      computedData.value += 1;
    };
    //Teleport
    const isShowModal = ref(false);
    const openModal = () => {
      isShowModal.value = true;
    };
    const handleModalCloseEventCallback = () => {
      isShowModal.value = false;
    };

    //组件ref
    const ComRef = ref<ComRefType | null>(null);
    const alertDingzhen = () => {
      ComRef.value!.tellMeYourName();
    };

    //router
    const router = useRouter();
    const goAboutPage = () => {
      router.push("/about");
    };
    return () => (
      <div>
        {/* v-if */}
        {booleanToDom(ok.value)}
        <button onClick={toggle}>改变ok的值{`${ok.value}`}</button>
        {/* v-show */}
        <div v-show={isShowDiv.value}>vshow</div>
        <button onClick={toggle_isShowDiv}>测试v-show</button>
        {/* v-for */}
        {renderList()}
        {/* v-on */}
        <button onClick={addListItem}>新增数组元素</button>

        {/* 渲染插槽 */}
        <TestCom>{slots}</TestCom>

        {/* 计算属性 */}
        <div>计算属性:{testComputed.value}</div>
        <button onClick={changeComputedDep}>改变计算属性依赖</button>
        {/* v-model */}
        <div>{inputValue.value}</div>
        <input
          type="text"
          v-model={inputValue.value}
          placeholder="测试vmodel"
          title="VModel"
        />
        <TestScroll />

        {/* Teleport */}
        <button onClick={openModal}>open Teleport</button>
        <TestTeleport
          isShowTeleport={isShowModal.value}
          onCloseTeleport={handleModalCloseEventCallback}
        />
        <TestComRef ref={ComRef} />
        <button onClick={alertDingzhen}>测试组件ref</button>

        {/* router */}
        <button onClick={goAboutPage}>前往about页面</button>
      </div>
    );
  },
});
