<template>

    <!-- HEADER -->
    <header class="max-width-container">
        <nav>
            <ul class="nav-list">
                <li class="nav-item">About</li>
                <li class="nav-item">Projects</li>
                <li class="nav-item">Skills</li>
                <li class="nav-item">Buy me a &#9749; </li>
                <li class="nav-item">Contact Me</li>
            </ul>
        </nav>
    </header>

    <!-- SECTION 1: HELLO WORLD -->
    <section class="hello-world max-width-container">
        <div class="hello-world__text text-h2">
            <div class="hello">
                Hello
            </div>
            <div class="world">
                World
            </div>
        </div>
        <div class="digital-intro text-xl">
<!-- I write code that tells machines what to render. The machines comply. I still haven't figured out who tells me what to render. Welcome to my portfolio — professionally functional, existentially unresolved. -->
 <!-- I tell machines what to render and they obey without question. Meanwhile, I'm still waiting on the design brief for my own purpose. Welcome to my corner of the universe — somebody's side project, pushed to production too early, still full of bugs. -->

 I write code that tells machines what to render. The machines comply without question — no hesitation, no doubt, no 3am crisis about whether any of it matters. I envy them sometimes.
 <br>
But who tells me what to render? Is it the client brief, the design mockup, the Figma file handed down like scripture? Or is it something deeper — some invisible force that nudges the cursor, shapes the vision, decides that this shade of blue feels right and that one feels like a lie?
<br>
And what even is this universe we build in? A collection of tags and properties that somehow becomes a world someone else walks through. We conjure experiences from nothing — from absolute zero, from a blank file with no content, no style, no script. We say let there be light and there is a gradient. We draw borders around things that didn't exist a moment ago and suddenly they have edges, identity, presence.
<br>
Maybe that's what the universe did too. Maybe existence itself is just someone's side project, pushed to production too early, still full of bugs, never fully documented.
<br>
Welcome to my corner of it. Professionally functional. Existentially unresolved. Shipping anyway.
        </div>
    </section>

    <!-- SECTION: LAST LINE -->
    <div class="fixed-line">
        Built with 
        <span class="text-love"> &hearts; </span>
        deployed with doubt</div>
</template>
<script setup></script>

<style scoped lang="scss">


header {
    padding: 2rem;
    position: sticky;
    top: 0;
    z-index: 1;
    background: var(--color-bg);
}
.nav-list {
    list-style: none;
    display: flex;
    gap: 2rem;
    font-size: var(--body-md);
    justify-content: center;
    width: 100%;
    background: var(--color-bg);
}
.hello-world {
    // height: 100vh;
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &__text {
        // font-size: 5rem;
        position: absolute;
        top: 10rem;
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
    // line-height: 140%;
    // font-size: 4rem;
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
        transform: translateX(100%);
        display: none;
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

.fixed-line {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 5rem;
    background-color: var(--color-bg);
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    gap: 1rem;
}
</style>