var Forum = React.createClass({
    displayName: "Forum",

    getInitialState: function () {
        return {
            allAnswers: {
                "1": {
                    body: "Antwoord 1",
                    correct: false
                },
                "2": {
                    body: "Antwoord 2",
                    correct: false
                },
                "3": {
                    body: "Antwoord 3",
                    correct: false
                }
            }
        };
    },
    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(ForumHeader, { "data-allAnswers": this.state.allAnswers })
        );
    }
});