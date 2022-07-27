import { defineComponent, PropType } from "vue";
import { Icon } from "../shared/icon";
import s from "./Header.module.scss";
export const Header = defineComponent({
  // props: {
  //   name: {
  //     type: String as PropType<string>,
  //   },
  // },
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.title}>
          <svg>
            <use xlinkHref="#qrcode"></use>
          </svg>
          <div class={s.titleContent}>天津市突发事件预警信息发布系统</div>
        </div>
        <div class={s.content}>
          <div>
            <Icon name="waitting" />
            <span>代办事项</span>
          </div>
          <div>
            <Icon name="tongzhi" />
            <span>通知</span>
          </div>
          <div>气象局</div>
        </div>
      </div>
    );
  },
});
