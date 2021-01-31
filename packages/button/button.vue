<template>
  <button :class="defaultCalss" :disabled="loading">
    <vxui-icon :icon="icon" v-if="icon && !loading" class="icon"></vxui-icon>
    <vxui-icon icon="loading" v-if="loading" class="icon loading"></vxui-icon>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'vxuiButton',
  props: {
    type: {
      type:String,
      default: 'primary',
      validator(type) {
        const types = ['primary', 'warning', 'success', 'danger', 'info'];
        if (!types.includes(type)) {
          throw new Error(`button的type只能是 ${types.join(',')} 中的一种`);
        }
        return true;
      }
    },
    icon: String,
    loading: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'left'
    }
  },
  setup(props) {
    const defaultCalss = computed(() => [
      'vxui-button',
      `vxui-button-${props.type}`,
      `vxui-button-${props.position}`,
    ])
    return {
      defaultCalss,
    }
  }
}
</script>