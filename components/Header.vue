<template>
    <nav class="header">
        <div class="container header-inner">
            <a class="logo" href="/">
              <img alt="Simpego Logo" src="/images/logo.png" width="104" height="27">
            </a>
          <a class="link" aria-current="false" href="https://www.simpego.ch/kontakt/">Kontakt</a>
        </div>
    </nav>
</template>

<style lang="scss">

.header {
  background-color: white;
  border-bottom: 1px solid #ececec;
  height: $header-height;
  left: 0;
  padding-left: $sectionPadding;
  padding-right: $sectionPadding;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 30;

  .header-inner {
    align-items: center;
    display: flex;
    height: 100%;
  }

  a {
    padding: 0.5rem 0;
  }

  .logo {
    display: flex;
    align-items: center;
  }

  .link {
    color: $text;
    margin-left: auto;
  }
}



</style>
