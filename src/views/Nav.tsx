import { defineComponent, PropType } from "vue";
import s from "./Nav.module.scss";
export const Nav = defineComponent({
  // props: {
  //   name: {
  //     type: String as PropType<string>,
  //   },
  // },
  setup: (props, context) => {
    return () => <div class={s.wrapper}>
      nav  fe 
    </div>;
  },
});
