///<reference path="coreRef.ts" />

module jsIoDia {
	export class IoNode {
		public content : string;
		public connections: Array<any>;

		public constructor() {
			this.content = '';
			this.connections = [];
		}
	}
}
