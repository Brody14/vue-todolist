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
			let text = this.newTask.trim();

			if (text === "") {
				this.newTask = "";
				return;
			}

			this.tasks.push({
				text: text,
				done: false,
			});
			//console.log(this.tasks),
			this.newTask = "";
		},
	},
}).mount("#app");
