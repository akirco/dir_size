import test from 'ava'

import getFolderSize from 'get-folder-size'
import { getFolderSize as Size } from '../index'

test('sync function from native code', async (t) => {
  const myFolder = process.cwd()
  console.log(myFolder)

  const start1 = Date.now()
  const folderSize = await getFolderSize.loose(myFolder)
  const end1 = Date.now()
  console.log('JavaScript Execution time:', (end1 - start1) / 1000, 's')
  console.log(`The folder is ${folderSize} bytes large`)
  console.log(`That is the same as ${(folderSize / 1000 / 1000).toFixed(2)} MB`)

  console.log('-----------------------------')

  const start2 = Date.now()
  const folderSize2 = await Size(myFolder)
  const end2 = Date.now()
  console.log('Execution time:', (end2 - start2) / 1000, 's')
  console.log(`The folder is ${folderSize2} bytes large`)
  console.log(`That is the same as ${(Number(folderSize2) / 1000 / 1000).toFixed(2)} MB`)

  t.pass()
})
