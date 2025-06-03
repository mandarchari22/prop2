import { Action, createReducer, on } from "@ngrx/store"
import { initialState, PostsState } from "./posts.state"
import { addPost, deletePost, updatePost } from "./posts.action"

const _postsReducer = createReducer(
    initialState,
     on(addPost, (state, action) => {
    
        let post = { ...action.post };
    
        post.id = (state.posts.length + 1).toString()
    
        return {
        ...state,
        posts:[...state.posts,post],
        }
    }),
    on(updatePost,(state,action)=>{
        const updatePosts= state.posts.map((post)=>{
            return action.post.id===post.id? action.post:post;
        });
        return{
            ...state,
            posts:updatePosts
        }
    }),
    on(deletePost,(state,{id})=>{
        const updatePosts= state.posts.filter((post) =>{
            return post.id !==id;
        });
        return{
            ...state,
            posts:updatePosts
        }
    })
)

export function postsReducer(state: PostsState | undefined, action: Action) {
    return _postsReducer(state, action)
}


// // import { Action, createReducer } from "@ngrx/store";
// // import { initialState, PostsState } from "./posts.state";

// // const _postReducer = createReducer(initialState);

// // export function postReducer(state: PostsState | undefined, action: Action): PostsState {
// //   return _postReducer(state, action);
// // }
