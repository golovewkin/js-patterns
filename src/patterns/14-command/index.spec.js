import { Pagination, Button, PrevPage, NextPage } from './index.js';

describe('patterns/command', () => {
  let pagination;
  let prevButton;
  let nextButton;

  beforeEach(() => {
    pagination = new Pagination();

    const prevPageCommand = new PrevPage(pagination);
    const nextPageCommand = new NextPage(pagination);

    prevButton = new Button(prevPageCommand);
    nextButton = new Button(nextPageCommand);
  });

  afterEach(() => {
    pagination = null;
    prevButton = null;
    nextButton = null;
  });

  it('should be able to change current page to the previous', () => {
    prevButton.click();
    expect(pagination.currentPage).toBe(0);
  });

  it('should be able to change current page to the next', () => {
    nextButton.click();
    expect(pagination.currentPage).toBe(2);
  });
});
