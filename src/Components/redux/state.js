// Action type MESSAGE
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
export const addMessageActionCreator = () => {
    return {
      type: ADD_MESSAGE
    }
}
export const updateNewMessageTextActionCreator = (text) => {
    return {
      type: UPDATE_NEW_MESSAGE_TEXT,
      newText: text
    }
}
// Action type POST
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
export const addPostActionCreator = () => {
    return {
      type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
    }
}

// State
let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: '1', message: 'как дела?', likesCount: '0'},
                {id: '2', message: 'отлично!', likesCount: '23'},
                {id: '3', message: 'ты кто?', likesCount: '5'},
                {id: '4', message: 'я хочу шаверму', likesCount: '6'},
            ],
            newPostText: 'Привет!'
        },
        messagesPage: {
            dialogsData: [
                {id: '1', name: 'Первый'},
                {id: '2', name: 'Второй'},
                {id: '3', name: 'Третий'},
                {id: '4', name: 'Четвертый'},
            ],
            messagesData: [
                {id: '1', message: 'Lorem'},
                {id: '2', message: 'Ipsun'},
                {id: '3', message: 'Pix'},
                {id: '4', message: 'Bizy'},
            ],
            newMessageText: "Здоровеньки булы!"
        }
    },
    _callSubscriber() {
        console.log('state changed');
    },

    
    getState() {
        return this._state;
    },
    getCallSubscriber() {
        return this._callSubscriber;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

// Добавляем пост на стену
    addPost() {
        let newPost = {
            id: '5',
            message: this._state.profilePage.newPostText,
            likesCount: '0'
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },

// Добавляем сообщение в диалогах
    addMessage() {
        let newMessage = {
            id: '5',
            message: this._state.messagesPage.newMessageText
        };
        this._state.messagesPage.messagesData.push(newMessage);
        this._state.messagesPage.newMessageText = '';
        this._callSubscriber();
    },
    updateNewMessageText(newText) {
        this._state.messagesPage.newMessageText = newText;
        this._callSubscriber();
    },

// Action creator
    dispatchPost(action) {
        if (action.type === "ADD-POST") {
            let newPost = {
                id: '5',
                message: this._state.profilePage.newPostText,
                likesCount: '0'
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        }
    },
    dispatchMessage(action) {
        if (action.type === "ADD-MESSAGE") {
            let newMessage = {
                id: '5',
                message: this._state.messagesPage.newMessageText
            };
            this._state.messagesPage.messagesData.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber();
        } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
            this._state.messagesPage.newMessageText = action.newText;
            this._callSubscriber();
        }
    }
}

export default store;