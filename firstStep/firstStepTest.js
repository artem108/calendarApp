
//1.

const list = [10, 20, 30];

function changeElements(list) {
   [list[0], list[1]] = [list[1], list[0]]
}

changeElements(list);

console.log(list); // [20, 10, 30];

// 2.Напишите функцию сортировки от наименьшего к наибольшему, результат [-5, 0, 5, 10, 30] . Не используйте стандартную функцию sort.

  const list = [30, -5, 0, 10, 5];

  function mySort(list) {
    list.map((num, index) => {
      
      for (var i = 0; i < list.length - 1; i++) {
          if (num < list[i]) [list[index], list[i]] = [list[i], list[index]]
        }
    })
  }

  mySort(list);

  console.log(list); // [-5, 0, 5, 10, 30]

  // 3. Напишите свою реализацию bind.

var func1 = function(message) {
    this(message);
}

var func2 = func1.bind(alert);

func2('Test'); // alert 'Test'

function myBind(func, context) {
  return function(text){
    return func.apply(context, text)
  }
}

var func3 = myBind(func1, alert);

func3('Test')
