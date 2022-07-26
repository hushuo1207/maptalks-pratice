import { defineComponent, PropType } from "vue";
import s from "./Main.module.scss";
export const Main = defineComponent({
  // props: {
  //   name: {
  //     type: String as PropType<string>,
  //   },
  // },
  setup: (props, context) => {
    return () => <div class={s.wrapper}>
      main  neitong 
    </div>;
  },
});
