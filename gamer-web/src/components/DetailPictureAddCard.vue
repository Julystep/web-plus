<template>
  <el-card :body-style="{ padding: '0px' }" @click="reverseShow()">
    <div class="img_div">
      <div class="mask">
        <el-row>
          <el-col :span="4" :offset="10">
            <h1 class="icon">
              <el-icon><Plus /></el-icon>
            </h1>
          </el-col>
        </el-row>
      </div>
    </div>
  </el-card>
  <GamerInfo ref="game" :yearId="yearId" />
</template>
<script>
import { Plus } from "@element-plus/icons";
import GamerInfo from "./modalbox/GamerInfo.vue";
export default {
  name: "DetailPictureAddCard",
  data() {
    return {
      dialogTableVisible: false,
    };
  },
  props: {
    yearId: Number
  },
  inject: ["reload"],
  components: {
    Plus,
    GamerInfo,
  },

  methods: {
    reverseShow() {
      this.$refs.game.showDialog();
    },
    submit(form) {
      let result = this.$gameRequest.saveGame(form)
      result.then(res => {
        if (res.code === -1) {
                this.$gameMessageBox.errorMessageBox(this, "新增失败")
              } else if (res.code === 302) {
                this.$gameMessageBox.errorMessageBox(this, "权限不足")
                this.$token.setToken("");
              } else {
                this.$gameMessageBox.successMessageBox(this, "新增成功")
                this.reload();
              }
      }).catch(error => {
        console.log(error)
        this.$gameMessageBox.errorMessageBox(this, "新增失败")
      })
    },
  },
};
</script>
<style scoped>
.el-row.detail_row > .el-col {
  height: 100px;
  background-color: white;
}
.time {
  font-size: 12px;
  color: #999;
}
.img_div {
  height: 386px;
  display: block;
  position: relative;
}
.mask {
  position: absolute;
  background: rgba(101, 101, 101, 0.6);
  color: #ffffff;
  opacity: 1;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.mask .el-row .el-col {
  margin-top: 136px;
  text-align: center;
  font-size: 25px;
}
.img_div:hover {
  cursor: pointer;
}
</style>