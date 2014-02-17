## JsIoDia

### Table of Contents

- JsIoDia
    - [Overview](#overview)
    - [Structure](#structure)
- [Misc](#misc)

### Overview

JsIoDia is an Input-Output focused diagramming solution, written in TypeScript and compiled to JavaScript.

The focus on IO means that each 'box' on a given diagram can have two types of 'nodes' (things to connect multiple boxes together). An output node sends data, while an input node receives it.

The general structure is that each 'box' function will have a 'process' function. When the processing is completed, it sends the relevant data (or pieces of data) across all of the output nodes that it has, which then route to another.

If a given box has multiple inputs, then it can be made to wait until all inputs are given before executing. In this way dependency chains can be built up.

A simple example is using it to make a visual parallel scripting language. Three async tasks can be set up to make HTTP calls, sending the data to one other box that computes some value with the returned values.

Another example is a state-machine system. With each box representing a single state, individual output nodes would be the possible transitions. When the state determines that it's time to switch to a new state, it sends data across one of the output nodes and ends the processing loop on the current state, automatically triggering the next state to run. 

### Structure

The library is divided into two broad components: the 'core' and the 'renderer'. Due to differing needs on a per-project basis, the 'renderer' components are meant to be replacable. If rendering isn't needed (for instance, to integrate the functionality into some sort of server-side tool), then you can use the 'null renderer'.

Actual boxes should inherit IoBox and override the 'process' functionality.

### Misc

Using grip to preview markdown.
