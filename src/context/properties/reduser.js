
// export const reduser =(state, {type, action})=>{
//     switch (type) {
//         case 'plus': return state;
//         default: return state;
//     }
// }

export const reducer = (state, { type, payload }) => {
    switch (type) {
        case "refetch":
            return { ...state, refetch: payload };
        default:
            return state;
    }
};
export default reducer