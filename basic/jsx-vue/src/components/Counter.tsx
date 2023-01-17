import { defineComponent, reactive } from "vue";


const Counter = defineComponent({
  props: {
    initValue: {
      type: Number,
      default: 0
    }
  },

  setup(props) {
    const state = reactive({ count: props.initValue });

    const onClick = () => {
      state.count++;
    };

    return () => (
      <div class="counter">
        <div class="text">Count: {state.count}</div>
        <button class="btn" onClick={onClick}>
          Add
        </button>
      </div>
    );
  }
});

export default Counter;
