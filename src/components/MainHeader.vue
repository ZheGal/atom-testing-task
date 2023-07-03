<template>
  <header>
    <div class="atom-logo">
      <img src="/img/logo.svg" class="atom-logo__image" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.atom-logo {
  @apply flex w-full justify-center p-6;

  &__image {
    @apply w-[150px] select-none pointer-events-none;
  }
}
</style>
