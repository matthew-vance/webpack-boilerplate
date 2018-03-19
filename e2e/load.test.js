import { Selector } from "testcafe";

fixture("Load").page("http://localhost:8081");

test("App loads", async t => {
  const bodyElement = Selector("body");
  await t.expect(bodyElement.exists).ok();
});
