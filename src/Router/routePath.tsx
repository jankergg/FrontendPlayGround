import ContentPage from "../Pages/ContentPage";
import { SearchComponent } from "../Components/SearchComponent";
import { DataTableExample } from "../Components/DataTable";

export const paths = [
  {
    path: "/search",
    name: "Search",
    element: (
      <ContentPage name="SearchComponent">
        <SearchComponent />
      </ContentPage>
    ),
  },
  {
    path: "/data-table",
    name: "DataTable",
    element: (
      <ContentPage name="DataTable">
        <DataTableExample />
      </ContentPage>
    ),
  },
];

export const pathAndNames = paths.map(({ path, name }) => ({ path, name }));