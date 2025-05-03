export const initialStore=()=>{
  return{
    message: null,
    favourite: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_favourite':

      const { id: addId,  type: addType, name: addName } = action.payload

      const addStore = {...store, favourite: [...store.favourite, {id: addId, type: addType, name: addName}]}
      localStorage.setItem('favourites', JSON.stringify(addStore.favourite))

      return addStore;
    case 'remove_favourite':

      const { id: removeId,  type: removeType, name: removeName } = action.payload

      const removedStore = {...store, favourite: store.favourite.filter((item)=>{
        return item.name !== removeName
      })}
      localStorage.setItem('favourites', JSON.stringify(removedStore.favourite))

      return removedStore;
    default:
      throw Error('Unknown action.');
  }    
}
