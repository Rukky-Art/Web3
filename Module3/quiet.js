async function activityTable(day) {
  // Step 1: read main list of logfiles
  let logFileList = await textFile("camera_logs.txt");
  let logFiles = logFileList.trim().split("\n");

  // Step 2: prepare result array (24 hours)
  let table = new Array(24).fill(0);

  // Step 3: process each logfile
  for (let file of logFiles) {
    let content = await textFile(file);
    let timestamps = content.trim().split("\n");

    for (let ts of timestamps) {
      if (!ts) continue; // skip empty lines
      let date = new Date(Number(ts));
      if (date.getDay() === day) {
        let hour = date.getHours();
        table[hour]++;
      }
    }
  }

  return table;
}

// Example usage:
activityTable(1) // Monday
  .then(table => console.log(activityGraph(table)));



// function activityTable(day) {
//   return textFile("camera_logs.txt")
//     .then(logFileList => {
//       let logFiles = logFileList.trim().split("\n");
//       let table = new Array(24).fill(0);

//       // Read all logfiles in parallel
//       return Promise.all(logFiles.map(file =>
//         textFile(file).then(content => {
//           let timestamps = content.trim().split("\n");
//           for (let ts of timestamps) {
//             if (!ts) continue;
//             let date = new Date(Number(ts));
//             if (date.getDay() === day) {
//               table[date.getHours()]++;
//             }
//           }
//         })
//       )).then(() => table);
//     });
// }

// // Example usage:
// activityTable(1)
//   .then(table => console.log(activityGraph(table)));
