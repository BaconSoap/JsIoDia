///<reference path="srcRef.ts" />

module jsdia {
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
