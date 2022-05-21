const UserDetails = ({ nome, sobrenome, idade, profissao }) => {
    return (
        <div>
            <p>Nome: {nome}</p>
            <p>Sobrenome: {sobrenome}</p>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
            {idade >= 18 ? (
                <p>POde tirar habilitação</p>
            ) : (
                <p>menor de idade</p>
            )}
        </div >
    )
}

export default UserDetails