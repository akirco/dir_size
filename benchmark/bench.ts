import { Bench } from 'tinybench'

import { getFolderSize as getDirectorySize } from '../index.js'

import getFolderSize from 'get-folder-size'

const b = new Bench()

b.add('Native', async () => {
  await getDirectorySize('E:\\projects\\nextjs')
})

b.add('JavaScript', async () => {
  await getFolderSize.loose('E:\\projects\\nextjs')
})

await b.run()

console.table(b.table())
