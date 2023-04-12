<template>
    <footer class="footer">
        <p>
            <span class="logo logo--smaller"><span class="logo__txt">BOSTROM</span></span>
            <small class="footer__copyright">© Nell Maissin&nbsp;—&nbsp;2023</small>
        </p>
        <ul class="otherLinks">
            <li class="otherLinks__link"><a href="#">Crédits</a></li>
            <li class="otherLinks__link"><a href="#">Case Study</a></li>
        </ul>
        
    </footer>
</template>

<script setup>


</script>

<style lang="scss">

.footer{
    background-color: var(--grey-black);
    padding: 32px 16px 64px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    &__copyright{
        display: block;
        margin-top: 16px;
        font: var(--agrandir-default);
    }
}

.otherLinks{
    display: flex;
    justify-content: center;
    gap: 32px;

    &__link{
        font: var(--exo-16px-medium-maj);
        text-transform: uppercase;
        letter-spacing: .2rem;
        padding-bottom: 4px;
        border-bottom: 1px solid var(--c-txt);

        & a:active{
            filter: drop-shadow(-2px -2px 0 var(--main-cyan)) drop-shadow(2px 2px 0 var(--main-magenta));
        }
    }
}

</style>