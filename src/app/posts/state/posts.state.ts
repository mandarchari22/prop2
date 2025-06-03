import { Post } from "../../models/posts.model"

export interface PostsState {
    posts: Post[]
}

export const initialState: PostsState = {
    posts: [
        {
            id: '1', title: 'simple titile 1', Description: 'sample decription 1',
            
        },
        {
            id: '2', title: 'simple titile 2', Description: 'sample decription 2',
            
        }

    ]
}