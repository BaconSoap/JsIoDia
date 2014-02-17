declare module jsIoDia {
    class Box {
        public title: string;
        public inputNodes: jsIoDia.IoNode[];
        public outputNodes: jsIoDia.IoNode[];
        constructor();
    }
}
declare module jsIoDia {
    class IoNode {
        public content: string;
        public connections: any[];
        constructor();
    }
}
declare module jsIoDia {
    class IoConnection {
        public input: jsIoDia.IoNode;
        public output: jsIoDia.IoNode;
        constructor();
        constructor(enter: jsIoDia.IoNode, exit: jsIoDia.IoNode);
    }
}
declare module jsIoDia {
    var apple: number;
}
