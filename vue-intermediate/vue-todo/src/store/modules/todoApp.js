const storage = {
  // Vue 인스턴스가 생성될 때 호출, React useEffect와 비슷
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i += 1) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }

    return arr;
  },
};

const state = {
  todoItems: storage.fetch(),
};

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  },
};

const mutations = {
  addOneItem(state, todoItem) {
    const obj = {
      completed: false,
      item: todoItem,
    };
    // 저장하는 로직
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
  },

  removeOneItem(state, { todoItem, index }) {
    localStorage.removeItem(todoItem.item);
    state.todoItems.splice(index, 1);
  },

  toggleOneItem(state, { todoItem, index }) {
    // todoItem.completed = !todoItem.completed;
    state.todoItems[index].completed = !state.todoItems[index].completed;
    // localStorage 데이터 갱신, localStorage에 update는 없음
    localStorage.removeItem(todoItem.item);
    localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
  },

  clearAllItems(state) {
    localStorage.clear();
    state.todoItems = [];
  },
};

export default {
  state,
  getters,
  mutations,
};
