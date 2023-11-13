function displayMessage() {
  todoList.forEach(function (item, i) {
    let displayMessage = `
      <li>
      <input type='checkbox' id='item_${i}'>
      <label for='item_${i}'>${item.todo}</label>
      </li>`;
    todo.innerHTML = displayMessage;
  });
}
