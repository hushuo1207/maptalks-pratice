import { defineComponent, PropType } from "vue";
import s from "./Header.module.scss";
export const Header = defineComponent({
  // props: {
  //   name: {
  //     type: String as PropType<string>,
  //   },
  // },
  setup: (props, context) => {
    return () => <div class={s.wrapper}>
      <div class="title">天津市突发事件预警信息发布系统</div>
      <div class="content">heheda</div>
      </div>;
  },
});
