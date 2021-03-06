// let AsyncFileHelper = require('../util/AsyncFileHelper.js')
let ProjectManager = require('../util/ProjectManager')
const Dialog = require('dialogs')()

Vue.component('tabs', {
	template: `
	<div style="display:block;">
		<ul class="nav nav-tabs">
		<li class="nav-item" v-for="tab in tabs">
			<a class="nav-link" :class="{'active': tab == currentTab}" @click="switchTab(tab)">{{ tab }}</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" @click="newTab">+</a>
		</li>
		</ul>
	</div>
	`,
	data: function() {
		return {
			tabs: [],
			currentTab: ''
		}
	},
	computed: {
		currentTab: function() {
			return window.currentProject.tab
		}
	},
	mounted: function() {
		window.workspace.clear()
		this._updateTabs()
		this._updateCurrentTab()
	},
	methods: {
		switchTab: function(tab) {
			ProjectManager.switchToTab(tab)
			this._updateCurrentTab()
		},
		newTab: function() {
			Dialog.prompt('Tab name:').then(name => {
				if(name) name = name.trim()
				if(!this.validateTabName(name)) return
				ProjectManager.createTab(name)
				this._updateTabs()
			})
		},
		validateTabName: function(name) {
			if(!name) return false
			if(name.indexOf(' ') !== -1) return false
			if(this.tabs.includes(name)) return false
			return true
		},
		/* Need keep and update a separate state of tabs as Vue isn't reactive enough. */
		_updateTabs: function() {
			this.tabs = window.currentProject.files.map(p => p.name)
		},
		_updateCurrentTab: function() {
			this.currentTab = window.currentProject.tab
		}
	}
})