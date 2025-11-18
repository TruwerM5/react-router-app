import { type RouteConfig, index, route, prefix } from "@react-router/dev/routes";

export default [
    route('/','./routes/home.tsx'),
    route('about', './routes/about.tsx'),
    route('posts', './routes/posts.tsx'),

    ...prefix("posts", [
        route(":category", "./routes/post.tsx"),
    ]),

] satisfies RouteConfig;
