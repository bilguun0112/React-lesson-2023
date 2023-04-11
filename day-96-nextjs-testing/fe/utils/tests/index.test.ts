import { cutTextToLength, composeArticleSlug } from "../index";
import { slugify, extractArticleIdFromSlug } from "../index";

const str = "The quick brown fox jumps over the lazy dog.";

describe("cutTextToLength", () => {
  it("should cut text to length", () => {
    expect(cutTextToLength(str, 20)).toBe("The quick brown fox ...");
  });

  it("should not cut text to length", () => {
    expect(cutTextToLength(str, 100)).toBe(str);
  });
});

describe("slugify", () => {
  test("handles edge cases", () => {
    const str = "Hello World! 123";
    const expected = "hello-world-123";
    const actual = slugify(str);
    expect(actual).toBe(expected);
  });
  // converts a string to a slug
  test("handles! edge*&^%  cases?", () => {
    expect(slugify(" ")).toBe("-");
    expect(slugify(" foo ")).toBe("-foo-");
    expect(slugify("bar")).toBe("bar");
    expect(slugify("Hello, world!")).toBe("hello-world");
  });
});

describe("composeArticleSlug", () => {
  test("should return the correct article slug", () => {
    expect(composeArticleSlug(1, " ")).toBe("--1");
    expect(composeArticleSlug(1, "killer")).toBe("killer-1");
    expect(composeArticleSlug(10, "killer* momento%%% KAMISARI")).toBe(
      "killer-momento-kamisari-10"
    );
  });
});

describe("extractArticleIdFromSlug", () => {
  test("should extract article ID from a slug", () => {
    const slug = "killer-momento-kamisari-10";
    const articleId = extractArticleIdFromSlug(slug);
    expect(articleId).toBe("10");
  });

  test("should extract article ID from a slug with different format", () => {
    const slug = "foo-bar-baz-123";
    const articleId = extractArticleIdFromSlug(slug);
    expect(articleId).toBe("123");
  });
});
