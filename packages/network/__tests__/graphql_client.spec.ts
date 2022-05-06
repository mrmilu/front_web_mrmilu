/* eslint-disable @typescript-eslint/ban-ts-comment */
// ts-ignore is used to access a private property inside client that it's mocked by jest, just for testing purposes
import { GraphqlClient } from "../src";
import { gql } from "@apollo/client";

jest.mock("@apollo/client");

describe("apollo graphql client", () => {
  const mutation = gql`
    mutation CreatePost($input: CreatePostInput!) {
      createPost(input: $input) {
        id
        title
        body
      }
    }
  `;

  let graphqlClient: GraphqlClient;
  beforeAll(() => {
    graphqlClient = new GraphqlClient("www.foo.bar");
  });

  it("should mutate correctly through apollo", async () => {
    // @ts-ignore
    graphqlClient.client.mutate.mockResolvedValueOnce({ data: { foo: "bar" } });
    await graphqlClient.mutate(mutation, { body: "Foo", title: "Bar" });
    // @ts-ignore
    expect(graphqlClient.client.mutate).toHaveBeenCalled();
  });

  it("should mutate and throw error", async () => {
    // @ts-ignore
    graphqlClient.client.mutate.mockResolvedValueOnce({ data: { errors: ["Wrong foo!"] } });
    await expect(graphqlClient.mutate(mutation, { body: "Foo", title: "Bar" })).rejects.toEqual(new Error("Wrong foo!"));
  });
});
