// playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  
  outputDir: './test_results/',

  projects: [
    {
      name: 'myproject',
      // Look for test files in the "tests" directory, relative to this configuration file
      testDir: './in'
    }
  ],

  //reporters
  reporter: [
    ['list'],
    ['json', {  outputFile: './test_results/test-results.json' }]
  ],

  // Each test is given 30 seconds
  timeout: 30000,

  // Two retries for each test
  retries: 2
};
export default config;