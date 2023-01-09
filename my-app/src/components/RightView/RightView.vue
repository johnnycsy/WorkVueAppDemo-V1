<template>
  <div class="right_view padding-lr padding-bottom">
    <a-list
        item-layout="vertical"
        size="large"
        :pagination="_this.pagination"
        :data-source="_this.dataList"
    >
      <template #renderItem="{ item }">
        <a-list-item key="item.title" class="margin-bottom">
          <template #extra>
            <div class="extra-body">
              <a-avatar :size="64" style="background-color: #1890ff">
                <template #icon>{{ item.rating }}</template>
              </a-avatar>
            </div>
            <!--<img width="272" alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />-->
          </template>
          <a-list-item-meta :description="`Release Date:${item.datatime}`">
            <template #title>
              <a-typography-title :level="2"
              >{{ item.name }}
              </a-typography-title>
            </template>
          </a-list-item-meta>
          <div class="row_three">
            {{ item.summary }}
          </div>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script>
export default {
  name: "RightView",
};
</script>

<script setup>
import {reactive} from "vue";

const _props = defineProps({
  dataList: {type: Array},
  pagination: {},
});

const _this = reactive(_props);
</script>

<style scoped>
.row_three {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

.right_view {
  min-width: var(--right-body-w);
  background-color: var(--blank-background);
}

.ant-list-item {
  /*display: inline-block;*/
  background-color: var(--sub-background);
}

.ant-list-split .ant-list-item {
  border: none;
}

.extra-body {
  height: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
}

.ant-typography {
  color: var(--text-white) !important;
}

.anticon {
  color: #0e1a2b !important;
}

.ant-pagination-item-ellipsis {
  background: #ffffff !important;
}
</style>
