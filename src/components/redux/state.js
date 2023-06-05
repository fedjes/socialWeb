import { rerenderApp } from "../../render";

let state = {
    profilePage: {
        pData: [
            { id: 1, pMessage: 'test post', lokes: 3 },
            { id: 2, pMessage: 'other post', lokes: 1 },
            { id: 3, pMessage: 'more posts', lokes: 7 },
          ],
          newPostText: 'test',
    },
    messagesPage: {
        dData: [
            { id: 1, name: 'felis' },
            { id: 2, name: 'martin' },
            { id: 3, name: 'mom' },
            { id: 4, name: 'bro' },
          ],
        mData: [
          { id: 1, message: 'hi' },
          { id: 2, message: 'ky' },
          { id: 3, message: 'what' },
      ],
      
    }
  };

window.state = state;

  export let addPost = () => {
    let newPost = {
      id: 4,
      pMessage: state.profilePage.newPostText,
      lokes: 0
    };
    state.profilePage.pData.push(newPost);
    rerenderApp(state);
  };

  export let changePost = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderApp(state);
  };

  export default state;