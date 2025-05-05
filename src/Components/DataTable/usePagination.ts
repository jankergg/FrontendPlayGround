import {useState, useCallback, useEffect} from 'react';

type UsePagination = <T>(props: { data: T[]; pageSize: number }) => {
  currentPageItems: T[];
  currentPage: number;
  totalPage: number;
  setCurrentPage: (page: number) => void;
  onNext: () => void;
  onPrev: () => void;
};

export const usePagination: UsePagination = ({ data, pageSize }) => {
  const totalPage = Math.ceil(data.length / pageSize);
  const [currentPage, setCurrentPage] = useState(1);

  const onNext = useCallback(() => {
    setCurrentPage((prev) => (prev < totalPage ? prev + 1 : prev));
  }, [totalPage]);

  const onPrev = useCallback(() => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [data, pageSize]);

  const currentPageItems = data.slice(
    (currentPage - 1) * pageSize,
    (currentPage - 1) * pageSize + pageSize
  );

  return {
    currentPageItems,
    onNext,
    onPrev,
    currentPage,
    setCurrentPage,
    totalPage,
  };
};