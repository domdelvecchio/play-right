# play-right
Playing with Playwright and Docker

This is a simple dockerfile to run Playwright Test Runner from a container.

1) Clone repository locally
2) from the local "play-right" folder build the docker image

docker build -t |pick-a-name| .
  
3) create two local folders:
  - |my-test-files|      you will put your Playwright test files in here. You can call anything you want
  - |test-results|       where the test results will be written
  
4) run the docker image with two folders just created mounted as '/app/test_files' and '/app/test_results' respectively. i.e.
  
  docker run --volume |my-test-files|:/app/test_files --volume |test-results|:/app/test_results |pick-a-name|
  
If you want to verify that it is all working fine, copy the example test file from the "example" folder into your <my-test-files> folder and then run the container with the above command.
  

Issues
  Currently, the "outputDir" specified in the Playwright config file (playwright.config.ts) doesn't seem to work. The workaround is to explicitly generate output files into the 'test_results' folder. This deserves a bit more investigation.
