import { defineComponent, PropType, ref } from "vue";
import "./App.scss";
import { Header } from "./views/Header";
import { Main } from "./views/Main";
import { Nav } from "./views/Nav";
export const App = defineComponent({
  setup: (props, context) => {
    const number = ref(0);
    const add = () => {
      number.value++;
    };
    return () => (
      <div class="wrapper">
        <Header />
        <div class="content">
          <Nav />
          <Main />
        </div>
      </div>
    );
  },
});
