<template>
  <div class="vxui-button-group">
    <slot></slot>
  </div>
</template>

<script>
import { onMounted } from 'vue'
export default {
  name: 'vxuiButtonGroup',
  setup() {
    onMounted(() => {
      let context = getCurrentInstance();
      let ele = context.ctx.$el;
      let children = ele.children;
      for (let i = 0; i < children.length; i++) {
        console.assert(children[i].tagName === "BUTTON", "必须子节点是button");
      }
    })
  }
}
</script>