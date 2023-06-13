let store = {
  _state: {
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
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('work');
    },
  addPost() {
    let newPost = {
      id: 4,
      pMessage: this._state.profilePage.newPostText,
      lokes: 0
    };
    this._state.profilePage.pData.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  changePost(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer)  {
    this._callSubscriber = observer;
  },
};
;


export default store;
window.store = store;