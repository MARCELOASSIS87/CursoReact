import styles from "./ComponentCarDetails.module.css"

const ComponenteCarDetails = ({car}) => {


    return (
        <div className={styles.card}>
            <h1>Nome: {car.brand}</h1>
            <p>KM: {car.km}</p>
            <p>Cor: {car.color}</p>
        </div>
    )
}

export default ComponenteCarDetails