<template>
  <el-dialog
    title="Add car"
    :visible.sync="showNewCar"
    width="50%"
    >
    <el-form ref="form" status-icon :model="form" :rules="rules" label-width="150px" class="container-form" size="mini" label-position="left">
        <el-row>
          <el-col :span="24">
            <el-form-item label="Date"  prop="posted">
              <el-date-picker type="date" placeholder="Date" v-model="form.posted"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="Locations" prop="location">
              <el-select v-model="form.location">
                <el-option
                    v-for="item in locations"
                    :key="item.id"
                    :label="item.name + '-' + item.region" 
                    :value="item.name + '-' + item.region"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="price" prop="price">
              <el-input-number v-model="form.price" :step="5" :min="10" :max="500"></el-input-number>
            </el-form-item>
          </el-col>
        </el-row>
        
        
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button  plain @click="hideCreateCar()">Cancel</el-button>
      <el-button pain type="warning" @click="createCar()">Confirm</el-button>
    </span>
  </el-dialog>

</template>

<script src="./addcar.js"></script>

<style lang="scss" src="./addcar.scss" scoped></style>