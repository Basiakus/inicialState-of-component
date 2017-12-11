var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState(function(prevState) {
           return {
              counter: prevState.counter + 1
           };
        });
        console.log('+1')
    },
    decrement: function() {
        this.setState(function(prevState) {
           return {
              counter: prevState.counter - 1
           };
        });
        console.log('-1')
    },
   multi: function() {
         this.setState(function(prevState) {
           return {
              counter: prevState.counter * 3
           };
        });
        console.log('*3')
    },
    div: function() {
        this.setState(function(prevState) {
           return {
              counter: prevState.counter / 3
           };
        });
        console.log('/3')
    },
    resetCounter: function() {
    	this.setState(function(prevState) {
           return {
              counter: prevState.counter = 0
           };
        });
    	console.log('reset')
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('input', {type: 'text', value: this.state.counter}),
            React.createElement('button', {onClick: this.increment}, '+'),
            React.createElement('button', {onClick: this.decrement}, '-'),
            React.createElement('button', {onClick: this.multi}, 'x3'),
            React.createElement('button', {onClick: this.div}, '/3'),
            React.createElement('button', {onClick: this.resetCounter}, 'reset')
        );
    }  
});

var Count = React.createClass({

    getInitialState: function() {
        return {
            count: 10
        };
    },

    multiTen: function() {
        this.setState(function(prevState) {
           return {
              count: prevState.count * 10
           };
        });
        console.log('*10')
    },

    divTen: function() {
        this.setState(function(prevState) {
           return {
              count: prevState.count / 10
           };
        });
        console.log('/10')
    },

    resetCount: function() {
    	this.setState(function(prevState) {
           return {
              count: prevState.count = 0
           };
        });
    	console.log('reset')
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('input', {type: 'text', value: this.state.count}),
            React.createElement('button', {onClick: this.multiTen}, '*10'),
            React.createElement('button', {onClick: this.divTen}, '/10'),
            React.createElement('button', {onClick: this.resetCount}, 'reset')
        );
    }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));
var nextElement = React.createElement(Count);
ReactDOM.render(nextElement, document.getElementById('appTwo'));