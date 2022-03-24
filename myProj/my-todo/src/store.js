import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        todoList: [],
        doneList: [],
        delayList: [],
    },
    mutations: {
        addTodo(state, payload) {
            // console.log('addTodo');
            state.todoList.push(payload);
            console.log(state.todoList);
        }
    }
})

export default store