
1.	The difference among getElementById, getElementsByClassName, and querySelector / querySelectorAll Is :

.getElementById(‘id’) gives us only one element because id is always unique and its fastest.
.getElementsByClassName(‘class’) gives us multiple elements as HTMLCollection from same class name. It will update itself automatically with the change of DOM.
.querySelector(‘’) will give us the first match element according to given value inside. It can be ‘.btn’ ,’#box’,‘p’ etc.
.querySelectorAll(‘’) will give us all matching element as NodeList according to the value we give it. Unlike class selector it will not automatically change itself with DOM changes.


2.	The steps of create element and insert it in DOM are:

.first we have to create element by using document.createElement(‘element-name’)

.then we select inner content textContent or style innerHTML

.we can also add class by classList.add(‘class-name’) or id or data-attribute

.at the end we insert it by using appendChild(‘element-name’) which add it at the end or to add in the beginning we can use prepend() etc


3.	Working of event Bubbling: when we click a child element, event happen in   that child first, than it goes upper to it’s parent and then farther to its grandparent and so on until document. This action allow us to activate listener on a parent by clicking it’s childs.


4.	Event Delegation is a processes where we can add a listener to a parent and by this we can handle events of it’s childs. To know which child is clicked event.target or closest() can be used.
If we have so many similar child for example a div with 20/100 cards, it is too hard to controll them by applying individual listener. Instead we can add a listener to parent div and handle events of all childs with Event Delegation. It also work on newly added child.


5.	preventDefault() VS stopPropagation()

preventDefault() interrupt default work of element. for example clicking a link will not take to new page or stop submitting a form

On the other hand stopPropagation() stops event Bubbling. for example clicking a child will not trigger the parent listener.


