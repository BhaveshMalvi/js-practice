// scope are mesure a  globle and local scope.

// as a like exmaple of son ice-cream father se mang saktah par father son se ice-cream nahi mang sakta

function one() {
  console.log("hello i am one function");

  console.log(two());
  function two() {
    three();
    // one() show  earror if perform this fun.
    return "i am two function";

    function three() {
      console.log(" i am three function");
    }
  }
  //   three()
}

one();
// two();  not define yet
// three();  not define yet
