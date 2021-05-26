import { Header } from "../components/atoms/layout/Header";

export const HeaderOnly = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
    </>
  );
};
