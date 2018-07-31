<template>
    <footer class="footer">
        <div class="container">
            <nav>
                <ul class="footer__menu">
                    <li class="logo"><a class="active" aria-current="true" alt="Startseite" href="https://www.simpego.ch/"><img alt="Simpego Logo" src="https://www.simpego.ch/static/simpego_logo@2x.ca11248d.png" width="104" height="27"></a></li>
                    <li><a aria-current="false" href="https://www.simpego.ch/about/">Über Simpego</a></li>
                    <li><a aria-current="false" href="https://www.simpego.ch/faq/">FAQ</a></li>
                    <li><a href="https://blog.simpego.ch?utm_medium=website&amp;utm_source=simpego.ch" rel="noopener noreferrer" target="_blank">Blog</a></li>
                    <li><a aria-current="false" href="https://www.simpego.ch/rechtliches/">Rechtliches</a></li>
                    <li><a aria-current="false" href="https://www.simpego.ch/kontakt/">Kontakt</a></li>
                </ul>
            </nav>
            <ul class="footer__trust-badges">
                <li><a href="https://www.finma.ch" rel="noopener noreferrer" target="_blank"><img alt="Logo der Finanzmarktaufsicht (Finma)" src="https://www.simpego.ch/static/finma@2x.860717e1.png" width="107" height="28"></a></li>
                <li><img alt="Diese Seite benutzt SSL-Verschlüsselung" src="https://www.simpego.ch/static/ssl-checkmark@2x.bfdb884d.png" width="27" height="30"></li>
            </ul>
        </div>
        <ul class="social-media-links">
            <li><a aria-label="Facebook" href="https://www.facebook.com/simpego" rel="noopener noreferrer" target="_blank"><img alt="Facebook" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAABGdBTUEAALGPC/xhBQAAAZRJREFUSA3tVLFOAkEQ3eEONCaoBTGRDzAUljbaW1KpJMTCRGtbYyz8DL/AAhO5hj/Alkp7IlZKLNSc8RRux5kgjTcDd8mWt83tvXnzdvbN7oJJOdrt9vpohMfW4q4xsGEMVgBMgdJ/EM0nzd8IH8I8PUSEViu4RLTnxF2cx58pOBG7vaEKDuYJTePedCJ9a7XNCxI7lWIaplbY6XQqYfg9oCqXtGQJ9yWQsTCMTqi6TGKcpwpSx6ibyBxtfADAAwWfaBeWSfSPMwRxS1Oi1G65vLBXr9df/3P4HCVGr9cr0nZXEoE/gM7cmSTGYVGw3x+uamKMe171XouLgr4fqd0nn8aNxs5XJkGNnAYXK0yTqHGcC/LFP0yuZpfpVblK4nzWTAzgHUkxxPjZtza+loIaRsfJo0Qtp+V4y/DoVLBQcCxoLQycVlgqWbdbtrY6oNcGusmOYpGw7SQ+eaKo03dC7J2vpHhngyBYi6L4RUjiN2/cbO7zguJw6iGvkAuKPmcCcw8z2SWScw9FWzKBuYeZ7BLJv+bufkmZN8cSAAAAAElFTkSuQmCC" width="10" height="20"></a></li>
            <li><a aria-label="Twitter" href="https://twitter.com/Simpego_Schweiz" rel="noopener noreferrer" target="_blank"><img alt="Twitter" src="https://www.simpego.ch/static/icon-twitter@2x.28059266.png" width="22" height="18"></a></li>
            <li><a aria-label="Instagram" href="https://www.instagram.com/simpego" rel="noopener noreferrer" target="_blank"><img alt="Instagram" src="https://www.simpego.ch/static/icon-instagram@2x.10cb49b0.png" width="20" height="20"></a></li>
        </ul>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.footer {
  margin-top: 1em;
  padding-bottom: 80px; //Space for FooterCheckout
  padding-left: $sectionPadding;
  padding-right: $sectionPadding;

  @include tablet {
    padding-bottom: 0;
  }

  a {
    color: $text-strong;
    display: block;
  }

  .container {
    align-items: flex-end;
    display: flex;
    margin-top: 2em;

    @include tablet {
      align-items: center;
    }
  }

  &__menu {
    @include tablet {
      display: flex;
    }

    a {
      padding: 0.5em;
    }

    .logo {
      margin-right: 1em;
    }
  }

  &__trust-badges {
    display: flex;
    margin-left: auto;
  }

  .social-media-links {
    justify-content: center;
    margin-top: 1em;
  }
}

</style>
