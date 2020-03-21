import moxios from "moxios";

import { getGlobalStats } from "..";
import http from "../../http";

beforeEach(() => {
  moxios.install(http);
});

afterEach(() => {
  moxios.uninstall(http);
});

describe("Stats", () => {
  it("should issue a request to get overall stats in english", async () => {
    moxios.stubRequest(/overall$/, {
      status: 200,
      response: {}
    });

    await getGlobalStats();

    expect(moxios.requests.count()).toBe(1);
    expect(moxios.requests.first().url).toMatch(/overall$/);
  });
});
