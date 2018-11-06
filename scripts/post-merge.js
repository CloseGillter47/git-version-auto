// const execSync = require('child_process').execSync
// const res = execSync(`git rev-parse --abbrev-ref HEAD`).toString().trim()

// // 主干分支
// if (res === 'master') {
//   console.log('====>> ', '主干分支')
//   execSync(`npm version minor`)
//   process.exit(0)
// }

// // 开发分支
// if (res === 'develop') {
//   console.log('====>> ', '开发分支')
//   execSync(`npm --no-git-tag-version version patch`)
//   process.exit(0)
// }


// process.exit(1)
