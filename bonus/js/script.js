//console.log("VRSTY");

const { createApp } = Vue;

createApp({
	data() {
		return {
			tasks: [
				{
					text: "Togliere la muffa in bagno",
					done: true,
				},
				{
					text: "Lavare i denti a chiwawa",
					done: false,
				},
				{
					text: "Finire il bilancio 2022",
					done: false,
				},
			],
			newTask: "",
		};
	},
	methods: {
		deleteTask(startIndex) {
			//console.log(startIndex, this.tasks)
			this.tasks.splice(startIndex, 1);
		},
		addTask() {
			//console.log(this.newTask)
			if (!this.newTask.length <= 0) {
				this.tasks.push({
					text: this.newTask,
					done: false,
				});
			}
			//console.log(this.tasks),
			this.newTask = "";
		},
		editStatus(index){
			//console.log(this.tasks[index].done)
		 	if(this.tasks[index].done === true) {
				this.tasks[index].done = false
		 	} else {
				this.tasks[index].done = true
		 	}
		}
	}
}).mount("#app");
