## dir_size

Get folder size quickly using N-API and Rust

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
