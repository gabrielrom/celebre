import styles from './Box.module.css'

function Box({ children, className, style, ...props }) {
  return (
    <div className={`${styles.box} ${className ?? ''}`} style={style ?? {} } {...props}>
      {children}
    </div>
  );
}

export default Box;
