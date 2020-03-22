<template>
  <div>
     <h3>Default</h3>
<p-tab-view>
    <p-tab-panel header="Godfather I">
        <p>gThe story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war,
        but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is
        just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
    </p-tab-panel>
    <p-tab-panel header="Godfather II">
        <p>Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, TheGodfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall,
        deepening The Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills
        his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy.</p>
    </p-tab-panel>
    <p-tab-panel header="Godfather III">
        <p>The Godfather Part III is set in 1979 and 1980. Michael has moved back to New York and taken great strides to remove the family from crime. He turns over his New York criminal
        interests to longtime enforcer Joey Zasa. He uses his wealth in an attempt to rehabilitate his reputation through numerous philanthropic acts, administered by a foundation named after his father.
        A decade earlier, he gave custody of his two children to Kay, who has since remarried.</p>
    </p-tab-panel>
</p-tab-view>

<h3>Programmatic</h3>
<div style="padding: .5em 0">
    <p-button @click="activate(0)" class="p-button-secondary" label="Activate 1st"></p-button>
    <p-button @click="activate(1)" class="p-button-secondary" label="Activate 2nd"></p-button>
    <p-button @click="activate(2)" class="p-button-secondary" label="Activate 3rd"></p-button>
</div>

<p-tab-view>
    <p-tab-panel header="Godfather I" :active.sync="active[0]">
        <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war,
        but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is
        just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
    </p-tab-panel>
    <p-tab-panel header="Godfather II" :active.sync="active[1]">
        <p>Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, TheGodfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall,
        deepening The Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills
        his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy.</p>
    </p-tab-panel>
    <p-tab-panel header="Godfather III" :active.sync="active[2]">
        <p>The Godfather Part III is set in 1979 and 1980. Michael has moved back to New York and taken great strides to remove the family from crime. He turns over his New York criminal
        interests to longtime enforcer Joey Zasa. He uses his wealth in an attempt to rehabilitate his reputation through numerous philanthropic acts, administered by a foundation named after his father.
        A decade earlier, he gave custody of his two children to Kay, who has since remarried.</p>
    </p-tab-panel>
</p-tab-view>

<h3>Disabled</h3>
<p-tab-view>
    <p-tab-panel header="Godfather I">
        <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war,
        but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is
        just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
    </p-tab-panel>
    <p-tab-panel header="Godfather II">
        <p>Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, TheGodfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall,
        deepening The Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills
        his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy.</p>
    </p-tab-panel>
    <p-tab-panel header="Godfather III">
        <p>The Godfather Part III is set in 1979 and 1980. Michael has moved back to New York and taken great strides to remove the family from crime. He turns over his New York criminal
        interests to longtime enforcer Joey Zasa. He uses his wealth in an attempt to rehabilitate his reputation through numerous philanthropic acts, administered by a foundation named after his father.
        A decade earlier, he gave custody of his two children to Kay, who has since remarried.</p>
    </p-tab-panel>
    <p-tab-panel header="Godfather IV" :disabled="true"></p-tab-panel>
</p-tab-view>

<h3>Custom Headers</h3>
<p-tab-view class="p-tab-view-custom">
    <p-tab-panel>
        <template slot="header">
            <i class="pi pi-calendar"></i>
            <span>Godfather I</span>
        </template>
        <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war,
        but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is
        just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
    </p-tab-panel>
    <p-tab-panel>
        <template slot="header">
            <span>Godfather II</span>
            <i class="pi pi-user"></i>
        </template>
        <p>Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, TheGodfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall,
        deepening The Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills
        his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy.</p>
    </p-tab-panel>
    <p-tab-panel>
        <template slot="header">
            <i class="pi pi-search"></i>
            <span>Godfather III</span>
            <i class="pi pi-cog"></i>
        </template>
        <p>The Godfather Part III is set in 1979 and 1980. Michael has moved back to New York and taken great strides to remove the family from crime. He turns over his New York criminal
        interests to longtime enforcer Joey Zasa. He uses his wealth in an attempt to rehabilitate his reputation through numerous philanthropic acts, administered by a foundation named after his father.
        A decade earlier, he gave custody of his two children to Kay, who has since remarried.</p>
    </p-tab-panel>
</p-tab-view>
  </div>
</template>

<script>
export default {
data() {
        return {
            active: [true, false, false]
        }
    },
    methods: {
        activate(index) {
            let activeArray = [...this.active];
            for (let i = 0 ; i < activeArray.length; i++) {
                activeArray[i] = (i === index);
            }
            this.active = activeArray;
        }
    }
}
</script>

<style lang="scss">
.tabview-custom {
	i, span {
		vertical-align: middle;
	}

	span {
		margin: 0 .5em;
	}
}
</style> 