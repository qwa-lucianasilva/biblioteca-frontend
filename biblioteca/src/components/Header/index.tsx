export const Header = () => {
    return (
        <header className="w-full flex h-28 bg-transparent text-white p-3 justify-around items-center">
            <div>QWA</div>
            <div>
                <ul className="flex gap-4">
                    <li>DASHBOARD</li>
                    <li>USUARIO</li>
                    <li>EMPRESTIMO</li>
                    <li>DOAÇÃO</li>
                </ul>
            </div>
        </header>
    )
}