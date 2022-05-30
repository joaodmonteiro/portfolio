import styles from "../styles/Stack.module.scss";

const Stack = ({ stackItems }) => {
  return (
    <div className={styles.container}>
      <h2>Stack</h2>
      <div className={styles.logos_container}>
        {stackItems.map((item) => {
          return (
            <div className={styles.logo_wrapper}>
              <img src={item.img} alt="" />
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stack;
