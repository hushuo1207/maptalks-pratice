import { defineComponent, PropType } from "vue";
import s from "./Header.module.scss";
export const Header = defineComponent({
  // props: {
  //   name: {
  //     type: String as PropType<string>,
  //   },
  // },
  setup: (props, context) => {
    return () => <div class={s.wrapper}>header</div>;
  },
});
