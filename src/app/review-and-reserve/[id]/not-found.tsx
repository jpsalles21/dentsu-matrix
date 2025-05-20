import styles from './not-found.module.css'

const notFound = () => {
    return (
        <div className={styles.container}>
           <h1>404 - Not Found</h1>
           <p>This Vehicle was not found.</p>
            </div>
    )
}

export default notFound;