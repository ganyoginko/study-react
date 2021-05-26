import { Footer } from "../components/atoms/layout/Footer";
import { Header } from "../components/atoms/layout/Header";

export const DefaultLayout = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
