#!/bin/bash

echo "Welcome to the Cypress test runner!"

# Install dependencies
echo "Installing dependencies..."
npm install

echo "Please select an option:"

echo "1. Open Cypress"
echo "2. Run all tests headless"
echo "3. Run all tests headed"
echo "4. Run all tests on Chrome"
echo "5. Run all tests on Chrome (headed)"
echo "6. Run all tests on Firefox"
echo "7. Run all tests on Firefox (headed)"
echo "8. Run all tests on Edge"
echo "9. Run all tests on Edge (headed)"
echo "10. Run all tests on multiple browsers"
echo "11. Run all tests with dashboard recording"
echo "12. Run all tests with dashboard recording on Chrome"
echo "13. Exit"

read -p "Enter your choice: " choice

case $choice in
  1)
    echo "You selected 'Open Cypress'"
    npm run cypress:open
    ;;
  2)
    echo "You selected 'Run all tests headless'"
    npm run allTests-headless
    ;;
  3)
    echo "You selected 'Run all tests headed'"
    npm run allTests-headed
    ;;
  4)
    echo "You selected 'Run all tests on Chrome'"
    npm run allTests-chrome
    ;;
  5)
    echo "You selected 'Run all tests on Chrome (headed)'"
    npm run allTests-chrome-headed
    ;;
  6)
    echo "You selected 'Run all tests on Firefox'"
    npm run allTests-firefox
    ;;
  7)
    echo "You selected 'Run all tests on Firefox (headed)'"
    npm run allTests-firefox-headed
    ;;
  8)
    echo "You selected 'Run all tests on Edge'"
    npm run allTests-edge
    ;;
  9)
    echo "You selected 'Run all tests on Edge (headed)'"
    npm run allTests-edge-headed
    ;;
  10)
    echo "You selected 'Run all tests on multiple browsers'"
    npm run allTests-multiBrowser
    ;;
  11)
    echo "You selected 'Run all tests with dashboard recording'"
    npm run allTest-dashBoard
    ;;
  12)
    echo "You selected 'Run all tests with dashboard recording on Chrome'"
    npm run allTest-dashBoard-chrome
    ;;
  13)
    echo "Exiting."
    exit 0
    ;;
  *)
    echo "Invalid option, please try again."
    ;;
esac
# Open the report
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    xdg-open cypress/reports/html/index.html
elif [[ "$OSTYPE" == "darwin"* ]]; then
    open cypress/reports/html/index.html
elif [[ "$OSTYPE" == "cygwin" || "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
    start cypress/reports/html/index.html
else
    echo "Cannot automatically open file in browser. Please manually open cypress/reports/html/index.html"
fi