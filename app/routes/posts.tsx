import { NavLink } from "react-router";
import { useEffect, useState, useMemo } from "react";
import getProducts from '../../api/get-products';
import PostsList from "~/components/posts-list";

export default function PostsPage() {
    const posts = useMemo(
        () => [
            {
                id: 1,
                title: 'Politic',
                category: 'politic',
            },
            {
                id: 2,
                title: 'Sport',
                category: 'sport',
            },
            {
                id: 3,
                title: 'Music',
                category: 'music',
            }
        ],
        []
    )
    const [err, setErr] = useState('');
    
    return (
        <>
            <h1>Posts Page</h1>
            <div className="posts">
                <PostsList posts={posts} />
            </div>
        </>
    )
}