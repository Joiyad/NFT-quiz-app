import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = '0x413F41c666A0617e5955C797055dE060e52f58E2';
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Opening the pack...');
  const opened = await packModule.open('0');
  console.log('Opened the pack!');
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}