<template>
    <section class="hello-world">
        <div class="hello-world__text">
            <div class="hello">
                Hello
            </div>
            <div class="world">
                World
            </div>
        </div>
        <div class="digital-intro">
            Welcome to a digital realm where the lines between pixels and purpose blur, and where the symphony of code
            dances with the existential melodies of the soul. As you navigate through this digital expanse, crafted by
            the hands of a frontend developer grappling with the existential abyss, you are invited to ponder the
            profound questions that echo within the corridors of cyberspace.
        </div>
    </section>
</template>
<script setup></script>

<style scoped lang="scss">
.hello-world {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    &__text {
        font-size: 5rem;
        position: relative;
        display: flex;
        gap: 7px;
        overflow: hidden;

        .hello {
            animation: animate-exit-left .5s 1s linear forwards;
        }

        .world {
            animation: animate-exit-right .5s 1s linear forwards;
        }

        &:before {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            background-color: var(--color-bg);
            // background-color: black;
            z-index: 1;
            animation: animate-hello-world .7s linear forwards;
        }
    }
}

.digital-intro {
    // display: none;
    opacity: 0;
    width: 0;
    height: 0;
    overflow: hidden;
    animation: animate-fade-in 2s 2s linear forwards;
    max-width: 90%;
    line-height: 140%;
    font-size: 4rem;
}

@keyframes animate-hello-world {
    from {
        // width: 100%;
        // opacity: 1;
    }

    99% {
        transform: translateX(100%);
    }

    100% {
        // width: 0;
        transform: translateX(100%);
        // display: none;
    }
}

@keyframes animate-exit-left {
    from {
        transform: translateX(0)
    }

    to {
        transform: translateX(-100%);
        display: none;
    }
}

@keyframes animate-exit-right {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(100%);
        display: none;
    }
}

@keyframes animate-fade-in {
    from {
        opacity: 0;
        display: block;
        width: auto;
        height: auto;
        overflow: visible;
    }

    to {
        opacity: 1;
        display: block;
        width: auto;
        height: auto;
        overflow: visible;
    }
}

@keyframes animate-fade-out {
    0% {
        opacity: 1;
        display: block;
        width: auto;
        height: auto;
        overflow: visible;
    }

    99% {
        opacity: 0;
    }

    100% {
        display: none;
    }
}
</style>