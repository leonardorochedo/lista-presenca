import './styles.css'; // Imporando o css

export function Card({ name, time }) { {/* Pegando as props */}

    return(
        <div className="card">
            <strong>{name}</strong> {/* Pegando a props.prop que pegamos ali em cima */}
            <small>{time}</small>
        </div>
    )

}