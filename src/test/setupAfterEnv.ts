import "jest-dynalite/withDb";
import { client } from "../dynamo";

// beforeAll(startDb);

// beforeEach(createTables);
// afterEach(deleteTables);

// afterAll(stopDb);

afterAll(() => {
  client.destroy();
  console.log("destroyed");
});
