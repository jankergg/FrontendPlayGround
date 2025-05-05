import { FC, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";


interface ContentPageProps extends PropsWithChildren {
  name: string;
}
const ContentPage: FC<ContentPageProps> = ({ name, children }) => {
    const navigte = useNavigate();
  return (
    <div className="content-page">
      <p>
        <button onClick={() => navigte("/")}>Back</button>
      </p>
      <h1>{name}</h1>
      <div className="content-body">{children}</div>
    </div>
  );
};
export default ContentPage;
