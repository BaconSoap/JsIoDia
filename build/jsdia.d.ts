declare module jsdia {
    class Box {
        public title: string;
        public inputNodes: jsdia.IoNode[];
        public outputNodes: jsdia.IoNode[];
        constructor();
    }
}
declare module jsdia {
    class IoNode {
        public content: string;
        public connections: any[];
        constructor();
    }
}
declare module jsdia {
    var apple: number;
}
