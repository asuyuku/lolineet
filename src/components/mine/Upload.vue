<template>
    <div class="upload">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="视频名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="视频分区">
                <el-select v-model="form.districtId" style="width: 100%;" placeholder="请选择活动区域">
                    <el-option v-for="district in districtList" :key="district.id" :label="district.name"
                        :value="district.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>

                <el-upload class="upload-demo" drag action="http://127.0.0.1:8080/standard/video/uploadVideo"
                    :on-success="videoUploadSuccess" multiple>
                    <div id="videoImage"><i class="el-icon-upload"></i></div>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                </el-upload>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
            </el-form-item>
        </el-form>
        <!-- <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple> -->
    </div>
</template>
<style>
.upload {
    width: 100%;
    height: 100%;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
}

</style>

<script>
import { districtList } from '@/api/district'
import { saveVideo } from '@/api/video'

export default {
    name: 'Upload',
    data() {
        return {
            districtList: [],
            form: {
                id: '',
                districtId: '',
                name: '',
            }
        }
    }, mounted() {
        districtList().then(res => {
            this.districtList = res.data.data;
            console.log(res)
        })
    }, methods: {
        videoUploadSuccess(res) {
            console.log('success');
            console.log(res);
            this.form.id = res.data.id;
            document.getElementById('videoImage').innerHTML = '<img src="' + res.data.imageUrl + '" style="width: 100%; height: 100%; object-fit: cover;">'
        },
        onSubmit() {
            console.log(this.form)
            saveVideo(this.form).then(res => {
                console.log(res)
            })
            this.$message({
                message: "视频保存成功"
                , type: "success"
            });
            setTimeout(() => {
                this.$router.go(0);
            }, 1000);

        }
    }
}
</script>