<template lang="pug">
  div
    nav.navbar.navbar-expand-lg.navbar-dark.bg-dark
      router-link.navbar-brand(to="/") EZ2BUG(Alpha)
      a.btn.btn-outline-info.my-2.my-sm-0(href="https://forms.gle/wEvZ1M36BcWXa4D8A" target="blank") report
    router-view
</template>

<script>
export default {}
</script>
