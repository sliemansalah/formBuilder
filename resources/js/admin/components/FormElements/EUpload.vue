<template>
  <div>
    <el-upload
      :drag="drag"
      :multiple="multiple"
      :action="action"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :limit="limit"
      :on-exceed="handleExceed"
      :auto-upload="autoUpload"
    >
      <div v-if="drag">
          <i class="el-icon-upload"></i>
       <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
      </div>
      <el-button v-else size="small" type="primary">Click to upload</el-button>
    </el-upload>
          <br><br>

  </div>
</template>

<script>
export default {
  props: ["limit","drag","action","multiple","autoUpload"],
  data() {
    return {
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
        this.$message.warning(`The limit is 3, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`Cancel the transfert of ${ file.name } ?`);
      }
    }
};
</script>

<style>
</style>