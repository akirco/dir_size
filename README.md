## dir_size

Get folder size quickly using N-API and Rust

## Usage

```js
import { getFolderSize } from '@akirco/dir_size'
const start = Date.now()
const folderSize = await getFolderSize(myFolder)
const end = Date.now()
console.log('Execution time:', (end2 - start2) / 1000, 's')
console.log(`The folder is ${folderSize} bytes large`)
console.log(`That is the same as ${(Number(folderSize) / 1000 / 1000).toFixed(2)} MB`)
```

## bench

```
JavaScript Execution time: 0.331 s
The folder is 2411680202 bytes large
That is the same as 2411.68 MB
-----------------------------
Execution time: 0.085 s
The folder is 2411680202 bytes large
That is the same as 2411.68 MB
  ✔ sync function from native code (418ms)
  ─

  1 test passed

┌─────────┬──────────────┬─────────────────────┬───────────────────────┬────────────────────────┬────────────────────────┬─────────┐
│ (index) │ Task name    │ Latency avg (ns)    │ Latency med (ns)      │ Throughput avg (ops/s) │ Throughput med (ops/s) │ Samples │
├─────────┼──────────────┼─────────────────────┼───────────────────────┼────────────────────────┼────────────────────────┼─────────┤
│ 0       │ 'Native'     │ '80245388 ± 0.31%'  │ '79951050 ± 507350'   │ '12 ± 0.30%'           │ '13 ± 0'               │ 64      │
│ 1       │ 'JavaScript' │ '277332505 ± 0.73%' │ '275923000 ± 5460100' │ '4 ± 0.71%'            │ '4 ± 0'                │ 64      │
└─────────┴──────────────┴─────────────────────┴───────────────────────┴────────────────────────┴────────────────────────┴─────────┘
```
