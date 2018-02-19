<template lang="html">
  <strong>{{ text }}</strong>
</template>


<script>
/**
 * Component documentation
 */
export default {
  name: 'example',
  props: {
    /**
     * Number of columns (1-12) the column should span.
     */
    span: {
      type: [String, Number],
    },
    /** Sm breakpoint and above */
    spanSm: {
      type: [String, Number],
    },
    /** Md breakpoint and above */
    spanMd: {
      type: [String, Number],
    },
  },
}
</script>
