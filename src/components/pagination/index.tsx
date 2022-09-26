import { Container } from "./styles";

interface PaginationProps {
  limit: number;
  total: number;
  offset: number;
  setOffset(offset: number): void;
}

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

export function Pagination({
  limit,
  total,
  offset,
  setOffset,
}: PaginationProps) {
  const current_page = offset ? offset / limit + 1 : 1;
  const total_pages = Math.ceil(total / limit);
  const maxFirst = Math.max(total_pages - (MAX_ITEMS - 1), 1);
  const first_page = Math.min(Math.max(current_page - MAX_LEFT, 1), maxFirst);

  function onPageChange(page: number) {
    setOffset((page - 1) * limit);
  }

  return (
    <Container>
      <li className="side-buttons">
        <button
          onClick={() => onPageChange(current_page - 1)}
          disabled={current_page === 1}
        >
          Anterior
        </button>
      </li>
      {Array.from({ length: Math.min(MAX_ITEMS, total_pages) })
        .map((_, i) => i + first_page)
        .map((page) => {
          return (
            <li key={page} className="mid-buttons">
              <button
                onClick={() => {
                  onPageChange(page);
                }}
                className={
                  page === current_page ? "pagination__item--active" : null
                }
              >
                {page}
              </button>
            </li>
          );
        })}

      <li className="side-buttons">
        <button
          onClick={() => onPageChange(current_page + 1)}
          disabled={current_page === total_pages}
        >
          Próxima
        </button>
      </li>
    </Container>
  );
}
