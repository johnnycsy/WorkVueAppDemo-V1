<template>
  <div class="home_body">
    <Header></Header>
    <div class="content_body">
      <left-view></left-view>
      <right-view
          :data-list="_this.dataList"
          :pagination="_this.pagination"
      ></right-view>
    </div>
  </div>
</template>

<script>
export default {
  name: `Home`,
};
</script>

<script setup>
import Header from "@/components/Header/Header.vue";
import LeftView from "@/components/LeftView/LeftView.vue";
import RightView from "@/components/RightView/RightView.vue";
import httpTools from "@/common/HttpTools";
import DateTools from "@/common/DateTools";
import {onMounted, reactive} from "vue";

const _this = reactive({
  dataList: [],
  pagination: {},
});

onMounted(() => {
  GetPageDataList();
});

const GetPageDataList = async () => {
  const url = "https://public.connectnow.org.uk/applicant-test/";
  const response = await Promise.all([httpTools.Get(url)]);
  const db = response[0];
  for (const dbKey in db) {
    let item = db[dbKey];
    item.rating = Number(item.rating).toFixed(0);
    item.datatime = DateTools.TimeFormat(item.first_release_date);
    _this.dataList.push(item);
  }
  // _this.dataList = db.map((res) => {
  //   res.rating = Number(res.rating).toFixed(0);
  //   res.datatime = DateTools.TimeFormat(res.first_release_date);
  //   return res;
  // });
};
</script>

<style scoped>
.content_body {
  align-items: flex-start;
}

.anticon {
  color: var(--text-white) !important;
}

@media screen and (max-width: 50rem) {
  .content_body {
    display: block;
  }
}
</style>
