export class Dispatcher {
	constructor() {
		this.__listeners = [];
	}	
	dispatch(action) {
		this.__listeners.forEach(listener=>listener(action))
	}

	register(listener) {
		console.log("All the listeners..",this.__listeners);
		this.__listeners.push(listener);
	}
}