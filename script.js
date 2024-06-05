const { exec } = require("child_process");

const [command] = process.argv.slice(2);

let appList = ["app1", "app2", "app3"];

let COMMANDS = {
  install: "npm install",
  build: "webpack --mode development",
  [`build:prod`]: "webpack --mode production",
  start: "webpack serve",
};

const getCommand = (command = "", appName = "") => {
  if (!command || !appName || !COMMANDS[command]) {
    throw new Error("Command or AppName is missing");
  }

  if (command === "install") return `cd ${appName} && ${COMMANDS[command]}`;

  if (command === "build:prod")
    return `rm -rf dist && cd ${appName} && ${COMMANDS[command]}`;

  if (command === "build")
    return `rm -rf dist/${appName} && cd ${appName} && ${COMMANDS[command]}`;

  if (command === "start") return `cd ${appName} && ${COMMANDS[command]}`;

  return "";
};

appList.forEach((appName, i) => {
  let cmd = getCommand(command, appName);
  exec(cmd, (error, stdout, stderr) => {
    console.group(`${appName}:${command}`);

    if (error) {
      console.error(`exec error: ${error}`);
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);

    console.groupEnd();

    if (i === appList.length - 1) console.log("All done!");
  });
});
