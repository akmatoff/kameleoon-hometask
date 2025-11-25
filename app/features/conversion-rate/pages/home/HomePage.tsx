import Conversions from "@/features/conversion-rate/components/Conversions";

import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <main className={styles.main}>
      <Conversions />
    </main>
  );
};

export default HomePage;
