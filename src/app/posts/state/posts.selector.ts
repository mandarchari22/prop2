import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState } from "./posts.state";
import { Post } from "../../models/posts.model";
const getPostsState = createFeatureSelector<PostsState>('posts')

export const getPosts = createSelector(getPostsState, (state) => {
    return state.posts;
})

export const getPostById = createSelector(getPostsState,(state: { posts: any[]; },props: { id: any; })=>{
    return state.posts.find((post: { id: any; }) => post.id === props.id);
})