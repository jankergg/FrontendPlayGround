import { pathAndNames } from "../Router/routePath";

export default function HomePage() {
  return (
    <div className="home-page">
      <h1>React PlayGround</h1>
      <h2>Component Gallary</h2>
      <ul>
        {pathAndNames.map(({ path, name }) => (
          <li key={name}>
            <a href={path}>{name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
