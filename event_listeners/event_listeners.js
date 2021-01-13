const grandParent = document.querySelector(".grandParent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

document.addEventListener(
  "click",
  () => {
    console.log("Document Capturing");
  },
  { capture: true }
);

grandParent.addEventListener(
  "click",
  () => {
    console.log("Grandparent Capturing");
  },
  { capture: true }
);

parent.addEventListener(
  "click",
  () => {
    console.log("Parent Capturing");
  },
  { capture: true }
);

child.addEventListener("click", (e) => {
  console.log("Child");
  e.stopPropagation();
});

/**
 *  Event Bubbling
 *
 *  if we click the child element then every parent's click event of this child element was called
 *  in event bubbling , Child element was called first and then parent => grandparent => document
 *
 *  Event Capturing
 *  if we click the child element the document element was called first and then grandparent => parent => child
 *
 *  Difference between capturing and bubbling
 *  In Event Capturing, event was called from outside to inside , but in event bubbling vice versa
 *
 *   In default every click event works with event bubbling , if we want to change event bubbling to capturing we can add new parameter to addEventListener function
 *   this function takes third element and this element is object. In this object , we can set the value to capture element, in default this value is false,
 *   hence all events work with event bubbling. if we set the true this element( {capture: true}) and then,
 *   after clicking the child element event will called first what we set true. if we add this true value all parent elements of child element , and then
 *   document event was called first , and order is document => grandparent => parent => child
 *
 *   However, if we set the capture:true for only one event, JS calls the capture event
 *   and then if we don't have another capture event, the JS calls bubbling events
 *
 *    stopPropagation() method , this method stops to call other bubbling elements automatically. For example we have 4 elements
 *    document , grandparent, parent , child. if we call this method in child event, other parent bubbling events won't called. 
 *
 *
 */
