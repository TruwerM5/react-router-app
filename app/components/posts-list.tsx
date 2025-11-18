import { NavLink } from "react-router";

export default function PostsList({
    posts
}: {
    posts: {
        id: number;
        title: string;
        category: string;
    }[]
}) {

    return (
        <ul className="posts__list">
            {posts.map(post => (
                <li className="posts-item" key={post.id}>
                    <NavLink to={`/posts/${post.category}`}>
                        {post.title}
                    </NavLink>
                </li>
            ))
            }
        </ul>
    )

}