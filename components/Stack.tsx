import styles from "../styles/Stack.module.scss";

interface Props {
  stack: Tech[];
}

interface Tech {
  name: string;
  img: string;
}

const Stack = (props: Props) => {
  return (
    <div className={styles.container}>
      <h2>Stack</h2>
      <div className={styles.logos_container}>
        {props.stack.map((item) => {
          return (
            <div
              key={props.stack.indexOf(item)}
              className={styles.logo_wrapper}>
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
