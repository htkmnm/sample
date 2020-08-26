import { ADD_EVENT, DELETE_ALL_EVENT, DELETE_LINE_EVENT, INCREMENT, DECREMENT, RESET } from '../actions/index';

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_EVENT:
            const event = { title: action.title, body: action.body, comment: action.comment };
            const id = state.length + 1;
            return [...state, { id, ...event }];
        case DELETE_ALL_EVENT:
            // 全削除
            return [];
        case DELETE_LINE_EVENT:
            // 一行削除
            const result = state.filter((data) => data.id !== action.id);
            return result;
        case INCREMENT:
            // 一個ずつ上げていく場合
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            // 一個ずつ下げていく場合
            return { ...state, count: state.count - 1 };
        case RESET:
            // 0に戻す場合
            return { ...state, count: 0 };
        default:
            return state;
    }
};

export default reducer;
