var Forum = React.createClass({
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
        return (
            <div>
                <ForumHeader data-allAnswers={this.state.allAnswers} />
            </div>
        );
    }
});