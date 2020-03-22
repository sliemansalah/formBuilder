<template>
  <div>
        <h3>NG-Prime</h3>
          <p-text v-model="text"></p-text>
            {{text}}
          <br><br>
         <p-check class="inline" v-model="checked" :binary="true" ></p-check><span>{{checked}}</span>
         <br><br>
         <div class="p-grid">
    <div v-for="theme of themes" :key="theme.key" class="p-col-12">
        <p-check :id="theme.key" name="theme" :value="theme" v-model="selectedThemes2" :disabled="theme.key === 'U'"></p-check>
        <label :for="theme.key" class="p-checkbox-label">{{theme.name}}</label>
    </div>
</div>
<p>Selected Themes: <span style="font-weight: bold">{{this.selectedThemes2}}</span></p>
        <hr>
<p-clr-picker v-model="color1" :inline="true"></p-clr-picker>
<p :style="colorStyle">{{color1}}</p>
<p-clr-picker v-model="color2"></p-clr-picker>
<p :style="colorStyle2">{{color2}}</p>
<hr>

<p-dropdown v-model="selectedCar" :options="cars" optionLabel="brand" placeholder="Select a Car" :filter="true" :showClear="true">
    <template #option="slotProps">
        <div class="p-dropdown-car-option">
            <img :alt="slotProps.option.brand" :src="'/images/car/' + slotProps.option.brand + '.png'" />
            <span>{{slotProps.option.brand}}</span>
        </div>
    </template>
</p-dropdown>

    <hr>

<div class="p-col-12 p-md-4">
        <div class="p-inputgroup">
            <span class="p-inputgroup-addon">www.</span>
            <p-text v-model="website" @keydown.enter="goWebSite()" placeholder="Website"></p-text>
        </div>
        <br>
        <p-input-mask v-model="maskval" mask="99/99/9999" slotChar="dd/mm/yyyy"></p-input-mask>
<p-input-switch v-model="switchVal"></p-input-switch>
<span style="font-weight: bold">{{switchVal}}</span>
<hr>
<p-list-box 
v-model="selectedCars" 
:options="cars" 
:multiple="true" 
:filter="true" optionLabel="brand"
 listStyle="max-height:250px" style="width:15em">
    <template #option="slotProps">
        <div class="p-clearfix">
            <img :alt="slotProps.option.brand" :src="'/images/car/' + slotProps.option.brand + '.png'" style="display:inline-block;margin:5px 0 0 5px;width:48px" />
            <span style="float:right;margin:1.25em .5em 0 0">{{slotProps.option.brand}}</span>
        </div>
    </template>
</p-list-box>
    </div>
    <hr>

     <p-multi-select v-model="selectedCars2" :options="cars" optionLabel="brand" placeholder="Select a Car" :filter="true">
    <template #value="slotProps">
        <div class="p-multiselect-car-token" v-for="option of slotProps.value" :key="option.brand">
            <img :alt="option.brand" :src="'/images/car/' + option.brand + '.png'" />
            <span>{{option.brand}}</span>
        </div>
        <div class="p-multiselect-empty-car-token" v-if="!slotProps.value || slotProps.value.length === 0">
            Select Brands
        </div>
    </template>
    <template #option="slotProps">
        <div class="p-multiselect-car-option">
            <img :alt="slotProps.option.brand" :src="'/images/car/' + slotProps.option.brand + '.png'" />
            <span>{{slotProps.option.brand}}</span>
        </div>
    </template>
</p-multi-select>

    <br>

    <p-password v-model="pass"></p-password>
    <hr>
    
    <div class="p-grid">
    <div v-for="theme of themes" :key="theme.key" class="p-col-12">
        <p-radio :id="theme.key" name="theme" :value="theme" v-model="selectedTheme" :disabled="theme.key === 'U'"></p-radio>
        <label :for="theme.key" class="p-radiobutton-label">{{theme.name}}</label>
    </div>
</div>
<p>Selected Theme: <span style="font-weight: bold">{{this.selectedTheme}}</span></p>
<hr>
    <p-rating 
    v-model="rating" 
    :cancel="true"
    :disabled="false"
     :stars="10"
    ></p-rating>
  </div>

  
</template>

<script>
export default {
    data(){
        return {
            checked2: false,
            rating:3,
			cities2: [],
            selectedThemes2: [],            
            city: null,
			themes: [{name: 'Apollo', key: 'A'}, {name: 'Babylon', key: 'B'}, {name: 'Serenity', key: 'S'}, {name: 'Ultima', key: 'U'}],
            selectedTheme: null,
            text:'',
            pass:'',
            checked:false,
            switchVal:false,
            color1: null,
            color2: '1976D2',
            selectedCar: null,
            selectedCars:null,
            selectedCars2:null,
            website:'',
            maskval:'',
			cars: [
				{brand: 'Audi', value: 'Audi'},
				{brand: 'BMW', value: 'BMW'},
				{brand: 'Fiat', value: 'Fiat'},
				{brand: 'Honda', value: 'Honda'},
				{brand: 'Jaguar', value: 'Jaguar'},
				{brand: 'Mercedes', value: 'Mercedes'},
				{brand: 'Renault', value: 'Renault'},
				{brand: 'Volkswagen', value: 'Volkswagen'},
				{brand: 'Volvo', value: 'Volvo'}
			]
        }
    },
    computed:{
        colorStyle(){
            return {
                color:'#'+ this.color1
            }
        },
        colorStyle2(){
            return {
                color:'#'+ this.color2
            }
        }
    },
    methods:{
        goWebSite(){
            window.open('http://www.'+ this.website);
        }
    },
    created(){
        this.selectedTheme = this.themes[1];
    }
}
</script>

<style>
.inline{ display:inline-block;}
.p-dropdown {
	width: 12em;
}

.p-dropdown-car-option {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.p-dropdown-car-option img {
    margin-right: 0.5em;
    width: 24px;
}

.p-dropdown-car-option span {
    margin-top: .125em;
}


.p-multiselect {
	min-width: 15em;
}

.p-multiselect-car-option {
	display: inline-block;
	vertical-align: middle;
}
	.p-multiselect-car-option img {
		vertical-align: middle;
		margin-right: .5em;
		width: 24px;
	}

	.p-multiselect-car-option span {
		margin-top: .125em;
	}

.p-multiselect-car-token,
.p-multiselect-empty-car-token {
	padding: 2px 4px;
	margin: 0 0.286em 0 0;
	display: inline-block;
	vertical-align: middle;
	height: 1.857em;
	border-radius: 3px;
}

.p-multiselect-car-token img {
	width: 20px;
	vertical-align: middle;
	margin-right: .5em
}

.p-multiselect-car-token {
	background: #007ad9;
	color: #ffffff;
}

.p-multiselect-empty-car-token {
	background: #d95f00;
	color: #ffffff;
}
</style>