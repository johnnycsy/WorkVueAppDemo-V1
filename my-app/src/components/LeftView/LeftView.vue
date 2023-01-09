<template>
  <div class="left_view">
    <div class="padding">
      <div class="margin-bottom padding-bottom-sm text-bold">
        <div class="padding-bottom-sm">Filter Results</div>
        <div class="padding-bottom-sm"></div>
      </div>

      <div class="margin-bottom padding-bottom-sm text-bold">
        <div class="padding-bottom-sm">Name(contains)</div>
        <div class="padding-bottom-sm">
          <a-input placeholder="Text string" />
        </div>
      </div>

      <div class="lv_max">
        <div class="margin-bottom padding-bottom-sm text-bold">
          <div class="padding-bottom-sm">Minimum Score</div>
          <div class="padding-bottom-sm">
            <a-input placeholder="1 - 10" />
          </div>
        </div>

        <div class="margin-bottom padding-bottom-sm text-bold">
          <div class="padding-bottom-sm">Order By</div>
          <div class="padding-bottom-sm">
            <a-input-group compact>
              <a-button type="primary">
                <template #icon>
                  <arrow-up-outlined />
                </template>
              </a-button>
              <a-select
                style="width: calc(100% - 32px)"
                class="select-input"
              >
                <a-select-option class="select-input" value="Home"
                  >Home
                </a-select-option>
                <a-select-option class="select-input" value="Company"
                  >Company
                </a-select-option>
              </a-select>
            </a-input-group>
          </div>
        </div>
      </div>

      <a-row type="flex" class="lv_max800">
        <a-col :flex="1" class="margin-right">
          <div class="margin-bottom padding-bottom-sm text-bold">
            <div class="padding-bottom-sm">Minimum Score</div>
            <div class="padding-bottom-sm">
              <a-input placeholder="1 - 10" />
            </div>
          </div>
        </a-col>
        <a-col :flex="4">
          <div class="margin-bottom padding-bottom-sm text-bold">
            <div class="padding-bottom-sm">Order By</div>
            <div class="padding-bottom-sm">
              <a-input-group compact>
                <a-button type="primary">
                  <template #icon>
                    <arrow-up-outlined />
                  </template>
                </a-button>
                <a-select
                  style="width: calc(100% - 32px)"
                  class="select-input"
                >
                  <a-select-option class="select-input" value="Home"
                    >Home
                  </a-select-option>
                  <a-select-option class="select-input" value="Company"
                    >Company
                  </a-select-option>
                </a-select>
              </a-input-group>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftView",
};
</script>
<script setup>
import { ArrowUpOutlined } from "@ant-design/icons-vue";
</script>

<style scoped>
.left_view {
  min-width: var(--left-body-w);
  /*min-height: var(--body-height);*/
}

.left_view > div {
  background: var(--sub-background);
  margin-right: 2rem;
}

.lv_max {
  display: block;
}

.lv_max800 {
  display: none;
}

@media screen and (max-width: 50rem) {
  .left_view > div {
    width: 95%;
    margin: auto;
  }

  .lv_max {
    display: none;
  }

  .lv_max800 {
    display: flex;
  }
}

@media screen and (max-width: 28.125rem) {
  .lv_max {
    display: block;
  }

  .lv_max800 {
    display: none;
  }
}
</style>
