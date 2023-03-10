import { rerenderEntireTree } from "../../render";


let state = {
    profilePage: {
        postsData: [
            {id: '1', message: 'как дела?', likesCount: '0'},
            {id: '2', message: 'отлично!', likesCount: '23'},
            {id: '3', message: 'ты кто?', likesCount: '5'},
            {id: '4', message: 'я хочу шаверму', likesCount: '6'},
        ]    
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
}

export let addPost = (postMessage) => {
    let newPost = {
        id: '5',
        message: postMessage,
        likesCount: '0'
    };

    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);
}

export default state;