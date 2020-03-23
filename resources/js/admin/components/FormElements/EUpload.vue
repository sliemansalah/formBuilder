<template>
  <div>
    <!-- <el-upload
      :drag="drag"
      :multiple="multiple"
      :action="action"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :limit="limit"
      :on-exceed="handleExceed"
      :auto-upload="autoUpload"
      :file-list="fileList"
    >
      <div v-if="drag">
          <i class="el-icon-upload"></i>
       <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
      </div>
      <el-button v-else size="small" type="primary">Click to upload</el-button>
    </el-upload>-->

    <el-upload
      :action="action"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :auto-upload="autoUpload"
      :drag="drag"
      :multiple="multiple"
      :before-remove="beforeRemove"
      :limit="limit"
      :on-exceed="handleExceed"
      :file-list="fileList"
    >
      <div v-if="drag">
          <i class="el-icon-upload"></i>
       <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
      </div>
      <el-button v-else size="small" type="primary">Click to upload</el-button>
    </el-upload>

    <el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>

    <br />
    <br />
  </div>
</template>

<script>
export default {
  props: ["limit", "drag", "action", "multiple", "autoUpload"],
  data() {
    return {
          dialogImageUrl: '',
        dialogVisible: false,
      fileList: []
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `The limit is 3, you selected ${
          files.length
        } files this time, add up to ${files.length + fileList.length} totally`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`Cancel the transfert of ${file.name} ?`);
    },
     handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
  }
};
</script>

<style>
</style>