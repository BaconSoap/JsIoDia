///<reference path="coreRef.ts" />

module jsIoDia {
	export class Box {
		public title : string;
		public inputNodes : Array<IoNode>;
		public outputNodes : Array<IoNode>;

		public constructor() {
			this.title = '';
			this.inputNodes = [];
			this.outputNodes = [];
		}
	}
}
