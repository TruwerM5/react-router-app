
export default function Burger({
    className
}: {
    className: string;
}) {
    return (
        <button className="header__burger absolute right-3 top-3 flex flex-col w-6 h-4 justify-between items-center" aria-label="Burger">
            <span className="block w-full h-0.5 rounded-b-md bg-white"></span>
            <span className="block w-full h-0.5 rounded-b-md bg-white"></span>
            <span className="block w-full h-0.5 rounded-b-md bg-white"></span>
        </button>
    )
}