<template>
  <div class="header">
    <div class="content_body">
      <!--
            <div
              class="app-body header_logo padding-left text-bold"
              @click="onPage('/')"
            ></div>
      -->
      <div class="app-body header_navigation padding-left text-bold">
        <div class="text_bg margin-lr" @click="onPage('/')">
          <div :class="[route.path === '/' ? 'text_bg' : 'text_no']">
            VIDEO GAMES
          </div>
          <div class="text">VIDEO GAMES</div>
        </div>
        <div class="text_bg margin-lr" @click="onPage('/Contact')">
          <div :class="[route.path === '/Contact' ? 'text_bg' : 'text_no']">
            CONTACT
          </div>
          <div class="text">CONTACT</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
  name: "Header",
};
</script>

<script setup>
import {nextTick} from "vue";
import {useRoute, useRouter} from "vue-router";

const route = useRoute();
const router = useRouter();

const onPage = async (event) => {
  await router.push({path: event});
  await nextTick();
};
</script>

<style scoped>
.text_bg {
  font-size: 4rem;
  color: rgba(16, 29, 49, 0.95);
  position: relative;
  margin: 0 2rem;
}

.text_no {
  font-size: 4rem;
  color: rgba(16, 29, 49, 0);
  position: relative;
  margin: 0 2rem;
}

.text {
  position: absolute;
  color: var(--text-white);
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 2rem;
  text-align: left;
  padding-left: 2rem;
  margin: 1rem 3rem 0 3rem;
}

.header {
  min-height: var(--header-height);
  background: var(--main-background);
}

.header_navigation {
  /*width: var(--right-body-w);*/
  display: flex;
  width: 100%;
}

.header_logo {
  min-width: var(--left-body-w);
  text-align: center;
}

.content_body {
  margin: auto;
  max-width: var(--content-width);
  min-height: var(--header-height);
  display: flex;
  flex-wrap: nowrap;
  font-size: 2rem;
}

@media screen and (max-width: 50rem) {
  .text_bg {
    font-size: 2rem;
  }

  .text_no {
    font-size: 2rem;
  }

  .text {
    font-size: 1rem;
  }

  .content_body {
    display: flex;
    flex-wrap: wrap;
  }

  .header_logo {
    width: 100%;
    text-align: left;
  }

  .header_navigation {
    width: 100%;
    text-align: left;
    flex-wrap: wrap;
  }
}
</style>
