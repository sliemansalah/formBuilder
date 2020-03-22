<template>
  <div>

        <slot name="top">
    </slot>
    <!-- A slot tag without a name is a catch-all,
    it will contain any content that doesn't have
    a `slot=""` attribute. -->

    <hr>

    <p>I'm the child component!</p>
    <!-- Content from the parent gets rendered here. -->
    <slot></slot>
    <hr>
    <!-- Elements injected with the `slot="top-bun"`
    attribute will end up in here. -->
    <slot name="bottom">
    </slot>
    
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>