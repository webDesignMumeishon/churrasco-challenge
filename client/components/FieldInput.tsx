import styles from '../styles/FieldInput.module.css'

type props = {
    name: string
}

const FieldInput : React.FC<props> = ({name}) => {
   return ( 
    <div className={styles.inputContainer}>
        <p>{name}</p>
        <input type="text"/>
    </div>
    )
} 

export default FieldInput