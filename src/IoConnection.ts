///<reference path="srcRef.ts" />

module jsIoDia {
	export class IoConnection {
		public input: IoNode;
		public output: IoNode;

		public constructor();
		public constructor(enter: IoNode, exit: IoNode);
		public constructor(enter?: any, exit?: any) {
			this.input = enter;
			this.output = exit;
		}
	}
}
