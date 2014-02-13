var jsIoDia;
(function (jsIoDia) {
    var Box = (function () {
        function Box() {
            this.title = '';
            this.inputNodes = [];
            this.outputNodes = [];
        }
        return Box;
    })();
    jsIoDia.Box = Box;
})(jsIoDia || (jsIoDia = {}));
var jsIoDia;
(function (jsIoDia) {
    var IoNode = (function () {
        function IoNode() {
            this.content = '';
            this.connections = [];
        }
        return IoNode;
    })();
    jsIoDia.IoNode = IoNode;
})(jsIoDia || (jsIoDia = {}));
var jsIoDia;
(function (jsIoDia) {
    var IoConnection = (function () {
        function IoConnection() {
        }
        return IoConnection;
    })();
    jsIoDia.IoConnection = IoConnection;
})(jsIoDia || (jsIoDia = {}));
var jsIoDia;
(function (jsIoDia) {
    jsIoDia.apple = 12;
})(jsIoDia || (jsIoDia = {}));
