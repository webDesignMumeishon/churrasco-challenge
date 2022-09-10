import styles from '../styles/FieldInput.module.css'

type props = {
    name: string
    opcional?: boolean
}

const FieldInput : React.FC<props> = ({name, opcional = false}) => {
   return ( 
    <div className={styles.inputContainer}>
        <p>{name} {opcional ? <span className={styles.opcionalLabel}>opcional</span> : null}</p>
        <input type="text"/>
    </div>
    )
} 

export default FieldInput