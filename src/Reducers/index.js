//this will be our reducer
const initialState = {
count: 0,
click: 0,
status: "INIT",
date: null
}

export const reducer = (state = initialState, action)=> {
  switch (action.type){
    case "INCREMENT":
      return {
        count: state.count +1,
        click: state.click +1,
        status: "INCREMENTED",
        date: new Date()

      };
    case "DECREMENT":
      return {
        count: state.count -1,
        click: state.click +1,
        status: "DECREMENTED",
        date: new Date()

      };
      case "RESET":
        return {
          count:0,
          click: state.click,
          status:"RESETTED",
          date: new Date()

        }
      default:
        return state;
  }
}