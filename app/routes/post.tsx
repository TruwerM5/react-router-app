

export default function Post({
    params
}: {
    params: {category: string}
}) {

    const {category} = params;

    return (
        <>
            <h1>Product item page</h1>
            <span>Product ID: {category}</span>
        </>
    )
}