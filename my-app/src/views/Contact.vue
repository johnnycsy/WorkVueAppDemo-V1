<template>
  <div class="home_body">
    <Header></Header>
    <div class="content_body padding-tb">
      <div class="content">
        <a-typography-title class="content">GET IN TOUCH</a-typography-title>
        <a-typography-paragraph class="content">
          Trysail transom furl Sea Legs scallywag jack Ketch chandler mizzenmast
          reefsails skysail.Shiver me timbers loot bucko belaying pin Sea Legs
          boom gunwalls booty jury mast fore.
        </a-typography-paragraph>
        <div class="margin-bottom padding-bottom"></div>
        <a-typography-title class="content" :level="2">Contact Form </a-typography-title>
        <div class="margin-top padding">
          <a-form :layout="'vertical'">
            <a-row :gutter="16">
              <a-col :span="12">
                <a-form-item label="Name">
                  <a-input placeholder="" />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="Email Address">
                  <a-input placeholder="" />
                </a-form-item>
              </a-col>
              <a-col :span="24">
                <a-form-item label="Message">
                  <a-textarea :rows="8"/>
                </a-form-item>
              </a-col>
              <a-col :span="24">
                <div class="text-align-right">
                  <a-button type="primary">Send</a-button>
                </div>
              </a-col>
            </a-row>
          </a-form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contact",
};
</script>

<script setup>
import Header from "@/components/Header/Header.vue";
</script>

<style>
.content_body {
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  color: var(--text-color) !important;
  width: 90%;
  max-width: 46.875rem;
}

.ant-form-item-label > label{
  color: var(--text-color) !important;
}
</style>
