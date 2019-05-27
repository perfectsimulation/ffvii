import config from "../config";
/**
 * Load the cars from the spreadsheet
 * Get the right values from it and assign.
 */
export function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Sheet1!A2:C44"
      })
      .then(
        response => {
          const data = response.result.values;
          // console.log(data);
          const chapters = data.map(chapter => ({
            index: chapter[0],
            title: chapter[1],
            content: chapter[2],
          })) || [];
          callback({
            chapters
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}