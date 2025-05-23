import ContentPage from "../Pages/ContentPage";
import { SearchComponent } from "../Components/SearchComponent";
import { ImageCarouselExample } from "../Components/ImageCarousel";
import { DataTableExample } from "../Components/DataTable";
import { NestedCheckboxExample } from "../Components/NestedCheckbox/NestedCheckboxExample";

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
  {
    path: "/image-carousel",
    name: "ImageCarousel",
    element: (
      <ContentPage name="ImageCarousel">
        <ImageCarouselExample />
      </ContentPage>
    ),
  },
  {
    path: "/nested-checkbox",
    name: "NestedCheckbox",
    element: (
      <ContentPage name="NestedCheckbox">
        <NestedCheckboxExample />
      </ContentPage>
    ),
  },
];

export const pathAndNames = paths.map(({ path, name }) => ({ path, name }));