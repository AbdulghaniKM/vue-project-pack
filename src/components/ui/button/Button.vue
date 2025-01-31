<script setup>
  import { cn } from '@/lib/utils';
  import { Icon } from '@iconify/vue';
  import { Primitive } from 'radix-vue';
  import { buttonVariants } from '.';

  const props = defineProps({
    variant: { type: null, required: false },
    size: { type: null, required: false },
    class: { type: null, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false, default: 'button' },
    iconPosition: { type: String, default: 'start' },
    icon: { type: String, required: false },
    iconClass: { type: String, default: 'h-5 w-5' },
    animationClass: { type: String, required: false },
  });
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="
      cn(
        buttonVariants({ variant, size }),
        'inline-flex items-center gap-2',
        props.animationClass,
        props.class
      )
    "
  >
    <Icon
      v-if="icon && iconPosition === 'start'"
      :icon="icon"
      :class="iconClass"
    />
    <slot />
    <Icon
      v-if="icon && iconPosition === 'end'"
      :icon="icon"
      :class="iconClass"
    />
  </Primitive>
</template>
