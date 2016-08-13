var containerDiv = React.createElement('div', {className: 'container-fluid'});
var navbarHeaderDiv = React.createElement('div', {className: 'navbar-header'});
var navbarBrandLink = React.createElement('a', {className: 'navbar-brand', href: '#'}, 'React Forum');

var forumHeader = React.createClass({
   render: function(){
       return React.createElement('nav', { className: 'navbar navbar-default' }, containerDiv, navbarHeaderDiv, navbarBrandLink);
   } 
});