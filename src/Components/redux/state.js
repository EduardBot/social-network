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
            ]    
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed');
    },
    getCallSubscriber() {
        return this._callSubscriber;
    },
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
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;