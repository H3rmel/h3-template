// React Helmet
import { Helmet } from "react-helmet";

type Props = {
  title: string;
};

const PageTitle = ({ title }: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default PageTitle;
