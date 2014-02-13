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
    }
}
declare module jsIoDia {
    var apple: number;
}
