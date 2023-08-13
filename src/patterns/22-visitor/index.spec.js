import { Comment, Visitor } from './index.js';

describe('patterns/visitor', () => {
  it('should be able to calculate nesting levels', () => {
    const list = new Comment({
      id: "comment-1",
      content: "text content for comment-1",
      children: [
        new Comment({
          id: "comment-1.1",
          content: "text content for comment-1.1",
        }),
        new Comment({
          id: "comment-1.2",
          content: "text content for comment-1.2",
        })
      ]
    });

    list.accept(Visitor);

    expect(list.getSize()).toBe(2);
  });
});
