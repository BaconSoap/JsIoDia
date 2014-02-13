///<reference path="srcRef.ts" />

module jsdia {
	export class IoNode {
		public content : string;
		public connections: Array<any>;

		public constructor() {
			this.content = '';
			this.connections = [];
		}
	}
}
