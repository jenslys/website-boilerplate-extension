const vscode = require("vscode");
const fse = require("fs-extra");
const path = require("path");

function activate(context) {
  console.log("Extension is now active!");

  let tailwinddisp = vscode.commands.registerCommand(
    "extension.createTailwindBoilerplate",
    async function () {
      if (!vscode.workspace) {
        return vscode.window.showErrorMessage(
          "Please open a project folder first"
        );
      }

      const folderPath = vscode.workspace.rootPath.toString().split(":")[1];
      const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Tailwind Boilerplate</title>
    <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="/css/style.css" />
    <link rel="stylesheet" href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" />
</head>
<body>
    <script src="/js/app.js"></script>
</body>
</html>
        `;

      fse.writeFile(path.join(folderPath, "index.html"), htmlContent, (err) => {
        if (err) {
          console.log(err),
            vscode.window.showErrorMessage("Failed to create HTML files");
        }
        fse.outputFile(path.join(folderPath, "/js/app.js"), "", (err) => {
          if (err) {
            console.log(err),
              vscode.window.showErrorMessage("Failed to create JS files");
          }

          fse.outputFile(path.join(folderPath, "/css/style.css"), "", (err) => {
            if (err) {
              console.log(err),
                vscode.window.showErrorMessage("Failed to create CSS files");
            }
            vscode.window.showWarningMessage("Created boilerplate files!");
          });
          fse.ensureDirSync(path.join(folderPath, "/images"));
          {
            vscode.window.showWarningMessage("Created boilerplate files!");
          }
        });
      });
    }
  );

  let boostrapdisp = vscode.commands.registerCommand(
    "extension.createBoostrapBoilerplate",
    async function () {
      if (!vscode.workspace) {
        return vscode.window.showErrorMessage(
          "Please open a project folder first"
        );
      }

      const folderPath = vscode.workspace.rootPath.toString().split(":")[1];
      const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Boostrap Boilerplate</title>
    <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="/css/style.css" />
    <link rel="stylesheet" href="https://unpkg.com/bootstrap@^5/dist/css/bootstrap.min.css" />
    </head>
<body>
    <script src="/js/app.js"></script>
    <script src="https://unpkg.com/bootstrap@^5/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
        `;

      fse.writeFile(path.join(folderPath, "index.html"), htmlContent, (err) => {
        if (err) {
          console.log(err),
            vscode.window.showErrorMessage("Failed to create HTML files");
        }
        fse.outputFile(path.join(folderPath, "/js/app.js"), "", (err) => {
          if (err) {
            console.log(err),
              vscode.window.showErrorMessage("Failed to create JS files");
          }

          fse.outputFile(path.join(folderPath, "/css/style.css"), "", (err) => {
            if (err) {
              console.log(err),
                vscode.window.showErrorMessage("Failed to create CSS files");
            }
            vscode.window.showWarningMessage("Created boilerplate files!");
          });
          fse.ensureDirSync(path.join(folderPath, "/images"));
          {
            vscode.window.showWarningMessage("Created boilerplate files!");
          }
        });
      });
    }
  );

  context.subscriptions.push(tailwinddisp);
  context.subscriptions.push(boostrapdisp);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}
exports.deactivate = deactivate;
